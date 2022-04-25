---
title : "Construct Binary Tree From Preorder and Inorder Traversal"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
    - Tree
    - Recursion
    - Implementation
last_modified_at: 2020-04-24
---
postorder가 아닌 이번에는 preorder의 순서에 집중을 하면된다.

현재위치,왼쪽,오른쪽 순서로 탐방하기 때문에

이 경우를 그대로 적용을 해주면된다. 왼쪽부터 만들어줘야 하기때문에, postorder and inorder와는 반대로 순회를 하면된다

**Construct Binary Tree From Inorder and Postorder Traversal**문제를 반대로 적용을 해주면된다.
자세한 풀이는 위의 코드에 있다.

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
    int postIndex;
    public TreeNode buildTree(int[] inorder, int[] postorder) {
        Map<Integer,Integer> map = new HashMap<>();
        postIndex = inorder.length-1;
        for(int i=0;i<=postIndex;i++) map.put(inorder[i],i);
        return traverse(inorder,postorder,0,postIndex,map);
    }
    private TreeNode traverse(int[] inorder,int[] postorder,int start,int end, Map<Integer,Integer> map) {
        if(start>end || postIndex<0) return null;
        TreeNode root = new TreeNode(postorder[postIndex--]);
        int curIndex = map.get(root.val);
        root.right = traverse(inorder,postorder,curIndex+1,end,map);
				root.left = traverse(inorder,postorder,start,curIndex-1,map);        
				return root;
    }
}
```