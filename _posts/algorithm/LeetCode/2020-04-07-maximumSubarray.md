---
title : "Maximum SubArray"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
        - Dynamic Programming
        - Implementation
last_modified_at: 2020-04-07
---

기본적인 DP문제이다. 다시한번 생각을 해보지만

**dp[i] : i를 끝으로 했을때 최대 부분배열의 합**이라고 정의하자

그러면 dp[i-1]과 arr[i]를 더한것이 정의에 맞을수 있다.

그러나 dp[i-1]이 음수이게 되면, 오히려 값이 줄어들게  되므로, **0과 비교를 해서 항상 양수가 될때만을 더해줘야 한다**는 예외처리를 해줘야한다

## by Java


```java
class Solution {
    public int maxSubArray(int[] nums) {
        int ans = 0;
        int[] dp = new int[nums.length];
        dp[0]=nums[0];
        ans = dp[0];
        for(int i=1;i<nums.length;i++) {
            dp[i]= Math.max(0,dp[i-1])+nums[i];
            ans = Math.max(ans,dp[i]);
        }
        return ans;
    }
}
```