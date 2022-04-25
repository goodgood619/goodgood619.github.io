---
title : "Maximum Depth Of Binary Tree"
excerpt : "Leet code Practice"

categories:
    - Algorithm

tags:
        - Graph
        - Tree
        - Implementation
last_modified_at: 2020-04-07
---

트리를 순회(전위, 중위,후위 뭐든 상관없을것 같다)하면서, **최대 높이**를 구해주면 되는 문제이다

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
    int ans=0;
    public int maxDepth(TreeNode root) {
        if(root==null) return 0;
        traverse(root,1);
        return ans;
    }
    private void traverse(TreeNode root, int depth) {
        if(root.left!=null) traverse(root.left,depth+1);
        if(root.right!=null) traverse(root.right,depth+1);
        ans = Math.max(ans,depth);
    }
}
```

