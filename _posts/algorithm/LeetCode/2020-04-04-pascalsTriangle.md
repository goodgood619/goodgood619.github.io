---
title : "Pascals Triangle"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
        - Dynamic Programming
        - Math
        - Algorithm
last_modified_at: 2020-04-04
---

파스칼의 삼각형 문제이다  
이 문제는 **이항계수**를 이용하여 문제를 풀수있다.  

dp[n][m] : nCm이라고 정의를 하자, 즉 n개중에 m개를 순서없이 고르는 경우의수이다  
dp[n][m] = dp[n-1][m]+dp[n-1][m-1], 단 m>=1,n>=1이상이다  
그리고 n과 m이 같거나 , m이 0인경우는 1로 처리를 해준다  

## by Java

```java
class Solution {
        public List<List<Integer>> generate(int numRows) {
            if(numRows==0) return new ArrayList<>();
            int[][] dp = new int[numRows][numRows];
            for(int i=0;i<numRows;i++) {
                for(int j=0;j<numRows;j++) {
                    dp[i][j]=-1;
                }
            }
            dp[0][0]=1;
            for(int i=0;i<numRows;i++) go(dp,numRows-1,i);
            List<List<Integer>> ans = new ArrayList<>();
            for(int i=0;i<numRows;i++) {
                List<Integer> temp = new ArrayList<>();
                for(int j=0;j<=i;j++) {
                    temp.add(dp[i][j]);
                }
                ans.add(temp);
            }
            return ans;
        }
        private int go(int[][] dp,int n,int m) {
            if(m==0 || n==m) {
                dp[n][m]=1;
                return dp[n][m];
            }
            if(dp[n][m]!=-1) return dp[n][m];
            dp[n][m]=0;
            dp[n][m]=go(dp,n-1,m-1)+go(dp,n-1,m);
            return dp[n][m];
        }
    }
```
