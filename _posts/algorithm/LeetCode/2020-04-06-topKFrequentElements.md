---
title : "Top K Frequent Elements"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
        - Algorithm
        - List
        - Sort
        - Map
        - Implementation
last_modified_at: 2020-04-06
---

1. Map으로 숫자갯수를 정확하게 세준다
2. list에 넣고 정렬을 한다
3. k개만큼 원소를 뽑고 리턴을 한다

단 list에 넣을때, 숫자와 숫자갯수가 필요하니 **class를 선언하여 사용**하도록 하자

## by Java

```java
class Solution {
    public List<Integer> topKFrequent(int[] nums, int k) {
        List<P> list = new ArrayList<>();
        Map<Integer,Integer> map = new HashMap<>();
        for(int i=0;i<nums.length;i++) {
            if(map.get(nums[i])==null) {
                map.put(nums[i],1);
            }
            else {
                int value = map.get(nums[i]);
                value++;
                map.remove(nums[i]);
                map.put(nums[i],value);
            }
        }
        for(Integer e : map.keySet()) {
            list.add(new P(e,map.get(e)));
        }
        list.sort((a,b)->{
           if(a.count>b.count) return -1;
            else if(a.count<b.count) return 1;
            else {
                if(a.num<b.num) return -1;
                else if(a.num>b.num) return 1;
                else return 0;
            }
        });
        List<Integer> ans =new ArrayList<>();
        for(P e : list) {
            ans.add(e.num);
            k--;
            if(k==0) break;
        }
        return ans;
    }
}
class P {
    int num,count;
    P(int num,int count) {
        this.num = num;
        this.count = count;
    }
}
```