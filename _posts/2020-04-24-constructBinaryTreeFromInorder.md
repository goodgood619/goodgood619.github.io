---
title : "Construct Binary Search Tree from Preorder Traversal"
excerpt : "Leet code Practice"

categories:
    - Algorithm

tags:
    - Tree
    - Recursion
    - Implementation
last_modified_at: 2020-04-24
---

preorder의 기본적인 순서에 집중해야 하는문제이다.

결국 **preorder는 현재위치, 왼쪽,오른쪽 순서**로 확인을 하기때문에 

현재위치가 만약 null이면 새롭게 트리노드를 만들어 반환하고

그렇지않다면, 왼쪽 혹은 오른쪽으로 순회를 해주면된다. **현재노드의 val값과 target값의 비교**를 통해서, 왼쪽으로 갈지 오른쪽으로 갈지 정해주면된다.

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
    public TreeNode bstFromPreorder(int[] preorder) {
        TreeNode root = new TreeNode(preorder[0]); //첫번째 루트노드
        for(int i=1;i<preorder.length;i++) {
            root = traverse(root,preorder[i]); // 현재 루트노드와 target값을 계속 보내준다
        }
        return root;
    }
    private TreeNode traverse(TreeNode root,int target) {
        if(root==null) {
            return new TreeNode(target);
        }
        else if(root.val>target) {
            root.left = traverse(root.left,target);
        }
        else {
            root.right = traverse(root.right,target);
        }
        return root;
    }
}
```