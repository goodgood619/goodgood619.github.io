---
title : "Web Server VS WAS"
excerpt : "Web Server와 WAS에 대한 설명과 차이 비교"

categories:
    - Server

tags:
        - Server
        - Web Server
        - WAS
        - Servlet
last_modified_at: 2020-04-06
---

### Web Server VS WAS

![WAS1](/assets/WAS1.png)

우선 Static Pages와 Dynamic Pages를 알아야 하는데

이 2개의 차이는 말 그대로 **페이지가 바뀌느냐 바뀌지 않느냐**의 유무이다

간단한 예를 들면, 인자에따라서 계속 바뀐다면 그건 Dynamic Pages

그렇지 않다면 Static Pages라고 볼수있다.

이 Static Pages들을 처리하는것이 Web Server

반면 Dynamic Pages들을 처리하는것이 WAS(Web Application Server)라는것이다

> Web Server

HTTP 프로토콜을 기반으로 하여 클라이언트(웹 브라우져 또는 웹 크롤러)의 요청을 서비스 하는 기능을 담당한다

기능

1. 정적인 페이지를 반환

ex) Github io ? → 왜냐하면, github io의 파일들을 보면 html,Javascript,css,png 등등 이미 정적파일들로 이루어진 형태로 홈페이지가 이미 구성이되어있고, 그상태에서 markdown파일만 교체해서 삽입하는 형태이다. 그런데 ,  markdown파일조차 일일이 작성을 해야하므로 사실상 이미 모든것이 정적인 형태라 볼수 있다.

2. 동적인 페이지가 필요하니 WAS에 요청후, WAS가 처리한 결과를 클라이언트에게 반환

- 항상 동일한 페이지를 반환한다
- ex) image, html, javascript등 컴퓨터내에 저장되어있는것

> WAS

- 인자의 내용에 맞게 동적인 contents를 반환한다.
- 즉, 웹 서버에 의해서 실행되는 프로그램을 통해서 만들어진 결과물 * **Servlet: WAS 위에서 돌아가는 Java Program**
ex) 개발자는 Servlet에 doGet()을 구현한다.

Servlet Container라고 불리는데,  Servlet들을 동작할 수 있게 해주는 소프트웨어라고 보면된다.

Container란 JSP, Servlet을 실행시킬 수 있는 소프트웨어를 말한다

WAS는 Servlet, JSP 구동환경을 제공해준다

> WAS가 왜있는가?

- **Web Server의 기능들을 구조적으로 분리하여 처리**하려는 목적으로 나옴
- 그러면 사용자의 요청에 맞게 각각 **동적**으로 콘텐츠를 구성하여 전달해야함
- 근데 만약에, 웹서버로만 하게되면, 웹서버는 정적이니까 결과값이 미리 다 존재해야함
- 근데, **결과값의 경우가 너무 경우의 수가 많기때문에, 컴퓨터의 자원을 비효율적**으로 쓸수밖에 없다
- 그래서 클라이언트의 요청에 따라서, DB에서 그때그때 맞는 요청을 처리하여 결과를 반환함으로서 **자원을 효율적으로 사용**할수 있다.

주요 기능

1. 프로그램 실행 환경과 DB 접속 기능 제공
2. 여러 개의 트랜잭션(논리적인 작업 단위) 관리 기능(이게 비동기 적인부분을 정확하게 언급을 하는건지, 저도 정확하게는 잘모르겠습니다. 아시는분은 댓글을 남겨주세용 ㅠㅠ)
3. 업무를 처리하는 비즈니스 로직 수행
4. 선언적인 보안관리 (서블릿 코드 내에서 보안관련코드를 구지 작성하지 않아도된다?, 요거는 개인적으로 이해가 잘 안된다 ㅠㅠ)

> 그럼 Web Server는 왜있는가?

- 웹 브라우져(클라이언트)에 html(웹 문서)를 전달할때 정적인 내용들이 뭐 구지 같이 가도되지만 같이 가지 않아도 되기때문이다.
- HTML 파일이 먼저 웹 브라우져에 전달이 되고, 다시 **정적 자원들을 요청하면, WAS까지 가지 않아도 되고 앞단에서 빠르게 처리가 가능**하다

그럼 뭐하러 구지 Web Server가 있는것이냐, HTML파일이 먼저가면, Web Server는 없어도 되는거 아니냐, WAS가 Web Server의 기능을 같이 수행하면 되는거아니냐?

1. 우선 WAS가 전부 다 할수는 있지만, **WAS는 주로 동적인 컨텐츠들을 처리하는 목적**으로 나온것이기 때문에, WAS에게 Web Server가 하는일까지 시키게 되면 **WAS가 과부하**가 올수 있다.
2. 그리고 만약 WAS에 뭔가 오류가 발생을 했을때, Web Server없이 WAS만 있다면, **무중단 운영에 차질**이 심각하게 생길것이다. 대용량 어플리케이션의 경우 Web Server에 여러개의 서버를 연결하여 무중단 운영을 하는데 있어서 장애를 빠르게 극복할수 있다.
3. 물리적으로 분리해서 **SSL기능을 추가하여 보안을 강화**할수있음
4. **여러 웹 어플리케이션 서비스**가 가능하다  ex) Java Application, PHP 등, JS 등

![WAS2](/assets/WAS2.png)

### DBMS VS MiddleWare

DBMS(DataBase Management System)

다수의 사용자들이 DB에 접근할 수 있게 해주는 소프트웨어

ex) MYSQL, MongoDB, 등

DBMS Server에 직접 접근해서 처리하는 Client의 문제점?

1. Client의 대부분 로직이 있으니, 유출되면 큰일이 발생할수 있다
2. 그리고 대부분 로직이 있으니, Client의 프로그램 크기가 커진다
3. 그리고 로직이 매번바뀔때마다 배포가 되어야함

이것을 해결하기 위해 MiddleWare가 등장함

Client - MiddleWare - DBMS

즉 중간에서 Client가 짜던 대부분의 로직을 MiddleWare가 수행하게 함

출처  : [https://gmlwjd9405.github.io/2018/10/27/webserver-vs-was.html](https://gmlwjd9405.github.io/2018/10/27/webserver-vs-was.html)