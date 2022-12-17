---
title : "jib plugin에 대해"
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
        
last_modified_at: 2022-12-17
---


### jib plugin에 대한 간단 설명

---

- google에서 만든 plugin
- dockerImage를 쉽게 만들고, 특정 Docker Registry로 손쉽게 보내주는 기능을 제공
    - ex) docker hub , AWS ECR, 등등
- 사용법이랑 configuration은 Github에 존재한다
    - [https://github.com/GoogleContainerTools/jib/tree/master/jib-gradle-plugin#container-closure](https://github.com/GoogleContainerTools/jib/tree/master/jib-gradle-plugin#container-closure)