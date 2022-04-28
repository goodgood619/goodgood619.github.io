---
title : "Copy On Write에 대해"
excerpt : ""

categories:
    - Linux

tags:
        - Copy On Write
        - fork
        
last_modified_at: 2022-04-28
---

### Copy On Write

---

- 리소스가 복제되었지만 `수정되지 않은 경우`에 새 리소스를 만들 필요 없이 `복사본과 원본이 리소스를 공유`하고, 복사본이 `수정되었을 때만 새 리소스를 만드는` 리소스 관리 기법
    - 그럼 원본이 수정되면?
    - 원본이 바뀌면, 복사본도 당연히 바뀌어야 하는것이 맞으니
    - 그냥 공유된 형태를 그대로 취한다?
- 프로세스를 공유하는데, 자식 프로세스가 부모 프로세스를 fork 하면 그 이후 exec 까지 과정을 하게 된다
    - fork : 복제한다는 의미
    - exec : 프로세스를 만듬
        - 이 때, 부모 프로세스를 overwrite 하는 과정에서
        - overhead가 막심함
- 그래서 Linux에는 기본적으로 `COW` 방식으로 fork를 진행함
    - 부모 프로세스와 자식 프로세스가 메모리를 공유하다가
    - 자식 프로세스에서 변화된 부분이 발생하면
    - 그 변화된 부분만 새로운 page를 할당해서 복사를 해주면 된다
    - 이러면, 전체 프로세스를 항상 복사하지 않고도 적은 overhead로 사용가능하다.

<br/><br/>

출처 : [https://code-lab1.tistory.com/58](https://code-lab1.tistory.com/58)