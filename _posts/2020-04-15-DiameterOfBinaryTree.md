---
title : "Diameter Of Binary Tree"
excerpt : "Leet code Practice"

categories:
    - Algorithm

tags:
    - Tree
    - Recursion
    - Implementation
last_modified_at: 2020-04-15
---



임의의 두 노드를 선택했을때, 최대의 길이를 리턴하는 문제이다.

이 문제는 **재귀와 리턴값을 이용**해야 한다는것이 주요한 문제인것같다.

리턴값이 임의의 루트 노드를 기준으로 할때 

**왼쪽 노드의 높이 or 오른쪽 노드의 높이의 최대 높이를 계속 리턴**을 해준다 

이렇게 되면, 모든 임의의 루트 노드를 기준으로할때, 왼쪽자식의 높이 + 오른쪽자식의 높이를 알 수 있게 되고, 이때 최대길이를 구할수 있다.  

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
    int Max=0;
    public int diameterOfBinaryTree(TreeNode root) {
        if(root==null) return 0;
        traverse(root);
        return Max;
    }
    private int traverse(TreeNode root) {
        if(root.left==null && root.right==null) return 0;
        int left=0;
        int right=0;
        if(root.left != null) left = traverse(root.left)+1;
        if(root.right != null) right = traverse(root.right)+1;
        Max = Math.max(Max,left+right);
        return Math.max(left,right);
    }
}
```