---
title : "reversed-linked-list"
excerpt : "Leet code Practice"

categories:
    - Algorithm

tags:
        - Map
        - List
        - String
        - Algorithm
last_modified_at: 2020-04-02
---

1. 한번 loop를 돌면서 끝까지 가면서 원소를 list에 삽입해준다
2. 이제 새로운 ListNode를 생성한다음, list의 반대 원소부터 시작해서 순차적으로 넣는다

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
    public ListNode reverseList(ListNode head) {
        if(head==null) return null;
        ListNode goforward = head;
        List<Integer> list =new ArrayList<>();
        while(goforward!=null) {
            list.add(goforward.val);
            goforward = goforward.next;
        }
        ListNode ans = new ListNode(0);
        ListNode real = ans;
        for(int i=list.size()-1;i>=0;i--) {
            ans.val = list.get(i);
            if(i!=0){ // 예외처리!!
                ListNode next = new ListNode(0);
                ans.next = next;
                ans = ans.next;
            }
            else break;
        }
        ans.next = null;
        return real;
    }
}
```