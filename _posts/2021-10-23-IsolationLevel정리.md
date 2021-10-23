---
title : "Linux에서 Local로 파일 쉽게 옮기는 법 (command Line)"
excerpt : ""

categories:
    - DataBase

tags:
        - Isolation
        - Transaction
        
last_modified_at: 2021-10-23
---



## @Transactional의 Isolation Level에 관하여


Spring에서 Transaction 처리를 지원하는데, 이와 관련된 annotation

옵션 : isolation, `rollbackFor` , readOnly 등

오늘은 isolation LEVEL을 확인해보겠다.

isolation에는 LEVEL이 있다.

LEVEL1(Dirty Read) : 커밋되지 않은 데이터 읽기 허용

→ Dirty Read 발생

해결 : READ COMMITED

- 커밋된 데이터 읽기 허용

LEVEL2(NonRepeatable Read) : transaction A에서 조회하고, transaction B에서 그 사이에 update를 한 경우 다시 transaction A에서 읽었을때, 값이 달라지는 현상

→ NonRepeatable Read 발생

해결 : Repeatable read (lock-based concurrency)

- 트랜잭션이 시작하는 순간부터 트랜잭션이 완료될 때까지 select문장에 사용되는 모든 데이터는 shared lock이 걸림.
- 그러나, Range Lock의 경우는 그렇지 않다.
- Repeatable Read에서는 `Range Lock이 걸리지 않는다` !!!!!

LEVEL3(Phantom Read) : transaction A에서 갱신하고 commit 했는데, transaction B에서도 동시에 갱신하고 commit 했을때, A에서 조회했을때 A가 아닌 B로 적용된 값이 보일때 (단, Range가 적용된 Query를 적용할 경우)

- Insert를 했을때, 보이지 않은 row가 생겨난다.
- 그래서, Range가 있는 SELECT절의 경우에서 Insert하거나 Delete, Update(이건 안해봐서 잘모르겠다)를 하면 PhantomRead가 발생하는 것이다

해결 : Serialization (multiversion concurrency control)

- Serialization을 하게되면 Range Lock이 걸리게 된다.

출처 

- [https://chrisjune-13837.medium.com/db-transaction-isolation-level-f21b6d1e64eb](https://chrisjune-13837.medium.com/db-transaction-isolation-level-f21b6d1e64eb)
- [https://en.wikipedia.org/wiki/Isolation_(database_systems)#Phantom_reads](https://en.wikipedia.org/wiki/Isolation_(database_systems)#Phantom_reads)