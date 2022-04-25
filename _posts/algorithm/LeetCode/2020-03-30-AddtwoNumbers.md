---
title : "Add Two Numbers"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
        - ListNode
        - Algorithm
last_modified_at: 2020-03-30
---

ListNode를 정확히 사용할줄 알아야 한다
맨앞을 가리키는 헤더는 그대로 냅두고, 계속 뒤로 노드를 만들어서 이어 나가는것이 핵심이다.  
그래서 뒤로 계속 향할 수 있게 가는 리스트노드 변수가 하나 더 필요하게 된다. 여기서는 ret가 될것이다.

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
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode head = null;
        ListNode ret = null;
        int sum = 0;
        while (l1 != null || l2 != null) {
            if (l1 != null) sum += l1.val;
            if (l2 != null) sum += l2.val;
            if (head == null) {
                head = new ListNode(sum % 10);
                sum /= 10;
                ret = head; // 처음에는 head와 ret 모두 null이므로, 인스턴스 부여후, 같은 주소를 갖도록 공유(단순대입을 하게 되면 가능해짐)
            } else {
                ListNode cur = new ListNode(sum % 10);
                sum /= 10;
                ret.next = cur; // 뒤에 연결후
                ret = ret.next; // 뒤로 이동
            }
            if (l1 != null) l1 = l1.next;
            if (l2 != null) l2 = l2.next;
        }
        if (sum != 0) { // l1, l2 노드 둘다 끝이났어도 sum이 남아있을수 있기 때문에, 한번더 로직을 수행
            ret.next = new ListNode(sum % 10);
        }
        return head;
    }
}
```