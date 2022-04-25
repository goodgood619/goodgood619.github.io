---
title : "git bisect 간단 설명"
excerpt : ""

categories:
    - Git

tags:
        - git
        - bisect
        - Binary Search

        
last_modified_at: 2021-11-30
---

### git bisect에 대하여

---

- commit 상황에서 에러가 났을 경우, 빠르게 최초의 문제지점을 찾아준다.
- 원리는 이진 탐색을 이용한다
- 문제점이 있으면, git bisect bad
- 문제점이 없다면, git bisect good
- 그 사이에서, 최초의 bug 지점을 찾는다.

<br/><br/>

[사용 방법]

- git bisect start
- 문제점이 완벽히 없는 커밋을 git bisect good 커밋이름
- 문제점이 있는 커밋을 git bisect bad 커밋이름
- 그 중간에 있는 커밋에서 최초 지점을 찾게된다.

<br/>

[추가 참고 사항]

- 만약 현재 까지 진행된 상황의 로그를 보고 싶다면?
    - git bisect log 를 통해 뭐가 bad인지, good 인지 간략하게 확인가능합니다
- 이게 bad인지 good인지 판단이 안설때?
    - git bisect skip 을 입력한다.
- 잘못 체킹 했을 경우는?
    - undo가 별도로 없어서, 수동으로 로그파일을 수정해야 합니다.
        - git bisect log > bisect.log
        - 관련 부분 수정 하거나, 지우기
        - git bisect replay bisect.log
- 자동화 스크립트도 가능함

<br/><br/>

출처 : 

[https://simsi6.tistory.com/97](https://simsi6.tistory.com/97)

[https://blog.gangnamunni.com/post/understanding_git_bisect/](https://blog.gangnamunni.com/post/understanding_git_bisect/)
    