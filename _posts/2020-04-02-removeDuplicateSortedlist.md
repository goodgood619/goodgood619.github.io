---
title : "Remove Duplicate Sorted list"
excerpt : "Leet code Practice"

categories:
    - Algorithm

tags:
        - LinkedList
        - Map
        - Algorithm
last_modified_at: 2020-04-02
---

더 간단한 방법이 있지만, Map을 써서 체크를 하면서 list에 넣은다음

loop를 돌면서 순차적으로 값을 넣는다


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
    public ListNode deleteDuplicates(ListNode head) {
        Map<Integer,Integer> map = new HashMap<>();
        ListNode temp = head;
        ListNode ans = null;
        ListNode goahead = null;
        List<Integer> list =new ArrayList<>();
        while(temp!=null) {
            int val = temp.val;
            if(map.get(val)==null) {
                map.put(val,1);
                list.add(val);
            }
            temp = temp.next;
        }
        for(Integer e :list) {
            ListNode current = new ListNode(e);
            if(goahead==null) { goahead= current;
                ans = goahead;                  
            }
            else {
                goahead.next = current;
                goahead = goahead.next;
            }
        }
        return ans;
    }
}
```