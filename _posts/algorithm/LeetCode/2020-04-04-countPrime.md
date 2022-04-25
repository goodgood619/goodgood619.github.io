---
title : "Count Prime"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
        - prime
        - math
        - 에라토스테네스의 체
        - Algorithm
last_modified_at: 2020-04-04
---

입력된 n 미만의 수들중에서 소수의 갯수를 반환하는 문제이다  
**에라토스테네스의 체**를 이용하여 소수를 빠르게 구한후  
갯수를 세어주면 된다

## by Java

```java
class Solution {
    public int countPrimes(int n) {
        boolean[] notprime = new boolean[n+1];
        for(int i=2;i<=Math.sqrt(n);i++) {
            if(notprime[i]) continue;
            for(int j=i*i;j<=n;j+=i) {
                notprime[j]=true;
            }
        }
        int count=0;
        for(int i=2;i<n;i++) {
            if(!notprime[i]) {
                count++;
            }
        }
        return count;
    }
}
```

