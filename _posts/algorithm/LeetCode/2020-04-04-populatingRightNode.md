---
title : "Populating Next Right Pointers In Each Node"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
        - Tree
        - Algorithm
last_modified_at: 2020-04-04
---
이 문제는 개인적으로는 좀 어려운거 같아서 솔루션을 보고 풀었다.  
2가지 경우가 핵심인데  
1. 현재 노드의 위치 아래에 왼쪽자식과 오른쪽 자식이 **둘다 존재**하는 경우 왼쪽자식의 다음을 오른쪽자식으로 잇는다  
2. 현재 노드의 오른쪽자식과 현재 노드의 다음위치노드가 **둘다 존재**하는 경우, 현재 노드의 오른쪽자식의 다음노드를 현재 노드의 다음위치의 왼쪽자식으로 잇는다  
말로 하려니 참 긴거같다 코드를 보자

## by Java

```java

/*
// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;

    public Node() {}
    
    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
};
*/
class Solution {
    public Node connect(Node root) {
        if(root==null) return null;
        if(root.left==null && root.right==null) return root;
        traverse(root);
        return root;
    }
    private void traverse(Node root) {
        if(root==null) return;
        
        // 현재 위치를 루트로 했을때 바로 밑단에 있는 왼쪽next를 오른쪽으로 연결
        if(root.left != null && root.right!=null)  {
            root.left.next = root.right;
        }
        // 분리되어 있는 이진트리를 이어야 하므로, next값을 이용해서 판별해야함!!
        if(root.right!=null && root.next!=null) {
            root.right.next = root.next.left;
        }
        traverse(root.left);
        traverse(root.right);
    }
}
```