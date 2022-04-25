---
title : "Reverse String"
excerpt : "Leet code Practice"

categories:
    - Algorithm

tags:
        - Algorithm
        - String
        - Implementation
last_modified_at: 2020-04-06
---

단순히 입력배열(char[] 타입을 받아서) 정확히 반을 바꿔주면되는문제이다  
오랜만에 기본형 타입을 써서 그런지 String이랑 헷갈렸다 ㅠㅠ

## by Java

```java
class Solution {
    public void reverseString(char[] s) {
        for(int i=0,j=s.length-1;i<s.length/2;i++,j--) {
            // 기본 primitive type인 char형의 경우는 
            // charAt()메소드는 없다, String에서 주어질뿐.. 항상 헷갈리는듯 ㅇㅇ
            char c = s[i];
            s[i] = s[j];
            s[j] = c;
        }
    }
}
```