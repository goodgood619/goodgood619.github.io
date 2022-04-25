---
title : "Search in a Binary Tree"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
    - Tree
    - Recursion
    - Implementation
last_modified_at: 2020-04-24
---

목표로 하는 target값과 일치할때, 그때의 TreeNode를 리턴해주면 된다.  
TreeNode를 리턴해줘야하기때문에, Recursion을 돌릴때 TreeNode도 추가적으로 같이 Recursion을 돌려줘야 한다.

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
    public TreeNode searchBST(TreeNode root, int val) {
        return traverse(root,val);
    }
    private TreeNode traverse(TreeNode root,int target) {
        if(root==null) return null;
        if(root.val == target) return root;
        else if(root.val>target) return traverse(root.left,target);
        else return traverse(root.right,target);
    }  
}
```