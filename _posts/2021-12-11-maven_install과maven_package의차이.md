---
title : "mvn install 과 mvn package의 차이"
excerpt : ""

categories:
    - build tool

tags:
        - Maven
        - Java
        
last_modified_at: 2021-12-11
---

### maven package vs install

---

package와 install은 똑같이 jar 파일을 만들어준다. 그러나, local repository( 기본 설정 path는 .m2/repository)에 만들어지면 install 그렇지 않으면 package이다.

출처 : [https://traeper.tistory.com/entry/Maven-install-vs-package](https://traeper.tistory.com/entry/Maven-install-vs-package)