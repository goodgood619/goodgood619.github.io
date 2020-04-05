---
title : "Remove Linked List Elements"
excerpt : "Leet code Practice"

categories:
    - Algorithm

tags:
        - Algorithm
        - LinkedList
        - Implementation
last_modified_at: 2020-04-06
---

1. list에 제거할 값만 빼고 순차적으로 값을 저장한다.  
2. 그다음 새롭게 ListNode를 만들어서 list의 원소에 있는값들을 넣으며 만든다음에 리턴한다

## by Java

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode removeElements(ListNode head, int val) {
        List<Integer> list = new ArrayList<>();
        ListNode temp = head;
        while(temp!=null) {
            if(temp.val != val) list.add(temp.val);
            temp = temp.next;
        }
        ListNode ans = null;
        ListNode cur = null;
        for(Integer e : list) {
            if(cur==null) {
                cur = new ListNode(e);
                ans = cur;
            }
            else {
                cur.next = new ListNode(e);
                cur = cur.next;
            }
        }
        return ans;
    }
}
```