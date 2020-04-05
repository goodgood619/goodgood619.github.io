---
title : "Linked List Cycle 2"
excerpt : "Leet code Practice"

categories:
    - Algorithm

tags:
        - Algorithm
        - LinkedList
        - Cycle
        - Set
        - Implementation
last_modified_at: 2020-04-06
---

linked-list-cycle과 똑같은데, 이번에는 ListNode를 반환하면 된다.

Set으로 체크를 하다가, 동일한것이 체크되면 그때의 ListNode를 반환하자

**Set으로 ListNode를 체크**하는건 정말 좋은 아이디어인거같다


## by Java

```java
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode detectCycle(ListNode head) {
        Set<ListNode> set = new HashSet<>();
        ListNode temp = head;
        while(temp!=null) {
            if(!set.contains(temp)) {
                set.add(temp);
            }
            else return temp;
            temp = temp.next;
        }
        return null;
    }
}
```