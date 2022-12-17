---
title : "jib vs BootBuildImage"
excerpt : ""

categories:
    - Develop

tags:
        - Spring Boot
        - Plugin
        - Gradle
        - Maven
        - Docker Image
        - AWS ECR
        - jib
        - BootBuildImage
        
last_modified_at: 2022-12-17
---

### BootBuildImage
---

- Spring Boot 2.3 이후 부터 내장 기능으로 사용 가능하다
- 별도의 Dockerfile을 만들지 않아도, docker image를 만들 수 있다
    - 다른 방법으로는 google에서 만든 plugin 중에 jib 라는 것이 있다

### Jib vs BootBuildImage

---

- Jib와 BoodBuildImage의 가장 큰 차이는 BuildPack.io를 쓰냐 안쓰냐 이다.
    - BuildPack : stack에 있는 기본 image이다
        - run Image 라는 명령어를 돌리게 된다
        - 그리고, 이때 rebase 라는 기술이 동작하게 되는데
        - rebase는 image를 만들때 application을 rebuild하지 않아도, 다른 부분만 인식하게 해서 효율적으로 image를 만들수 있게 도와준다
    - Jib는 물론 BuildPack을 이용하지는 않지만, caching과 재생산성 기술을 활용해 rebase와 비교해 봤을 때 별도의 추가 비용이 들지는 않아서 결과는 동일하다
- 결론은, `사용하는 기술이 다른 것이지` 어떤 것이 더 우위에 있는건 아니다
- 출처
    - [https://stackoverflow.com/questions/64048127/what-is-the-difference-between-spring-bootbuild-image-vs-jib](https://stackoverflow.com/questions/64048127/what-is-the-difference-between-spring-bootbuild-image-vs-jib)