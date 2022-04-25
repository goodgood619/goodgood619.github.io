---
title : "Rotate Array"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
    - Implementation
last_modified_at: 2020-04-12
---

k번만큼 돌려주면 되는문제이다. 구현에 신경을 써서 하도록하자

## by Java

```java
class Solution {
    public void rotate(int[] nums, int k) {
        for(int i=1;i<=k;i++) {
            change(nums);
        }
    }
    private void change(int[] nums) {
        int first = nums[0];
        nums[0] = nums[nums.length-1];
        int temp = first;
        for(int i=1;i<nums.length;i++) {
            int temp2 = nums[i];
            nums[i] = temp;
            temp = temp2;
        }
    }
}
```