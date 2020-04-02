---
title : "SingleNumber"
excerpt : "Leet code Practice"

categories:
    - Algorithm

tags:
        - Map
        - Algorithm
last_modified_at: 2020-04-02
---

단순 구현문제이다. 중복된 것을 효율적으로 체크하기 위해  
맵을 사용한다. 그런데, 메모리를 더 안쓰고 푸는지는 수학적인 개념이 들어가는거같다!  

## by Java

```java
class Solution {
    public int singleNumber(int[] num) {
        Map<Integer,Integer> map = new HashMap<>();
        for(int i=0;i<num.length;i++) {
            if(map.get(num[i])==null) {
                map.put(num[i],1);
            }
            else {
                int value = map.get(num[i]);
                value++;
                map.remove(num[i]);
                map.put(num[i],value);
            }
        }
        
        int ans=0;
        for(Integer e : map.keySet()) {
            if(map.get(e)==1) {
                ans = e;
                break;
            }
        }
        return ans;
    }
}
```