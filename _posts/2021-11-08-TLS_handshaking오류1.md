---
title : "curl TLS Connection error 중 하나 (handshaking error)"
excerpt : ""

categories:
    - Linux

tags:
        - TLS
        - .zshrc
        
last_modified_at: 2021-11-08
---

### TLS 인증 with 자체 인증서로 했을때, local에서 curl 오류가 나는 경우 중 하나

---

- error:1400442E:SSL routines:CONNECT_CR_SRVR_HELLO:tlsv1 alert protocol version

방법1. curl upgrade를 해라

이미 했다

출처 : [https://apple.stackexchange.com/questions/280143/tlsv1-alert-protocol-version-when-connecting-via-ssl-to-os-x-server](https://apple.stackexchange.com/questions/280143/tlsv1-alert-protocol-version-when-connecting-via-ssl-to-os-x-server)

의심 : curl의 version을 쳤을때, openssl 혹은 ssl 관련 다른 library가 세팅이 되어있는지 확인을 해보자

```bash
curl --version
```

![tls_handshaking_error](/assets/tls_handshaking_error.png)

- 기존에는 OpenSSL이 없었다.
- 만약 없다면 아래와 같은 일 때문일 것이다.

해결 : 

- curl에 openssl 설정을 적용을 안해서 문제였다.
- (전, brew 명령어로 curl을 깔았는데, 제가 install하지 않은 macOS에 기본 내장된 curl 명령을 가리켜서 발생한 문제인것 같다)
- (단, macOS 기준입니다.)
- .zshrc에 export PATH="/usr/local/opt/curl/bin:$PATH" 했더니 완료

```bash
export PATH="/usr/local/opt/curl/bin:$PATH"
```

- 혹은 bashrc를 사용하고 있다면, .bashrc 파일을 수정해야 한다.