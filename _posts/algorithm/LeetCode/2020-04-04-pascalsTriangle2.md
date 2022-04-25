---
title : "Pascals Triangle 2"
excerpt : "Leet code Practice"

categories:
    - Algorithm

tags:
        - Dynamic Programming
        - Math
        - Algorithm
last_modified_at: 2020-04-04
---

Pascals Triangle 문제와 거의 흡사하다  

## by Java

```java
class Solution {
    public List<Integer> getRow(int rowIndex) {
        int[][] dp = new int[rowIndex+1][rowIndex+1];
        for(int i=0;i<=rowIndex;i++) {
            for(int j=0;j<=rowIndex;j++) {
                dp[i][j]=-1;
            }
        }
        dp[0][0]=1;
        for(int i=0;i<=rowIndex;i++) {
            go(dp,rowIndex,i);
        }
        List<Integer> list = new ArrayList<>();
        for(int i=0;i<=rowIndex;i++) {
            list.add(dp[rowIndex][i]);
        }
        return list;
    }
    private int go(int[][] dp, int n,int m) {
        if(n==m || m==0) {
            dp[n][m]=1;
            return 1;
        }
        if(dp[n][m]!=-1) return dp[n][m];
        dp[n][m]=0;
        dp[n][m]+=go(dp,n-1,m-1)+go(dp,n-1,m);
        return dp[n][m];
    }
}
```