---
title : "Linux에서 Local로 파일 쉽게 옮기는 법 (command Line)"
excerpt : ""

categories:
    - Linux

tags:
        - Linux
        - Ubuntu
        - sshpass
        - scp 
last_modified_at: 2021-10-20
---

## Linux에서 나의 컴퓨터로 파일 쉽게 옮기는 방법 from 명령어

---

(Ubuntu를 기준으로 작성 되었습니다.)

- `sshpass`와 `scp명령어`를 쓰면 손쉽게 파일을 옮길수 있다.
- r 옵션을 줘서 , directory도 가능하다.

```bash
# apt-get install sshpass (Ubuntu 기준)
sshpass -p 'password' scp -r user@example.com:/some/remote/path /some/local/path
```


출처 : [https://stackoverflow.com/questions/50096/how-to-pass-password-to-scp](https://stackoverflow.com/questions/50096/how-to-pass-password-to-scp)