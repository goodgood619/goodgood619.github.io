---
title : "Minimum Path Sum"
excerpt : "Leet code Practice"

categories:
    - Algorithm

tags:
    - Dynamic Programming
    - Implementation
last_modified_at: 2020-04-24
---
(0,0)에서 시작해서 (n-1,m-1)에 도달하는데 있어서
최소 가중치를 만들어서 도달하는 문제이다.
아마 BFS로 문제를 풀어도 되지만, DP로 한번 접근을 해보았다.
## by Java

```java
class Solution {
    public int minPathSum(int[][] grid) {
        int n = grid.length;
        int m = grid[0].length;
        int[][] dp = new int[n][m];
        
        for(int i=0;i<n;i++) {
            for(int j=0;j<m;j++){
                dp[i][j]=-1;
            }
        }
        
        return go(0,0,n,m,grid,dp);
    }
    private int go(int x,int y,int n,int m,int[][] board,int[][] dp) {
        if(x>=n || y>=m) return (int)1e9;
        if(x==n-1 && y==m-1) return board[x][y];
        if(dp[x][y]!=-1) return dp[x][y];
        dp[x][y]=(int)1e9;
        dp[x][y] = board[x][y]+Math.min(go(x+1,y,n,m,board,dp),go(x,y+1,n,m,board,dp)); // 핵심
        return dp[x][y];
    }
}
```