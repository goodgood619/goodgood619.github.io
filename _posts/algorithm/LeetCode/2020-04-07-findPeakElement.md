---
title : "Find Peak Element"
excerpt : "Leet code Practice"

categories:
    - Algorithm

tags:
        - Implementation
last_modified_at: 2020-04-07
---

양 옆원소보다 클때의 그때 인덱스를 반환해주면 되는문제이다.

가장 높은 원소의 인덱스도 아니고, 그냥 아무거나 반환하면 된다.

예외적으로 처리해야하는부분은, **길이가 1인 경우와, 맨 처음과 맨마지막의 경우만 예외처리**를 해줘서 문제를 풀었다.

## by Java

```java
class Solution {
    public int findPeakElement(int[] nums) {
        if(nums.length==1) return 0;
        int maxHeight =0 , idx=-1;
        for(int i=0;i<nums.length;i++) {
            if(i==0 || i==nums.length-1) {
                if(i==0 && nums[i]>nums[i+1]) {
                    maxHeight = Math.max(maxHeight,nums[i]);
                    idx = i;
                }   
                else if(i == nums.length-1 && nums[i]>nums[i-1]){
                    maxHeight = Math.max(maxHeight,nums[i]);
                    idx = i;
                }
                continue;
            }
            if(nums[i-1]<nums[i] && nums[i]>nums[i+1]) {
                maxHeight= Math.max(maxHeight,nums[i]);
                idx= i;
            }
        }
        return idx;
    }
}
```