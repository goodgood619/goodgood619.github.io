---
title : "DATETIME에서 DATE로 형변환"
excerpt : "SQL Practice in Programmers"

categories:
    - SQL

tags:
    - MySQL
    - DATE_FORMAT
last_modified_at: 2020-04-17
---

말 그대로 DATETIME타입을 DATE로 어떻게 형 변환을 할수 있을지에 대한 문제이다

**DATE_FORMAT(DATE,형식)**으로 입력을 해주면 된다고 한다

## by SQL

```sql
-- 코드를 입력하세요
SELECT ANIMAL_ID, NAME, DATE_FORMAT(datetime, '%Y-%m-%d') AS 날짜
from animal_ins
// %Y : 4자리 연도, %y : 2자리 연도, %m : 월, %d : 일, %H : 24시간, %h : 12시간, %i : 분, %s : 초
```
