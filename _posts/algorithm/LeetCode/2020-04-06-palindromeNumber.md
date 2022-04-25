---
title : "Palidrome Number"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
        - Algorithm
        - String
        - Implementation
last_modified_at: 2020-04-06
---

입력받은 숫자를 StringBuilder로 이용해  
거꾸로 만든다음 String과 비교를 해주면 되는 문제이다
## by Java

```java
class Solution {
    public boolean isPalindrome(int x) {
        String s= String.valueOf(x);
        StringBuilder sb = new StringBuilder();
        for(int i=s.length()-1;i>=0;i--) {
            sb.append(s.charAt(i));
        }
        if(s.equals(sb.toString())) return true;
        else return false;
    }
}
```