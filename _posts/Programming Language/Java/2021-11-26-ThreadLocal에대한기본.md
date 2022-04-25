---
title : "ThreadLocal에 대하여 (기본)"
excerpt : ""

categories:
    - Java

tags:
        - Java
        - language
        - ThreadLocal

        
last_modified_at: 2021-11-26
---

### ThreadLocal

---

- ThreadLocal은 해당 Thread만 접근할 수 있는 특별한 저장소를 말한다.
- ThreadLocal을 사용하면 각각 별도의 내부 저장소를 제공한다.
- 따라서 같은 인스턴스의 쓰레드 로컬 필드에 접근해도 문제가 생기지 않는다.

<br/><br/>

### ThreadLocal을 써야 할때

---

- 쓰레드 기준으로 동작해야 하는 기능을 구현할 때 ThreadLocal을 유용하게 사용
- 사용자 인증정보 전파
    - Spring Security에서는 ThreadLocal을 이용해서 사용자 인증 정보를 전파한다.
- 트랜잭션 컨텍스트 전파
    - 트랜잭션 매니저는 트랜잭션 컨텍스트를 전파하는 데 ThreadLocal을 사용한다.
- 쓰레드에 안전해야 하는 데이터 보관

<br/><br/>

### 주의 사항

---

- 쓰레드 풀 환경에서 ThreadLocal을 사용하는 경우
    - ThreadLocal 변수에 보관된 데이터의 사용이 끝나면 반드시 해당 데이터를 삭제해 주어야 한다.
    - 그렇지 않을 경우 재사용되는 쓰레드가 올바르지 않은 데이터를 참조할 수 있다.

<br/><br/>

출처 : 

[https://velog.io/@gmtmoney2357/JAVA-쓰레드-로컬ThreadLocal](https://velog.io/@gmtmoney2357/JAVA-%EC%93%B0%EB%A0%88%EB%93%9C-%EB%A1%9C%EC%BB%ACThreadLocal)

[https://javacan.tistory.com/entry/ThreadLocalUsage](https://javacan.tistory.com/entry/ThreadLocalUsage)