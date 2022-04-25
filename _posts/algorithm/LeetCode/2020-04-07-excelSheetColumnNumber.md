---
title : "Excel Sheet Column Number"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
        - Implementation
last_modified_at: 2020-04-07
---

단순하게 자릿수에 26을 곱해서 틀릴수 있는문제이다. **26^n**이라는것을 잊지말자

## by Java

```java
class Solution {
    public int titleToNumber(String s) {
        int sum=0,idx=0;
        for(int i=s.length()-1;i>=0;i--) {
            char c= s.charAt(i);
            sum += (c-'A'+1)*Math.pow(26,idx++);
        }
        return sum;
    }
}
```
