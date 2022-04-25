---
title : "Add to Array Form of Integer"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
    - Implementation
last_modified_at: 2020-04-15
---

구현문제이다. 

숫자 K를 뒤에서부터 한자리씩 보면서 동시에 A의 원소의 합을 더해서 List에 삽입을 해준다
그 상태에서 List를 뒤집어서 반환을 해주면된다.  

## by Java

```java
class Solution {
    public List<Integer> addToArrayForm(int[] A, int K) {
        int idx = A.length;
        List<Integer> list = new ArrayList<>();
        int cur = K;
        while(--idx>=0 || cur>0) {
            if(idx>=0) cur += A[idx];
            list.add(cur%10);
            cur/=10;
        }
        Collections.reverse(list);
        return list;
    }
}
```