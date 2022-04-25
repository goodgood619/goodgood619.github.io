---
title : "Mutex & Semaphore에 대하여"
excerpt : ""

categories:
    - Operating System

tags:
        - Mutex
        - Semaphore
last_modified_at: 2022-04-26
---

### Mutex & Semaphore

---

Critical Section을 실현하기 위한 방법으로서 lock과 함께 거론되는 기본적인 방법들 중 하나임.

- Mutex : `하나의 프로세스, 스레드에 의해 소유될 수 있는 key를 관리`하는 기법
    - **Lock과 Unlock개념을 사용**
    - **프로세스 단에서 관리되고 해당 변수(Lock)을 가지고 있기 때문에 `Lock을 가지고 있는 변수`만이 Unlock**을 할 수 있습니다.
- Semaphore : 현재 공유자원에 접근할 수 있는 `쓰레드, 프로세스의 수를 나타내는 값`을 두어 `상호배제를 달성`하는 기법
    - **현재 공유 자원의 상태를 나타내는 `카운터 변수를 사용`**하게 됩니다.
    - 이러한 변수는 실제로 **`운영체제 혹은 커널`에 값으로 저장**되며,
    - 각 프로세스는 이를 `확인할 수 있고 값을 변경`할 수도 있게 됩니다.
    - `카**운터 변수의 값이 해당 공유 자원에 접근할 수 있는 임계치`가 되며**
    - **이를 조정하여 접근할 수 있는 프로세스의 개수를 통제**
    - **다른 프로세스 및 스레드도 잠금 상태를 해제가능**
        - 무한정 기다리게 될수도 있으니, 데드락에 빠질 경우가 생길수 있다

출처 : [https://velog.io/@logandev/세마포어와-뮤텍스-차이](https://velog.io/@logandev/%EC%84%B8%EB%A7%88%ED%8F%AC%EC%96%B4%EC%99%80-%EB%AE%A4%ED%85%8D%EC%8A%A4-%EC%B0%A8%EC%9D%B4)