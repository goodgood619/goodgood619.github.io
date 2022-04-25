---
title : "Middle Of The Linked List"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
        - LinkedList
        - Implementation
last_modified_at: 2020-04-09
---

1. 전체길이를 구한다
2. 다시 처음부터 전체길이의 절반만 포인터를 이동시킨다

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
    public ListNode middleNode(ListNode head) {
        ListNode temp = head;
        int length=0;
        while(temp!=null) {
            length++;
            temp = temp.next;
        }
        length/=2;
        while(length>0) {
            length--;
            head = head.next;
        }
        return head;
    }
}
```