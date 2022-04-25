---
title : "Odd Even LinkedList"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
        - LinkedList
        - List
        - Map
        - Algorithm
last_modified_at: 2020-04-03
---


번갈아 가면서 넣어줘야 하기 때문에, 
**홀수번째 노드를 처음위치**, **짝수번째 노드를 처음의 다음위치(2번째)**에 놓고 시작을 한다
그다음 홀수번째 노드를 먼저 순차적으로 순회하면서 값을 집어넣는다
단 예외처리를 해줘야 하는것이, 2칸씩 건너가야 하는데, **2칸을 가기전에 1칸만 갔는데도 null인경우는 NullPointerException이 나므로 1칸씩 이동**해주면된다.

## by Java

```java

/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode oddEvenList(ListNode head) {
        if (head == null) return null;
        ListNode first = head;
        ListNode second = head.next;
        ListNode ans = null;
        ListNode cur = null;
        while (first != null) {
            int value = first.val;
            if (cur == null) {
                cur = new ListNode(value);
                ans = cur;
            } else {
                cur.next = new ListNode(value);
                cur = cur.next;
            }
            if (first.next != null) first = first.next.next;
            else first = first.next;
        }
        while (second != null) {
            int value = second.val;
            if (cur == null) {
                cur = new ListNode(value);
                cur = ans;
            } else {
                cur.next = new ListNode(value);
                cur = cur.next;
            }
            if (second.next != null) second = second.next.next;
            else second = second.next;
        }
        return ans;
    }
}
```