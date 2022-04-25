---
title : "reversed-linked-list-2"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
        - LinkedList
        - Algorithm
last_modified_at: 2020-04-02
---

1. m번째와 n번째가 어느 위치에서끝나는지 계산을 한다
2. 그다음  그사이에 있는 값을 list에 넣는다
3. 이제 각 3단계를 거쳐서 원소값을 집어넣는다
4. 처음부터 m번째 위치전까지
5. 그다음은 m번째 위치부터 n번째 위치까지 삽입
6. n번째 다음위치부터 끝까지 삽입(단 여기서 n번째 다음위치가 없을 수있으므로, 예외처리 필요)


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
        public ListNode reverseBetween(ListNode head, int m, int n) {
            if(m==n) return head;
            ListNode start = head;
            ListNode end = head;
            ListNode cur = head;
            int p = m,q = n;
            while(p-->1) {
                start = start.next;
            }
            while(q-->0) {
                end = end.next;
            }
            ListNode temp = start;
            List<Integer> list = new ArrayList<>();
            while(true) {
                if(temp==end) break;
                list.add(temp.val);
                temp = temp.next;
            }
            ListNode goahead = new ListNode(0);
            ListNode ans = goahead;
            temp = head;
            // start까지 순차적 삽입
            while(temp!=start) {
                goahead.val = temp.val;
                ListNode next = new ListNode(0);
                goahead.next = next;
                goahead = goahead.next;
                temp = temp.next;
                cur = cur.next;
            }
            // list 삽입
            for(int i=list.size()-1;i>=0;i--) {
                goahead.val = list.get(i);
                if(i!=0) {
                    ListNode next = new ListNode(0);
                    goahead.next = next;
                    goahead = goahead.next;
                }
                cur = cur.next;
            }
    				// 만약끝이아니면 다음꺼를 미리 만들어준다
            if(cur!=null){
                ListNode bridge = new ListNode(0);
                goahead.next = bridge;
                goahead = goahead.next;
            }
            // 나머지 끝까지 삽입
            temp = end;
            while(temp!=null) {
                goahead.val = temp.val;
                ListNode next = new ListNode(0);
                if(temp.next!=null){
                        goahead.next = next;
                        goahead = goahead.next;
                }
                temp = temp.next;
            }
            return ans;
        }   
    }
```