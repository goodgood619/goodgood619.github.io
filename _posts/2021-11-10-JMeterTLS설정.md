---
title : "JMeter https로 테스트 해볼 수 있는 방법"
excerpt : ""

categories:
    - Linux

tags:
        - TLS
        - Apache JMeter
        - SSL
        
last_modified_at: 2021-11-08
---

### Apache JMeter TLS 관련 설정

---

JMeter : 5.4.1 기준

<br/>

- jmeter가 깔린 위치의 configuration 파일들을 바꿔줘야한다.
    
    <br/>
    
    - 위치 : /usr/local/Cellar/jmeter/5.4.1/libexec/bin (macOS 기준)
    - vim 편집기로, [user.properties](http://user.properties) 맨아래에다가 추가하자
    
    ```bash
    https.default.protocol=TLSv1.3
    ```
    
    <br/>

    - 그다음은, system.properties에 다음과 같이 변경하자
    
    ```bash
    # ...
    #The following can be used with ssl:
    #        record       enable per-record tracing
    #        handshake    print each handshake message
    #        keygen       print key generation data
    #        session      print session activity
    #        defaultctx   print default SSL initialization
    #        sslctx       print SSLContext tracing
    #        sessioncache print session cache tracing
    #        keymanager   print key manager tracing
    #        trustmanager print trust manager tracing
    #
    #        handshake debugging can be widened with:
    #        data         hex dump of each handshake message
    #        verbose      verbose handshake message printing
    #
    #        record debugging can be widened with:
    #        plaintext    hex dump of record plaintext
    #
    # Examples:
    javax.net.debug=all
    jdk.tls.client.protocols="TLSv1,TLSv1.1,TLSv1,2,TLSv1.3"
    #javax.net.debug=sslctx,session,sessioncache
    # ...
    ```
    
    <br/>

    - 그다음은, jmeter.properties를 다음과 같이 변경하자
    
    ```bash
    # ...
    # Be aware that https default protocol may vary depending on the version of JVM
    # See https://blogs.oracle.com/java-platform-group/entry/diagnosing_tls_ssl_and_https
    # See https://bz.apache.org/bugzilla/show_bug.cgi?id=58236
    # Default HTTPS protocol level:
    https.default.protocol=TLSv1.3
    # This may need to be changed here (or in user.properties) to:
    https.default.protocol=SSLv3
    # ...
    ```

<br/>

- 다시 실행해보고, HTTP REQUEST를 한번 날려보도록 하자

<br/><br/>

출처 : [https://stackoverflow.com/questions/67955906/jmeter-jms-getting-error-failed-to-connect-via-ssl-to-ssl-server-name735](https://stackoverflow.com/questions/67955906/jmeter-jms-getting-error-failed-to-connect-via-ssl-to-ssl-server-name735)