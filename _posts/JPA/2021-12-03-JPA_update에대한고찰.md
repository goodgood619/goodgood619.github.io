---
title : "JPA update문제에 대한 고찰"
excerpt : ""

categories:
    - JPA

tags:
        - Java
        - JPA
        - JPQL
        - Persistent Context
        - entityManager
        - Update
        
last_modified_at: 2021-12-03
---


### JPA 영속성 컨텍스트로 쿼리 업데이트 vs JPQL로 쿼리 업데이트

---

결론부터 말하자면, 두개는 아예 다른 행위이다.

JPA 영속성 컨텍스트를 이용해 update하면, 

entityManager가 `dirty checking을 한다`

그래서, update이후에 select 쿼리를 날려도 영속성 컨텍스트가 자동으로 갱신되기 때문에 값에 문제가 없다.

<br/><br/>

그러나, 영속성 컨텍스트를 거치지 않고 직접 업데이트 할수 있는 방법이 있다.

JPQL이라는 방법이다. 

그래서, JPQL로 업데이트 한 후에 영속성 컨텍스트 값이랑 비교해보면 `당연히 틀리다`

왜냐하면, 

- 만약 이미 persist method로 영속성 컨텍스트에 해당 조회값이 있을때, 영속성 컨텍스트의 1차 캐시에 이미 값이 반영이 되어 있기 때문에
- 추가로 select 쿼리를 날리지 않고 영속성 컨텍스트에서 값을 가져오게 된다.

그러므로, JPQL의 경우, 해결 방법은 다음과 같다.

- flush method로 DB에 업데이트를 한후,
- clear method로 영속성 컨텍스트를 비워주자.

그러면, select문이 동작해도 1차 캐시값이 없기 때문에 새롭게 조회를 하게 된다.

<br/><br/>

그럼, 이런 생각이 든다.

- JPQL의 경우로 쿼리 업데이트를 했을 때, JPA 영속성 컨텍스트를 비우고 다시 불러와서 영속성 컨텍스트를 이용한 것 vs 영속성 컨텍스트를 이용하지 않은 것
    - 무엇이 더 성능이 좋은것일까
        - 데이터 양과 최적화된 조건 등등 여러가지 요인들에 의해서 갈릴 것 같다.
        - 데이터 처리 양이 많다면, 영속성 컨텍스트를 쓰지 않는 것이 당연히 좋을 것 같고
        - 데이터 처리 양이 적고 실시간으로 반영이 되야 한다면, 전자의 방법을 써서 그나마 나을 것 같다.
        - 전자의 방법보다 더 좋은게 있다면 JPQL을 사용하지 않고 JPA 영속성 컨텍스트를 이용한게 더 나을수도 있다.

<br/><br/>

출처 : [https://cobbybb.tistory.com/11](https://cobbybb.tistory.com/11)