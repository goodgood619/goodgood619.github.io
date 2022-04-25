---
title : "Add Strings"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
    - BigInteger
    - Implementation
last_modified_at: 2020-04-15
---

큰 수덧셈문제인데, 구현을 목적으로 한 문제인것같다 하하

그냥 BigInteger썼다  

## by Java

```java
import java.util.*;
import java.math.*;
class Solution {
    public String addStrings(String num1, String num2) {
        BigInteger a= new BigInteger(num1,10);
        BigInteger b= new BigInteger(num2,10);
        a = a.add(b);
        return a.toString(10);
    }
}
```