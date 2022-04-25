---
title : "House Robber"
excerpt : "Leet code Practice"

categories:
    - Algorithm

tags:
        - Dynamic Programming
        - Implementation
last_modified_at: 2020-04-12
---

**DP**문제이다

인접한 것은 **통과해서 인접하지 않은것을 선택해서 최대합을 만드는 중요한 문제**이다

그냥 맨처음에는 단순하게 인접한것을 선택해서 틀렸다. 생각해보니 DP 개념을 집어넣어서 풀어야 하는문제였다

## by Java

```java
class Solution {
    public int rob(int[] nums) {
        int[] dp = new int[nums.length+1];
        Arrays.fill(dp,-1);
        return go(0,nums.length,nums,dp);
    }
    private int go(int here,int depth,int[] nums,int[] dp) {
        if(here>=depth) return 0;
        if(dp[here]!=-1) return dp[here];
        if(here == depth-1) return nums[here];
        dp[here]=0;
        dp[here] = Math.max(go(here+2,depth,nums,dp)+nums[here],go(here+3,depth,nums,dp)+nums[here+1]);
        return dp[here];
    }
}
```