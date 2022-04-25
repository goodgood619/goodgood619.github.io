---
title : "Majority Element 2"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
        - Data Structure
        - Map
        - Implementation
last_modified_at: 2020-04-12
---

**원소의 갯수가 n/3 + 1개 이상**인 경우일때의 모든 원소들을 List에 넣어서 반환하면 되는 문제이다

## by Java

```java
class Solution {
    public List<Integer> majorityElement(int[] nums) {
        int length = nums.length,cnt=0;
        cnt = length/3+1;
        Map<Integer,Integer> map = new HashMap<>();
        List<Integer> list = new ArrayList<>();
        for(int i=0;i<nums.length;i++) {
            int num = nums[i];
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
        for(Integer e : map.keySet()) {
            if(map.get(e)>=cnt) {
                list.add(e);
            }
        }
        return list;
    }
}
```