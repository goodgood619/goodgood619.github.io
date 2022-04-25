---
title : "Coin Change"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
    - Dynamic Programming
    - KnapSack
    - Implementation
last_modified_at: 2020-04-12
---

말 그대로 동전문제이다.  
주어진 동전의 종류에 맞춰서 최소 동전을 반환해주면 된다

## by Java

```java
class Solution {
    public int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount+1];
        Arrays.fill(dp,-1);
        int ans = go(amount,dp,coins);
        if(ans==(int)1e9) return -1;
        else return ans;
    }
    private int go(int k,int[] dp,int[] coins) {
        if(k<0) return (int)1e9;
        if(k==0) return 0;
        if(dp[k]!=-1) return dp[k];
        dp[k] = (int)1e9;
        for(int i=coins.length-1;i>=0;i--) {
            if(k-coins[i]>=0) {
                dp[k] = Math.min(dp[k], go(k-coins[i],dp,coins)+1);
            }
        }
        return dp[k];
    }
}
```
