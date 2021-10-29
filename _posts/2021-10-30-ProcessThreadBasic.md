---
title : "Process & Thread 기본개념"
excerpt : ""

categories:
    - Operating System

tags:
        - Process
        - Thread
        - MultiProcess
        - MultiThread
        - Context Switching
        - Critical Section
        - DeadLock
        
last_modified_at: 2021-10-30
---

## Process & Thread 기본개념 다시 보기


- 프로세스 : 프로그램을 메모리 상에서 실행중인 작업 (`실행 되고있는 프로그램`)
- 스레드 : 프로세스 안에서 실행되는 여러 흐름 단위(`프로세스 내부에서 실행되는 단위`)

기본적으로 프로세스마다 최소 한개이상의 스레드(메인스레드)를 소유

![Process_Thread](/assets/Process_Thread.png)

프로세스는 각각 별도의 주소공간 할당

- Code : 코드 자체를 구성하는 메모리 영역(프로그램 명령)
- Data : 전역변수, 지역변수, 배열 등(초기화된 데이터)
- Heap :  동적 할당시 사용(new(), malloc())
- Stack : 매개변수, 지역변수, 리턴값(임시 메모리 영역)

스레드는 Stack 영역만 할당받고 나머지는 공유

- 프로세스는 자신만의 별도의 공간과 자원을 운영체제로부터 할당받지만,
- 스레드는 다른 스레드와 공간, 자원을 공유하면서 사용함



### 전역변수 vs 정적변수

---

- 전역변수와 정적변수는 lifetime은 동일하다.
    - 즉, 해당 프로그램이 죽을 때까지 한번 할당된 변수 메모리와 값은 유지된다는 점이다.
- 반면에 scope는 서로 다르다.
    - 전역변수는 해당 프로그램(실행파일 기준)의 어느 함수, 어느 파일에서도 접근이 가능하다
    - 그러나, 정적변수는 변수가 선언된 `파일이나 함수내에서만 접근이 가능`하다.


### MultiProcess

---

말 그대로 프로세스가 여러개

- 하나의 컴퓨터에 여러 CPU 장착 → 하나 이상의 프로세스들이 하나의 작업을 동시에 처리

장점 : 각각의 독립된 메모리 영역을 존재해서, 한 프로세스가 문제가 생기더라도, 다른 프로세스에 영향을 주지 않음

단점 : Context Switching으로 인한 오버헤드 발생

- Context Switching : 프로세스의 상태 정보를 저장하고 복구하는 일련의 과정
    - 즉, 동작 중인 프로세스가 대기 상태에 들어가고, 다음순번의 프로세스가 동작을 하려할때
    - 이전에 동작했던 프로세스의 상태를 복구하는 과정을 말한다
- 프로세스는 각각의 독립된 메모리로 구성되어있기때문에, Context Switching이 발생하면, 캐쉬에 있는 모든 데이터를 리셋하고 다시 불러와야 한다

그런데도 이 Context Switching을 왜 쓰는거여?

1. Computer가 매번 하나의 task만 처리를 할수밖에 없다 → 그래서 사람들은 여러가지 작업을 동시에 처리하지 못하고 계속 기다려야 함(크롬하다가 카톡 갈때)
2. 그래서 Computer가 task를 바꿔가면서 빠르게 실행을 하게되면, 사용자 눈에는 동시에 컴퓨터가 처리되는 것처럼 보임, Computer Multitasking을 위해서 Context Switching이 필요함 ㅇㅇ

출처 : [https://nesoy.github.io/articles/2018-11/Context-Switching](https://nesoy.github.io/articles/2018-11/Context-Switching)  


### MultiThread

---

하나의 응용 프로그램에서 다수의 스레드를 형성해 하나의 작업을 처리하는 것

스레드들이 공유 메모리를 통해 다수의 작업을 동시에 처리하게 함

장점 : 독립적인 프로세스의 context switching에 비해, 공유 메모리 만큼의 시간 자원 손실을 줄일수 있다. 

- 스레드들 끼리는 Stack 영역을 제외한 나머지 데이터 영역을 이미 공유를 하고 있기 때문에,
- Thread들 사이에 Context Switching이 일어난다면 Stack영역만 일어나면 될것이다.

단점 :

- 동기화이슈, 공유된 메모리를 접근하기 때문에, 한 스레드가 일을 잘못처리하면 모든 다른 스레드들에 영향을 주게된다.
- 잘못하면 데드락에 걸리기도함, 그래서 이부분은 critical Section 기법을 통해 해결을 시도함

Critical Section : 하나의 스레드가 공유 데이터를 변경하는 시점에, 다른 스레드들은 접근하지 못하게  하는것