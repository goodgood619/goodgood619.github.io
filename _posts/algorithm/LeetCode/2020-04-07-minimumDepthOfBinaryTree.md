---
title : "Minimum Depth Of Binary Tree"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
        - Graph
        - Tree
        - Implementation
last_modified_at: 2020-04-07
---

최소 높이를 구하는데 있어서, 조건이 있는 문제인데

왼쪽 오른쪽 자식이 아무도 없을때, 즉 **말단 노드일때의 최소높이를 구하는** 문제이다.

후위 순회를 돌면서 최소 높이를 구해줬다

## by Java

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    int ans = (int)1e9;
    public int minDepth(TreeNode root) {
        if(root==null) return 0;
        traverse(root,1);
        return ans;
    }
    private void traverse(TreeNode root, int depth) {
        if(root.left!=null) traverse(root.left,depth+1);
        if(root.right!=null) traverse(root.right,depth+1);
        if(root.left == null&& root.right== null) ans = Math.min(ans,depth);
    }
}
```