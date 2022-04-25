---
title : "Counting Elements"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
    - Set
    - Map
    - Implementation
last_modified_at: 2020-04-16
---

무슨말인지 도저히 몰라서 코드를 보고풀었다.

해석하자면, **주어진 배열에서 x라는 수가 존재하고, x+1이라는 수가 동시에 존재**한다면

**그때 x라는 수가 등장한 횟수를 전부 더해서 반환**해주는 문제이다.

**Set과 Map**을 써서 문제를 풀었다.  

## by Java

```java
class Solution {
    public int countElements(int[] arr) {
        Set<Integer> set = new HashSet<>();
        Map<Integer,Integer> map = new HashMap<>();
        for(int i=0;i<arr.length;i++) {
            set.add(arr[i]);
            if(map.get(arr[i])==null) {
                map.put(arr[i],1);
            }
            else {
                int value = map.get(arr[i]);
                value++;
                map.remove(arr[i]);
                map.put(arr[i],value);
            }
        }
        int cnt=0;
        for(Integer e : map.keySet()) {
            if(map.get(e)!=null && map.get(e+1)!=null) {
                cnt+=map.get(e);
            }
        }
        return cnt;
    }
}
```