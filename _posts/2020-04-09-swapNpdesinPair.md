---
title : "Swap Nodes In Pair"
excerpt : "Leet code Practice"

categories:
    - Algorithm

tags:
        - LinkedList
        - Implementation
last_modified_at: 2020-04-09
---

1. 먼저 순회를 하면서 원소를 뽑아낸다
2. 그다음 현재원소와 다음원소를 바꿔준다 그리고 2칸씩 넘어간다
3. 단 다음원소가 존재해야하므로 예외처리가 필요하다
4. 그다음 swap된 리스트를 순회하면서 정답을 만들어 리턴한다

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
    public ListNode swapPairs(ListNode head) {
        List<Integer> list =new ArrayList<>();
        ListNode temp = head;
        while(temp!=null) {
            list.add(temp.val);
            temp = temp.next;
        }
        for(int i=0;i<list.size();i+=2) {
            if(i+1<list.size()) {
                int first = list.get(i);
                list.set(i,list.get(i+1));
                list.set(i+1,first);
            }
        }
        ListNode cur = null;
        ListNode ans= null;
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