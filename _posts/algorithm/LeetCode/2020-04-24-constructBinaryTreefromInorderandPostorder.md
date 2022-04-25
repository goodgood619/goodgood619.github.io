---
title : "Construct Binary Tree From Inorder and Postorder Traversal"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
    - Tree
    - Recursion
    - Implementation
last_modified_at: 2020-04-24
---
이 문제는 **postorder의 순회방법을 거꾸로 탐색**해서 만드는 문제이다.

postorder는 왼쪽,오른쪽,현재위치를 순서로 탐색한다.

이걸 반대로 하면, **현재위치,오른쪽,왼쪽 순서**로 진행을 할수 있게된다.

반대로 하기때문에, postorder값을 이용해 반대로 값을 넣어주면서, **오른쪽자식부터 먼저 Tree를 만들면서** 진행을 하면된다.  
그리고 **inorder를 통해서 현재 index의 위치를 알아야 한다**

순서를 보면, 맨처음에 루트노드를 먼저 만들게 되는데, postorder의 맨마지막 방문은 루트노드이기때문이다.
이때, 오른쪽부터 먼저 만들어줘야하는데, inorder로부터 인덱스를 (key,value)로 만들게 되면,  
현재 루트노드의 인덱스를 알게되고, 오른쪽자식, 왼쪽자식을 이동할때, 정확하게 값을 넣어줄수있게만들어준다
왜냐하면, inorder의 방문순서는 현재위치의 인덱스를 알게될경우, **그 위치의 인덱스보다 작으면 모두 왼쪽자식들의 원소들을 가리키게되고**  
**반대로 크면 모두 오른쪽자식들을 가리키게 되기때문이다.** 코드를 보면 직관적으로 알수있을것같다.
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
        root.right = traverse(inorder,postorder,curIndex+1,end,map); // 현재루트노드의 인덱스 다음 ~ 끝인덱스(Inorder)
		root.left = traverse(inorder,postorder,start,curIndex-1,map);        
		return root;
    }
}
```