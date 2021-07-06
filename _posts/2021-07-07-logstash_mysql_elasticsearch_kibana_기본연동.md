---
title : "mysql, logstash, elasticsearch, kibana 설치 및 연동 예제"
excerpt : ""

categories:
    - SQL

tags:
        - MYSQL
        - LogStash
        - ElasticSearch
        - Kibana
last_modified_at: 2021-07-07
---

mysql과 logstash를 연동한후, logstash의 output을 elasticsearch로 연동해주는 conf 파일을 작성해야 한다.

그다음, kibana를 연동하면 좀 더 시각화된 형태의 데이터를 볼 수 있는 것이다.

참고로 버젼은 다음과 같이 진행되었음을 알린다.

OS : Ubuntu 20.04

mysql : 8.0.18

logstash : 7.13

kibana : 7.x.x

elasticsearch : 7.x.x

```bash
wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
sudo apt-get install apt-transport-https
echo "deb https://artifacts.elastic.co/packages/7.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-7.x.list
sudo apt-get update && sudo apt-get install logstash kibana elasticsearch
```

그다음, systemctl 명령어로 logstash, kibana, elasticsearch를 실행하고 상태를 확인해본다.

```bash
sudo systemctl logstash start
sudo systemctl kibana start
sudo systemctl elasticsearch start
service logstash status
service kibana status
service elasticsearch status
```

logstash는 기본 port는 5044

elasticsearch의 기본 port는 9200, 

kibana의 기본 port는 5601이다.

그다음 mysql-connector-java-8.0.18.jar를 깔아준다.

mysql에 접속하여 샘플 Database와 table을 만들어본다.

```sql
CREATE DATABASE es_db;
USE es_db;
DROP TABLE IF EXISTS es_table;
CREATE TABLE es_table (
  id BIGINT(20) UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY unique_id (id),
  client_name VARCHAR(32) NOT NULL,
  modification_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  insertion_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

그다음, logstash와 mysql을 연동하기 위한 conf 파일을 작성해야 한다.

위치는 어디에 작성해도 상관없다.

그다음 logstash를 실행해줘야한다.

여기서 은근 답이 없는게, logstash를 어디서 실행해야 하는지 생각보다 찾기가 어려웠다.

기본 위치는 다음과 같다.

Ubuntu : /usr/share/logstash/bin/logstash이다.

 

그다음 원하는 위치에 db.conf를 만들어서 다음과 같이 작성해본다.

```bash
# Sample Logstash configuration for creating a simple
# Beats -> Logstash -> Elasticsearch pipeline.

input {
  jdbc {
	jdbc_driver_library => "/lib/mysql-connector-java-8.0.18.jar" // mysql-connector-java가 위치한곳
	jdbc_driver_class => "com.mysql.jdbc.Driver"
	jdbc_connection_string => "jdbc:mysql://localhost:기본포트/mysqlDatabase이름?serverTimezone=UTC"
	jdbc_user => "root"
	jdbc_password => ""
	jdbc_paging_enabled => true
	tracking_column => "unix_ts_in_secs"
	use_column_value => true
	tracking_column_type => "numeric"
	schedule => "*/5 * * * * *"
	statement => "SELECT *, UNIX_TIMESTAMP(modification_time) AS unix_ts_in_secs FROM es_table WHERE (UNIX_TIMESTAMP(modification_time) > :sql_last_value AND modification_time < NOW()) ORDER BY modification_time ASC"		
  }
}

filter {
  mutate {
    copy => { "id" => "[@metadata][_id]"}
    remove_field => ["id", "@version", "unix_ts_in_secs"]
  }
}

output {
   elasticsearch {
    	index => "es" // Database의 이름과 맞췄다
    	document_id => "%{[@metadata][_id]}"
    	document_type => "_doc"
    #user => "elastic"
    #password => "changeme"
   }
}
```

`매우 중요`

```bash
sudo /usr/share/logstash/bin/logstash -f "con.f파일을 만든위치"
```

출처의 logstash와 mysql 연동 관련 및 실행 예제를 그대로 따라가 보면 된다.

[출처]

좋은 참고 자료 : [https://msyu1207.tistory.com/entry/ELK-Logstash-설치하기?category=93258](https://msyu1207.tistory.com/entry/ELK-Logstash-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0?category=932586)

logstash install : [https://www.elastic.co/guide/en/logstash/current/installing-logstash.html](https://www.elastic.co/guide/en/logstash/current/installing-logstash.html)

logstash와 mysql 연동 관련 및 실행 예제: [https://www.elastic.co/kr/blog/how-to-keep-elasticsearch-synchronized-with-a-relational-database-using-logstash](https://www.elastic.co/kr/blog/how-to-keep-elasticsearch-synchronized-with-a-relational-database-using-logstash)