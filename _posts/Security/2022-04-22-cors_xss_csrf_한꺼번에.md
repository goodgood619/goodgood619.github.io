---
title : "CORS & XSS & CSRF를 연관지어 이해해보기"
excerpt : ""

categories:
    - Security

tags:
        - Security
        - XSS
        - CSRF
last_modified_at: 2022-04-22
---

### CORS 문제 왜 위험한거야?

---

참고 :  [https://bigzero37.tistory.com/60](https://bigzero37.tistory.com/60)

- client가 a사이트에 있는데,
- 해커가 정보를 빼내려고 스크립트파일을 넣어놔서 다른 도메인사이트(b사이트)로 호출할경우,
- 그냥 client는 정보가 해킹이 되는것
- 이것을 `XSS`라고 부른다함.
- 결국은 host or protocl or port 이 origin (host + protocol + port)이 동일하지 못하면
- XSS이 빈번하게 발생을 할것이고
- 그것을 막기 위해서 나온것이 CORS 관련 정책
- SameOrigin 정책 즉, host + protocol + port 가 동일해야 한다.

출처 : [https://beomy.github.io/tech/browser/cors/](https://beomy.github.io/tech/browser/cors/)

그러나, 이제 백엔드서버와 프론트엔드 서버를 따로 구성을 하는경우가 요즘은 많다.

그래서, CORS를 따로 설정해주지 않는다면, 분명히 API 통신시에 CORS문제를 발생하게 될것이다.

 

우선은 서버에서 관련 서버에 대해서 해결을 해줘야 한다. 

해결책으로는 백엔드쪽에서 모든 리소스를 허용하는것이 아니라, 

`프론트엔드 관련으로 오는 도메인+ip로 조합된요청을 허용`해줘야 한다.

<br/><br/>

### XSS 문제

---

- `공격하려는 사이트에 악성 스크립트를 넣는` 방식
    - 대표적으로, 블로그에 댓글을 작성하는데 악성 스크립트를 넣는 행위를 볼 수 있다.
- Stored XSS
    - 저장된 XSS
        - 위에 작성한 사이트 게시판이나 댓글, 닉네임 등 **스크립트가 서버에 저장되어 실행되는 방식**
- Reflected XSS
    - URL 파라미터에 스크립트를 넣어 서버에 저장하지 않고 그 즉시 스크립트를 만드는 방식
    - 대부분 브라우져 자체에서 차단되는 경우가 많음

출처 : [https://lucete1230-cyberpolice.tistory.com/23](https://lucete1230-cyberpolice.tistory.com/23) 


<br/><br/>

### CSRF 문제

---

- 사용자가 자신의 의지와는 무관하게 공격자가 의도한 행위(수정, 삭제, 등록 등)를 특정 웹사이트에 요청하게 하는 공격
    - 한마디로, `조종당한다`는 것
- 공격 방법은 웹 브라우져의 `쿠키` 로 가능함
    - 다른말로 하면, 세션ID를 발급해 쿠키로 등록하지 않으면 CSRF는 방지가 가능하다는 얘기
- 공격 방법
    - 사용자는 서버에 로그인을 합니다
    - 로그인이 인증된 사용자는 악성 스크립트 페이지를 누르게 됩니다
    - 웹 브라우져에 저장된 세션ID를 해커 서버가 알게 됩니다
    - 세션ID를 이용해, 마치 해커가 사용자인 것처럼 행동하고 정보를 수정하거나 빼냅니다
- 방지 방법
    - 웹 브라우져의 Request Headers의 `Host와 Referer이 다르므로, 이 2개 값을 비교`하면 됨
        - Referer : Client의 URL 주소, 즉 이상태는 해커의 URL 주소일 것이다
        - 만약, CORS를 허용 해야 한다면 아주 제한적으로 허용된 도메인만 Server에서 등록해야 한다
    - 임의로 `CSRF 관련 토큰`을 만들어 세션에 저장하고, 그다음 hidden으로 CSRF 토큰을 같이 보내서 값이 같은지 검증하는 방법
    - Double Submit Code 방법
        - 브라우져의 Same Origin 정책을 역이용 해본것이다.
        - `Same Origin 정책이 아니면`, `JavaScript로 쿠키값을 확인하거나 수정하지 못한다`는 점을 이용
        - Client쪽에서 임의의 값을 만들어 Header에 넣고 동시에 Cookie에도 넣어서 서버에 보낸다
        - Server는 두 개의 값이 일치한지 확인한 후, 관련된 쿠키는 만료처리를 합니다.

출처 : [https://junhyunny.github.io/information/security/spring-boot/spring-security/cross-site-reqeust-forgery/](https://junhyunny.github.io/information/security/spring-boot/spring-security/cross-site-reqeust-forgery/)