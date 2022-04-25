---
title : "Last Stone Weight"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
    - List
    - Implementation
last_modified_at: 2020-04-15
---

단순 구현문제이다

제일 첫번째 최댓값과 두번째 최댓값을 어찌 구할지 생각을 해보다가

**정렬**을 해서 빠르게 값을 구했다  
그다음 같으면 맨 뒤의 두 요소를 지우고, 다르면 차이값을 넣어주고 맨 뒤의 두 요소를 지운다  
이 작업을 요소가 **1개남을때 까지** 진행한다. 만약 **요소가 하나도 안남으면 0을 리턴**  

## by Java

```java
class Solution {
    public int lastStoneWeight(int[] stones) {
        List<Integer> list = new ArrayList<>();
        for(int i=0;i<stones.length;i++) list.add(stones[i]);
        while(list.size()!= 1) {
            if(list.size()==0) break;
            Collections.sort(list);
            int max1 = list.get(list.size()-1);
            int max2= list.get(list.size()-2);
            if(max1==max2) {
                list.remove(list.size()-1);
                list.remove(list.size()-1);
            }
            else {
                list.remove(list.size()-1);
                list.remove(list.size()-1);
                list.add(max1 - max2);
            }
        }
        if(list.size()==1) return list.get(0);
        return 0;
    }
}
```