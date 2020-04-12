---
title : "Majority Element"
excerpt : "Leet code Practice"

categories:
    - Algorithm

tags:
        - Data Structure
        - Map
        - Implementation
last_modified_at: 2020-04-12
---

제일 많은 원소갯수를 체크해서 그때의 원소를 반환해주면 되는 문제이다

## by Java

```java
class Solution {
    public int majorityElement(int[] nums) {
        Map<Integer,Integer> map = new HashMap<>();
        for(int i=0;i<nums.length;i++) {
            int num= nums[i];
            if(map.get(num)==null) {
                map.put(num,1);
            }
            else {
                int value = map.get(num);
                value++;
                map.remove(num);
                map.put(num,value);
            }
        }
        int ans=0,temp=0;
        for(Integer e : map.keySet()) {
            if(temp<map.get(e)) {
                temp = map.get(e);
                ans = e;
            }
        }
        return ans;
    }
}
```