---
title : "TCP & 3-way-handshaking & 4-way-handshaking 재밌게 기본 개념 잡기"
excerpt : ""

categories:
    - Network

tags:
        - TCP
        - 3-way handshaking
        - 4-way-handshaking 
        
last_modified_at: 2021-10-27
---

TCP는 쉽게 말해서 `OSI 전송(Transport)계층에서 데이터를 주고받는 Protocol(규칙)`이다.

TCP의 경우는 `높은 신뢰성`, 그리고 연결이 된상태에서 데이터를 주고받는다는 특징이 있다.

그래서 연결을 할때는 3-way handshaking이라는 방법을 통해 가능하고, 반대로 더이상 통신하지 않을때는 4-way handshaking이라는 방법을 통해 해제가 가능하다.

3-way handshaking은 다음과 같은 과정이 있다.

1. client → server : 연결신청(send SYN→ SYN sent(syn 요청을 한상태) 상태가 됨)
2. server→ client : ㅇㅋ, 포트열고 다시보내라(Receive SYN, send SYN+ACK → SYN received(syn 요청 받고 상대방 응답 기다리는)상태가 됨)
3. client → server : 포트 열었습니다(established)상태입니다.(Receive SYN+ACK, send ACK)

![handshake_image](/assets/handshakeBasic.png)

```cpp
ACK = SEQ + 1
SEQ = ACK // 단 ACK가 0이면 SEQ는 임의값을 미리 지정
```

그러면 연결이 된거다

반면에 4-way handshaking은 다음과 같다

1. client → server : 연결 해제신청이요(FIN Flag를 보낸다)
2. server→ client : 알았다. 잠만 기다려봐(ACK를 보낸다)
3. server → client : 데이터 전부 다 보냈고, 나도 이제 해제준비한다(FIN Flag를 보낸다)
4. client→ server : 전 해제되었으니, 해제해주세요(FIN을 받고, FIN을 잘 받았다는 ACK를 보낸다,서버가 ACK를 받으면 서버를 닫는다.)

출처 : [https://sleepyeyes.tistory.com/4](https://sleepyeyes.tistory.com/4)