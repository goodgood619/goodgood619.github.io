---
title : "Remove Nth node from End of List"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
        - LinkedList
        - Algorithm
last_modified_at: 2020-03-30
---



1. 맨 앞에 0을 집어넣은다음, 현재 링크드리스트에 연결을 시킨다
2. 그다음 전체 길이를 구한다. 그러면 원래 길이가 k면 k+1이 된다
3. 그다음 k+1에서 n을뺀다음에 1개가 추가가 되었기 때문에, rest가 2가 될때까지 빼준다(n-1번째 노드까지 가면된다)
4. 그다음 현재 위치(n-1번째노드)의 다음번째를 다음번째(n+1)로 연결시킨다
5. 대입으로 같은 reference를 공유하고 있기 때문에 처음의 헤드의 next를 리턴시킨다

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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode temp = new ListNode(0); // 0을 넣는다
        temp.next = head; // head를 연결
        ListNode first = temp;
        int totalsize=0;
        while(first!=null) {
            totalsize++;
            first = first.next;
        }
        int rest = totalsize - n;
        first = temp;
        while(rest>1) {
            first = first.next;
            rest--;
        }
        first.next = first.next.next; // n-1번째노드의 다음을 n+1번째노드로 연결, 여기서 first는 n-1번째노드
        return temp.next;
    }
}
```