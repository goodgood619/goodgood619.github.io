---
title : "Hash Collision에 대해 & HashMap을 연관지어서"
excerpt : ""

categories:
    - Java

tags:
        - HashMap
        - Hash Collision
        - Separate Chaining
        - tieBreakOrder Method
        - Java
        
last_modified_at: 2022-04-30
---

### HashMap 관련 및 Hash Collision 관련 정리

---

- key - value 형태
- key : 배열의 인덱스, `Hash Bucket` 이라고 불림
- key -> hashcode() % m 으로 변경
- 데이터가 많아지면 당연히 `1 / m 확률로 해시 값이 같아지겠군`
- 근데 key값은 int범위여서 2^32승을 넘을순 없음
- 무한히 늘릴 수 없고, 결국 `hash Collsion`이 생김
- Java에서는 Hash Collsion을 `Separate Chaining을 통해 해결`
    - 충돌시, Hash Bucket의 key 내부의 value들을 Chaining 형태로 이어 놓은 것을 의미
    - 일반적으로는 LinkedList를 사용
    - Java 8 부터는 데이터가 많아지면, LinkedList 대신에 `tree를 사용해 성능을 높임`
        - Java의 TreeMap을 사용하고
        - Red Black Tree로 구성되어 있음
        - 그러면 value가 똑같은 경우는 동일하게 취급 될텐데 어떻게 처리하는가?
            - HashMap에서는 `tieBreakOrder` method를 이용해 처리
            - `System.identityHashCode 값을 이용해 대소 크기를 판별`함
    - value 값들의 갯수가 8개(기본값)을 넘어가면 Tree로 변경
    - 그러나, 6개 이하로 떨어질 경우 다시 LinkedList로 변경
        - 혼용해서 쓰는 이유는
            - Tree가 어쨌든 List보다 메모리를 많이 할당받기 때문임
- 버킷의 최대 갯수는 2^30, 일정 데이터 갯수가 되면 2배로 늘림(밀도가 3/4를 넘어서는 시점)
    - 그런데 m 값이 2^a 값이어서, 하위 비트의 a개만 사용한다.
    - (a =5 일경우, 0,2,4,8,16 이렇게 5개의 값들만 가지고 서로 더하거나 연산을 해서 사용한다는 의미)
    - 한마디로 m값을 짝수로 하면, 홀수 % 짝수 => 홀수, 짝수 % 짝수 => 짝수
    - 예측이 쉽다, 충돌이 발생할 가능성도 높다,
    - 만약 전부 짝수만 계속 들어오거나, 홀수만 계속 hashcode로 계산되서 들어오면
    - 나머지 절반의 bucket은 사실상 사용이 안되니까 무의미 한것 처럼 보이게 된다.
- 그래서 m 값을 보조 해시 함수로 변형할 필요가 있다. (특히, `홀수 이면서 소수`여야 한다)
- 이때는 그래서 m 값을 `소수` 값으로 바꾸는데,
- Java 8 이상부터는 key의 hashcode와 value의
- hashcode를 XOR 연산한값을 hashcode값으로 취한다고 한다
    - 단순한 보조해시 함수를 사용한다
    - 이유는
        - Java 8 부터 LinkedList 대신 Tree를 사용해서 충돌 성능 문제 완화
        - 해쉬함수 성능이 좋아져서 덜 충돌한다고 함

<br/>
<br/>

출처 : 

[https://didrlgus.github.io/java/06-post/](https://didrlgus.github.io/java/06-post/)

[https://d2.naver.com/helloworld/831311](https://d2.naver.com/helloworld/831311)