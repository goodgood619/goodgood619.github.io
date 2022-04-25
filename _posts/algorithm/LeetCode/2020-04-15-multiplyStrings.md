---
title : "Multiply-Strings"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
    - BigInteger
    - Implementation
last_modified_at: 2020-04-15
---

String의 입력된 수를 곱해서 반환하는 문제이다. 

BigInteger를 쓰지말라고는 하는데, 그렇지 않으면, 일일이 구현하는게 올바른 문제인것같다

그러나, BigInteger를 잘 쓸수 있는사람이 구지 안쓰는것도 웃긴것 같다. 실전의 경우 시간이 많이 걸릴수 있기 때문(연습이 안되어있다면)  

## by Java

```java
import java.util.*;
import java.math.*;
class Solution {
    public String multiply(String num1, String num2) {
        BigInteger a = new BigInteger(num1,10);
        BigInteger b = new BigInteger(num2,10);
        a = a.multiply(b);
        return a.toString(10);
    }
}
```