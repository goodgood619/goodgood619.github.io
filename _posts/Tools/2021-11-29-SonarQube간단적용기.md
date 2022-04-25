---
title : "SonarQube 간단 적용 후기"
excerpt : ""

categories:
    - tools

tags:
        - SonarQube
        - SonarLint
        - JHipster
        - Docker

        
last_modified_at: 2021-11-29
---

### SonarQube 간단 적용 후기

---


- SonarQube는 정적 분석 도구 tool이다.
- 코드의 잠재적인 위험성을 진단해주며, secure coding을 할수 있게 해준다.
- 유사하게 SonarLint가 있다.
    - 이것은 실제로, 프로그래밍을 할때 실시간으로 적용되게 해줄수 있는 Lint 역할을 한다.
- IDE에서도 plugin으로 설치할 수 있다.
- 사내프로젝트는 Jhipster를 통해 만들어진 프로젝트인데
    - 여기에 sonarQube가 기본적으로 세팅이 되어있다.
    - local로 테스트 하려면, docker를 이용해서 테스트 해도 된다.
    - 출처 : [https://www.jhipster.tech/code-quality/](https://www.jhipster.tech/code-quality/)
    