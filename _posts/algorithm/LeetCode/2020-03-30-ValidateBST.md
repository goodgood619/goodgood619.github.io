---
title : "Validate Binary Search Tree"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
        - Binary Search Tree
        - Algorithm
last_modified_at: 2020-03-30
---

이진 탐색 트리가 유효한지를 판별하는 문제이다.

어떻게 해야할지 고민을 하다가 솔루션을 참고했는데, 항상 현위치에서 왼쪽과 오른쪽값의 존재가 필요하기 때문에, Parameter로 왼쪽과 오른쪽을 추가해서 Recursion을 진행해야 한다는 것이었다

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
    public boolean isValidBST(TreeNode root) {
        if(root==null) return true;
        return traverse(root,null,null);
    }
    private boolean traverse(TreeNode here,TreeNode Min,TreeNode Max) {
        if(here==null) return true;
        if(Min!=null && here.val<=Min.val) {
            return false;
        }
        if(Max!=null && here.val >=Max.val) {
            return false;
        }
        
        return traverse(here.left,Min,here) && traverse(here.right,here,Max);
    }
}
```