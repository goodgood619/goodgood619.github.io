---
title : "Perfect Sqaures"
excerpt : "Leet code Practice"

categories:
    - Algorithm

tags:
        - Dynamic Programming
        - KnapSack
        - Implementation
last_modified_at: 2020-04-09
---

기본적인 **동전 문제**이다. 뭐 아니면 배낭문제라고 보셔도 무방하다.

여러개의 동전 중에 동전을 최소로 선택해서 목표치를 만드는 경우의 대표적인 문제이다.

이 문제는 배낭문제와는 좀 다르지만, 최소의 동전을 선택해서 목표인 n을 만드는문제이다.

**dp[k] : k원을 만드는데 쓰이는 동전의 최소갯수**라고 정의하면

만약 k원을 만드는데 a라는 동전이 쓰인다면 a라는 동전은 k보다 같거나 작을것이다.

그럼 a라는 동전을 사용했다면, dp[k-a]라는 수로 접근이 되고 그 상태에서 +1을 한것이랑 항상 비교를 해주면 된다.

**dp[i] : min(dp[i], dp[i-arr[k]]+1)(단, i≥arr[k]여야 한다)**

## by Java

```java
class Solution {
    public int numSquares(int n) {
        List<Integer> coin = new ArrayList<>();
        for(int i=1;;i++) {
            int p = i*i;
            if(p<=n) coin.add(p);
            else break;
        }
        int[] dp = new int[n+1];
        Arrays.fill(dp,-1);
        return go(n,dp,coin);
    }
    private int go(int k,int[] dp,List<Integer> list) {
        if(k<0) return (int)1e9;
        if(k==0) return 0;
        if(dp[k]!=-1) return dp[k];
        dp[k] = (int)1e9;
        for(int i=list.size()-1;i>=0;i--) {
            int cur =list.get(i);
            if(k-cur>=0) {
                dp[k] = Math.min(dp[k],go(k-cur,dp,list)+1);
            }
        }
        return dp[k];
    }
}
```