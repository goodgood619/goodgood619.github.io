---
title : "Happy Number"
excerpt : "Leet code Practice"

categories:
    - Algorithm

tags:
        - implementation
        - Map
        - Algorithm
last_modified_at: 2020-04-02
---

boolean 배열을 써도 되지만, HashMap을 이용해서 구현했다.

## by Java

```java
class Solution {
    public boolean isHappy(int n) {
        Map<Integer,Integer> map = new HashMap<>();
        int p = n;
        while(map.get(p)==null) {
            map.put(p,1);
            int sum=0;
            while(p>0) {
                sum += (p%10)*(p%10);
                p/=10;
            }
            p = sum;
        }
        if(p==1) return true;
        else return false;
    }
}
```