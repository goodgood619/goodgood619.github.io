---
title : "Search a 2d matrix 1 and 2"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
        - Algorithm
        - Implementation
last_modified_at: 2020-04-06
---

1이랑 2가 똑같은 문제다
그냥 이중포문돌면서 체크하면된다..

## by Java

```java
class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        for(int i=0;i<matrix.length;i++) {
            for(int j=0;j<matrix[i].length;j++) {
                if(target== matrix[i][j]) return true;
            }
        }
        return false;
    }
}
```