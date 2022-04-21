---
title : "Transactional LEVEL 정확히 정리 (Inno DB 기준)"
excerpt : ""

categories:
    - DataBase

tags:
        - Isolation
        - Transaction
        
last_modified_at: 2022-04-21
---



## @Transactional의 Isolation Level에 관하여


Spring에서 Transaction 처리를 지원하는데, 이와 관련된 annotation

옵션 : isolation, `rollbackFor` , readOnly 등

미리 알고 가면 좋을 내용이다.

- Consistent Read
    - **read(=`SELECT`) operation을 수행할 때**
    - **현재 DB의 값이 아닌 특정 시점의 DB snapshot을 읽어오는 것**이다.
    - 물론 **이 snapshot은 commit 된 변화만이 적용된 상태를 의미한다.**
    - 구현 방법
        - `lock을 사용하지 않고`
        - **InnoDB 엔진은 각 쿼리를 실행할 때마다 실행한 쿼리의 `log를 차곡차곡 저장`한다.**
        - **그리고 나중에 consistent read를 할 때**
        - **이 `log를 통해` `특정 시점의 DB snapshot을 복구`하여 가져온다.**
- Shared Lock
    - 읽기 연산 시 발생하는 Lock
    - 말 그대로 Shared 여서, 같은 읽기 연산이 들어오는 것은 허용한다.
    - 그러나, 쓰기 연산은 허용하지 않는다.
- Exclusive Lock
    - 쓰기 연산 시 발생하는 Lock
    - 말 그대로 Exclusive 여서, 같은 쓰기연산, 읽기 연산 모두 허용하지 않는다.

- LEVEL1(Dirty Read) : 커밋되지 않은 데이터 읽기 허용
    - Dirty Read 발생
- 해결 : READ COMMITED
    - 커밋된 데이터 읽기 허용
    - `Select를 수행할 때마다`(read 연산) Consistent Read를 다시 수행한다.
    - 그러다보니, read 연산을 할때마다 일관되지 않은 값을 볼 수도 있게 된다.
        - NonRepeatable Read 발생
    - 또한, `Record Lock` 이라는 것이 걸린다.
        - DB Index Record에 걸리는 Lock이다.
        - 그러다보니, DB Index가 아닌 row가 Insert 되면
        - `Phantom Read` 또한 발생할 수 있다.
- LEVEL2(NonRepeatable Read) :
    - NonRepeatable Read
    - transaction A에서 조회하고, transaction B에서 그 사이에 update를 한 경우 다시 transaction A에서 읽었을때, 값이 달라지는 현상
    - NonRepeatable Read 발생
- 해결 : Repeatable read (lock-based concurrency)
    - 처음으로, Select 를 수행한 (read를 수행한) 그 시점의 consistent Read를 기록 하고, 그 이후에도 처음 수행 시점으로 consistent read를 수행한다.
    - 그래서, 값이 변경되든 안되든 동일한 read 값이 보이게 된다.
    - 그러나 다음의 문제점이 있을 수 있다.
    - 정확히 말하면, `Gap Lock` 이 걸린다.
        - DB Index record 중에서 `Gap`에 걸리는 Lock이다.
        - `실제 Index에 데이터가 없는 부분`에 걸리는 Lock 이라는 의미
        - ex) select 조회를 10  ~ 20 에서 11,16이 있다고 가정하면
        - 10, 12~15, 17 ~ 20이 lock이 걸리는 것이다.
    - 그러면, 기존의 value값들은 lock이 안걸리니까, update나 delete가 가능하게 된다.
        - Phantom Read 발생
- LEVEL3(Phantom Read)
    - Phantom Read
    - transaction A에서 갱신하고 commit 했는데, transaction B에서도 동시에 갱신하고 commit 했을때, A에서 조회했을때 A가 아닌 B로 적용된 값이 보일때 (단, Range가 적용된 Query를 적용할 경우
        - 새로운 값이 Insert를 했을때, 보이지 않은 row가 생겨난다.
            - Read Commited에서의 문제
        - 반대로,  기존에 존재하는 row들을 update하거나 delete를 할 수도 있다.
            - Repetable Read에서의 문제
- 해결 : Serialization (multiversion concurrency control)
    - 그러나, Serialization을 하게되면 굉장히 쉽게 DeadLock에 걸릴 수 있으므로 주의 해야 한다.
    - ex) Transaction A와 B가 각각 `동일한 Read 연산`을 실행하게 되면
        - A와 B 각각 같은 row들에 Shared-Lock (S lock)을 건다
        - 이때, 둘다 A,B 같은 row들에 Update or Delete를 순차적으로 하게 되면
            - S Lock이 걸렸으므로 Update or Delete 연산(쓰기 작업)을 수행할 수 없게 된다
            - 그러므로, 둘 다 시도 했지만 해결을 못하게 되어 쉽게 DeadLock에 빠질 수 있다.

그러므로, isolation level을 적절히 설정하는 것이 아주 중요한 것 같다.

출처 

- [https://chrisjune-13837.medium.com/db-transaction-isolation-level-f21b6d1e64eb](https://chrisjune-13837.medium.com/db-transaction-isolation-level-f21b6d1e64eb)
- [https://en.wikipedia.org/wiki/Isolation_(database_systems)#Phantom_reads](https://en.wikipedia.org/wiki/Isolation_(database_systems)#Phantom_reads)
- [https://suhwan.dev/2019/06/09/transaction-isolation-level-and-lock/](https://suhwan.dev/2019/06/09/transaction-isolation-level-and-lock/)