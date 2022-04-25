---
title : "Container with Most Water"
excerpt : "Leet code"

categories:
    - LeetCode

tags:
        - Two Pointer
        - min max
        - Algorithm
last_modified_at: 2020-03-30
---

투 포인터를 사용하자

1. 최대넓이 = (오른쪽위치-왼쪽위치)*(오른쪽위치와 왼쪽위치의 높이중최소)
2. 높이가 더 짧은쪽을 움직이자, 왜냐하면 어차피 투포인터로 인해, 가로너비는 계속 줄고 있고 최대넓이로 만드려면 높이는 최대한 높아야 하기때문

## by Java
```java
class Solution {
    public int maxArea(int[] height) {
        int max =0 , left = 0, right = height.length-1;
        while(left<right) {
            max = Math.max(max,Math.min(height[left],height[right])*(right-left));
            if(height[left]<height[right]) left++;
            else right--;
        }
        return max;
    }
}
```