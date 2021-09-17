---
title : "atlas oracle 설정 관련 및 이슈"
excerpt : ""

categories:
    - SQL

tags:
        - OHDSI
        - Atlas
        - ORACLE
        - docker-compose
        - flyway 
last_modified_at: 2021-09-17
---

[환경]

버젼은 다음과 같이 진행되었음을 알린다.

OS : Ubuntu 20.04

oracle : 11g Express Edition

--- 

[구현목표]

docker-compose를 세팅하고, Atlas(BroadSea) 관련 설정만 변경한다.

OHDSI 스키마를 만들고, table이 잘 만들어졌는지 확인해본다.

그 후, 부족한 테이블을 실행시키는 쿼리를 별도로 실행해본다.

Atlas에 접속해서, 여러가지 기능들을 점검해본다.

---

[준비물]

* Atlas Oracle docker-compose.yml 내용

* Oracle JDBC Driver (JDK 1.8 버젼과 호환되는 ojdbc8 버젼 Driver)

* OHDSI 부족한 스키마 테이블 형성 위한 스크립트

* Atlas용 DockerImage

* config-local.js 파일 (불필요할수 있음)


[과정]  

package파일을 docker-compose로 변경한 후에, docker-compose를 /usr/local/bin/ 으로 옮기고, x 권한을 줘서 프로그램을 실행시킬수 있게 만든다.

```
wget https://github.com/docker/compose/releases/download/1.24.0/docker-compose-Linux-x86_64

mv docker-compose-Linux-x86_64 docker-compose
mv docker-compose /usr/local/bin/
chmod +x /usr/local/bin/docker-compose
docker-compose --version
```

폴더를 만들고 만든 폴더로 이동한 후, docker-compose 파일을 작성합니다.

[Atlas Oracle docker-compose.yml 예제]

```
version: '2'

services:
  oracle:
    image: jaspeen/oracle-xe-11g
    container_name: oracle11g
    cpuset: 0-7
    shm_size: "1gb"
    volumes:
      - /data/volumes/ohdsi-oracle:/u01/app/oracle
    ports:
      - 1521:1521
      - 29091:8080
      - 5500:5500
#    environment:
#       - ORACLE_PWD=1234
#       - ORACLE_CHARACTERSET=AL32UTF8

  broadsea-webtools:
    image: ohdsi/broadsea-webtools
    ports:
     - "19091:8080"
    volumes:
     - .:/tmp/drivers/:ro
     - ../config-local.js:/usr/local/tomcat/webapps/atlas/js/config-local.js:ro
       #  - ./ojdbc8-19.3.0.0.jar:/usr/local/tomcat/webapps/WebAPI/WEB-INF/lib/ojdbc8-19.3.0.0.jar
     - /usr/share/zoneinfo/Asia/Seoul:/etc/localtime:ro
    environment:
     - WEBAPI_URL=http://localhost:19091
     - env=webapi-oracle
     - security.origin=*
     - datasource.driverClassName=oracle.jdbc.driver.OracleDriver
     - datasource.url=jdbc:oracle:thin:@oracle11g:1521:XE
     - datasource.cdm.schema=cdmSchema
     - datasource.ohdsi.schema=ohdsiSchema
     - datasource.username=ohdsiSchema
     - datasource.password=1234
     - spring.jpa.properties.hibernate.default_schema=ohdsiSchema
     - spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.Oracle10gDialect
     - spring.batch.repository.tableprefix=ohdsiSchema.BATCH_
     - flyway.datasource.driverClassName=oracle.jdbc.driver.OracleDriver
     - flyway.datasource.url=jdbc:oracle:thin:@oracle11g:1521:XE
     - flyway.schemas=ohdsiSchema
     - flyway.placeholders.ohdsiSchema=ohdsiSchema
     - flyway.datasource.username=ohdsiSchema
     - flyway.datasource.password=1234
     - flyway.locations=classpath:db/migration/oracle
#     - logging.level.org.springframework.web=DEBUG
#     - logging.level.org.hibernate=DEBUG
#     - logging.level.root=DEBUG
#     - logging.level.org.ohdsi=DEBUG
#     - logging.level.org.springframework.orm=DEBUG
#     - logging.level.org.springframework.jdbc=DEBUG
#     - logging.level.org.apache.shiro=DEBUG
     - TZ=Asia/Seoul

 networks:
  default:
    external:
      name: ohdsi-sample

```
나머지 ohdsiSchema 명과 비밀번호, 기존의 CDM Schema명, port등 설정 정보를 유심히 체크합니다.

준비한 Oracle JDBC Driver를 현재 위치에 옮겨놓습니다.

sqlplus를 입력한다.   
(만약, docker를 사용중이라면)

```
 docker exec -it [DBContainerName] sqlplus
```

(유의 : ID : system, PW : oracle (Oracle Default 전체 계정으로 접속해야함), 혹은 다른 계정이 있다면 그 계정으로 접속)

만들어진 ohdsiSchema 계정이 접속되는지, 확인해봅니다.

docker-compose up -d로 실행을 시킵니다. 

docker logs -f [AtlasContainer이름]을 통해 ohdsiSchema가 잘 만들어지고 있는지 확인합니다.

Schema가 다 만들어지면, source, source_daimon table 관련 query문을 insert합니다. 

```
-- remove any previously added database connection configuration data
truncate ohdsiSchema.source;
truncate ohdsiSchema.source_daimon;

-- OHDSI CDM source
INSERT INTO ohdsiSchema.source( source_id, source_name, source_key, source_connection, source_dialect)
VALUES (1, 'OHDSI CDM V5 Database', 'OHDSI-CDMV5',
  'jdbc:oracle:thin:user-name/user-password@host:port:database', 'oracle');

-- CDM daimon
INSERT INTO ohdsiSchema.source_daimon( source_daimon_id, source_id, daimon_type, table_qualifier, priority) VALUES (1, 1, 0, 'CDM_HIRA_2012', 2);

-- VOCABULARY daimon
INSERT INTO ohdsiSchema.source_daimon( source_daimon_id, source_id, daimon_type, table_qualifier, priority) VALUES (2, 1, 1, 'CDM_HIRA_2012', 2);

-- RESULTS daimon
INSERT INTO ohdsiSchema.source_daimon( source_daimon_id, source_id, daimon_type, table_qualifier, priority) VALUES (3, 1, 2, 'ohdsiSchema', 2);

-- EVIDENCE daimon
INSERT INTO ohdsiSchema.source_daimon( source_daimon_id, source_id, daimon_type, table_qualifier, priority) VALUES (4, 1, 3, 'ohdsiSchema', 2);
```

(유의 : source_name, source_key, source_connection, OHDSI Schema, CDM Schema 관련 이름들을 적절히 알맞게 수정합니다.)

<http://localhost:포트번호/atlas> 로 접속해서, 에러가 있는지 확인해봅니다. 

(유의 : 에러가 뜰수 있음 => 설정 관련 부분을 다시 한번 잘 확인해봐야함)

별다른 특이사항이 없다면, 아래의 rest api를 호출하여 스크립트를 수정합니다. (유의 : ohdsiSchema 이름 맞게 변경, 중간에 4003이 insert가 중복으로 들어감)

관련 rest api :  
<http://localhost:포트번호/WebAPI/ddl/results?dialect=oracle&schema='OHDSISchema이름'&vocabSchema='CdmSchema이름'&tempSchema='OHDSISchema이름'&initConceptHierarchy=false>

```
BEGIN
  EXECUTE IMMEDIATE 'CREATE TABLE ohdsiSchema.cohort
 (COHORT_DEFINITION_ID int NOT NULL,
  SUBJECT_ID NUMBER(22) NOT NULL,
  cohort_start_date date NOT NULL,
  cohort_end_date date NOT NULL
)';

EXCEPTION
  WHEN OTHERS THEN
    IF SQLCODE != -955 THEN
      RAISE;

    END IF;

END;

-- ...이하생략
``` 

database docker에 다시 접속을 해봅니다.(ID : ohdsiSchema계정, PW : 관련비밀번호)

docker-compose를 다시 띄우고, Atlas 사이트에서 테스트를 해봅니다.


