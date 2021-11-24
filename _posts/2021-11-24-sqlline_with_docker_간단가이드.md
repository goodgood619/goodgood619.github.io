---
title : "sqlline의 간단 가이드와 docker Image 만들기"
excerpt : ""

categories:
    - DataBase

tags:
        - Sqlline
        - Java
        - JDK 11
        - Docker
        - Docker Compose
        - Linux

        
last_modified_at: 2021-11-24
---


### sqlline

---

sqlline은 관계형 DataBase SQL을 다루기 위한 Command-line shell 입니다.

실제로 사용했던 용도는 DataBase Connection이 제대로 되는지를 체크하기 위함입니다.

<br/><br/>

### 관련 Dockerfile 작성

---

- ojdbc6.jar ojdbc8.jar, postgresql-42.2.18.jar와 openjdk11, sqlline, telnet, curl 을 깔았음
- Dockerfile 내용

<br/>

```docker
FROM ubuntu:18.04

MAINTAINER yoonseoklee

RUN apt-get update && \
    apt-get install -y openjdk-11-jdk && \
    apt-get install -y sqlline && \
    apt-get install -y telnet && \
    apt-get install -y curl

RUN cd /usr/share/java \
&& mkdir -p psql \
&& cd psql \
&& curl -o postgresql.jar https://repo1.maven.org/maven2/org/postgresql/postgresql/42.2.18/postgresql-42.2.18.jar

ADD https://repo1.maven.org/maven2/com/oracle/database/jdbc/ojdbc6/11.2.0.4/ojdbc6-11.2.0.4.jar /usr/share/java/ojdbc6/
ADD https://repo1.maven.org/maven2/com/oracle/database/jdbc/ojdbc8/19.8.0.0/ojdbc8-19.8.0.0.jar /usr/share/java/ojdbc8/

ENTRYPOINT ["/bin/sh", "-c", "/bin/bash"]]
```

<br/>

- 관련 이슈 : sqlline은 최소 Java10 버젼 이상을 설치해야 한다.
    - Exception in thread "main" java.lang.UnsupportedClassVersionError: sqlline/SqlLine has been compiled by a more recent version of the Java Runtime (class file version 54.0), this version of the Java Runtime only recognizes class file versions up to 52.0
        - JDK8으로 설치 했을때의 관련 이슈, sqlline을 실행하기 위해서는 최소 Java10 이상 설치를 해야 합니다.
        

그다음 Dockerfile이 있는 위치에서, 원하는 이름으로 image를 만듭니다.

```docker
docker build -t 원하는이미지이름 .
```

그다음, docker run 명령을 통해 container를 실행합니다.

```docker
docker run -it --name 원하는container이름 만든이미지이름
```

 

그다음, docker exec 명령을 통해 container 내부로 들어갑니다.

```docker
docker exec -it 만들어진container이름 bash
```

<br/>

* 만약, docker-compose를 통해 연동하고 싶을때는 다음과 같이 테스트 해볼 수 있습니다.

```yaml
version: '2'
services:
  sqlline:
    image: 만든이미지이름
    ports:
      - 4000:4000
    tty: true
```

<br/><br/><br/>


### sqlline connect 연동 간단 사용법

---

<br/>

- 연동이 되는지 확인할 DataBase가 Oracle 이었기 때문에, Oracle 기준으로 설명을 드립니다.
- ojdbc6.jar 혹은 ojdbc8.jar를 세팅해줘야 합니다.
    - ojdbc6.jar를 세팅하려면 다음과 같이 입력합니다.
        
        ```java
        java -cp "/usr/share/java/*:/usr/share/java/ojdbc6/ojdbc6-11.2.0.4.jar" sqlline.SqlLine
        ```
        
        - 설명 : Driver를 sqlline이 제대로 catch하지 못하기 때문에, cp 옵션으로 해결해야 합니다.
            - 관련 출처 : https://github.com/julianhyde/sqlline/issues/450
        - 그다음 Driver가 제대로 세팅 되었는지 !scan 명령을 통해 확인합니다.
        - 그다음 !connect 명령을 통해 Oracle 접속을 시도합니다.
        - !connect jdbc:oracle:thin:@[ip]:[port]/[ServiceName] [id] [pw] 을 입력합니다.
        - 여기서 접속이 정확히 되었는지 확인하려면, SQL 관련 쿼리문을 반드시 날려봐야 합니다.
            - !dbinfo 라고 날렸을때 관련 정보가 나온다면 연결이 된 것입니다.
        
        간단한 예제의 형태는 다음과 같습니다.
        
        ![sqlline_example](/assets/sqlline_example.png)
        
    - ojdbc8.jar 또한 위와 유사합니다.
        
        ```java
        java -cp "/usr/share/java/*:/usr/share/java/ojdbc8/ojdbc8-19.8.0.0.jar" sqlline.SqlLine
        ```
        
        - 그 이후 과정은 위와 동일합니다.

<br/><br/>

참고 :

[SQLLine 1.12.0](https://julianhyde.github.io/sqlline/manual.html)

[sqlline & jdbcldap · Issue #450 · julianhyde/sqlline](https://github.com/julianhyde/sqlline/issues/450)
