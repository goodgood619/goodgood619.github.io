---
title : "Rotate List"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
    - LinkedList
    - Implementation
last_modified_at: 2020-04-12
---

결국 k번 rotate를 계속 돌려야 한다. 그러면, k가 크다면 전부 다 돌릴필요없이 **k mod list의 길이 횟수**만큼만 돌려주면 된다.  
LinkedList이기때문에, List를 이용하여 순서를 맞춘다음, 새롭게 LinkedList를 만들어서 반환을 하였다

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
    public ListNode rotateRight(ListNode head, int k) {
        if(head==null) return head;
        List<Integer> list = new ArrayList<>();
        ListNode temp = head;
        int length=0;
        while(temp!=null) {
            length++;
            list.add(temp.val);
            temp = temp.next;            
        }
        int count = k%length;
        for(int i=1;i<=count;i++) {
            rotate(list);
        }
        ListNode cur=null;
        ListNode ans = null;
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
    private void rotate(List<Integer> list) {
        int first = list.get(0);
        list.set(0,list.get(list.size()-1));
        int temp = first;
        for(int i=1;i<list.size();i++) {
            int temp2 = list.get(i);
            list.set(i,temp);
            temp = temp2;
        }
    }
}
```