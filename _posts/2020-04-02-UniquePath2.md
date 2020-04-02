---
title : "Unique Path 2"
excerpt : "Leet code Practice"

categories:
    - Algorithm

tags:
        - implementation
        - Dynamic Programming
        - Algorithm
last_modified_at: 2020-04-02
---

unique-paths 1과 똑같은데 중간에 장애물이 생겼다.

**DP**를 적용하되, 중간에 장애물을 만나면 더이상 탐색을 진행하지 않고 돌아가면 된다.

dp[x][y] : **(x,y)로 오는 경우의수**라고 정의를 하자  
dp[x][y] = dp[x+1][y] + dp[x][y+1]  
단 장애물은 예외  

## by Java

```java
class Solution {
    public int uniquePathsWithObstacles(int[][] board) {
        int n= board.length;
        int m = board[0].length;
        int[][] dp = new int[n][m];
        for(int i=0;i<n;i++) {
            for(int j=0;j<m;j++) {
                dp[i][j]=-1;
            }
        }
        
        return go(0,0,board,dp,n,m);
    }
    private int go(int x,int y,int[][] board, int[][] dp, int n,int m) {
        if(x>=n || y>=m || board[x][y]==1) return 0;
        if(x==n-1 && y==m-1) return 1;
        if(dp[x][y]!=-1) return dp[x][y];
        dp[x][y]=0;
        dp[x][y]+=go(x+1,y,board,dp,n,m)+go(x,y+1,board,dp,n,m);
        return dp[x][y];
    }
}
```
