---
title : "add Binary"
excerpt : "Leet code Practice"

categories:
    - Algorithm

tags:
        - implementation
        - BigInteger
        - Algorithm
last_modified_at: 2020-04-02
---

이진수가 얼마까지 등장할지 모르므로, BigInteger를 사용하면 간단하게 구현이 가능하다
import를 빼먹지 말자

## by Java

```java
import java.math.BigInteger;
class Solution {
    public String addBinary(String a, String b) {
        BigInteger c = new BigInteger(a,2);
        BigInteger d = new BigInteger(b,2);
        c = c.add(d);
        return c.toString(2);
    }
}
```