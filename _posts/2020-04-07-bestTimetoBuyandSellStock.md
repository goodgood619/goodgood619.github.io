---
title : "Best Time To Buy and Sell Stock"
excerpt : "Leet code Practice"

categories:
    - Algorithm

tags:
        - Implementation
last_modified_at: 2020-04-07
---

loop를 돌면서, 내가 현재지점까지 왔을때 가장싸게 살수 있을때를 계속 안다고 가정해보면

이때 현재지점에 팔수 있다면, 최대이익을 남길수 있는지 없는지를 알수 있을것이다.

## by Java

```java
class Solution {
    public int maxProfit(int[] prices) {
        if(prices.length==0) return 0;
        int buy = (int)1e9,res=0;
        for(int i=0;i<prices.length;i++) {
            buy = Math.min(buy,prices[i]);
            res = Math.max(res,prices[i]-buy);
        }
        return res;
    }
}
```