---
title : "Longest Increasing Subsequence"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
        - Dynamic Programming
        - Implementation
last_modified_at: 2020-04-09
---

LIS문제이다. 전통적으로 n^2으로 짜는 경우가 있지만, 

lowerbound나 upperbound를 이용해서 nlogn으로 구현하는 경우도 있다

이번에는 전통적인 n^2으로 구현을 해보았다.

**dp[i] : i를 오른쪽끝으로 할때, 최장 증가 부분 수열의 길이**를 의미한다

그러면, 현재 위치를 j라고하자 (단 0≤j<i)이다

오른쪽으로 계속 갈수록 수가 커져야 하기에, **arr[j]<arr[i]**라는 조건이 필요하다

그래서 정리하면, **dp[i] = max(dp[0],...dp[j],...,dp[i-1])+1(단, arr[j]<arr[i]일때 갱신 가능함)**

아래의 코드를 보는게 이해에 더빠를듯하다

## by Java

```java
class Solution {
    public int lengthOfLIS(int[] arr) {
        if(arr.length==0) return 0;
        int[] dp = new int[arr.length];
        int ans=1;
        for(int i=0;i<arr.length;i++) {
            dp[i] = 1;
            for(int j=0;j<i;j++) {
                if(arr[j]<arr[i]) {
                    dp[i] = Math.max(dp[i],dp[j]+1);
                    ans = Math.max(ans,dp[i]);  
                }
            }
        }
        return ans;
    }
}
```