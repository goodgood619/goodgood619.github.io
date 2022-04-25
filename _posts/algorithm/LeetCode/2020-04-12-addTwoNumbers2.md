---
title : "Add Two Numbers 2"
excerpt : "Leet code Practice"

categories:
    - Algorithm

tags:
    - LinkedList
    - Stack, Deque
    - Implementation
last_modified_at: 2020-04-12
---

1. Stack(Deque)를 이용하여 l1과 l2에 있는 원소들을 각각 Deque1, Deque2에 넣어준다
2. 그다음 뒤에서부터 새로운 Deque3에 계속 더한다, 단 올림수가 발생할수 있기 때문에 carry 변수를 하나 둬서 관리를 한다
3. l1 혹은 l2의 길이가 일치 하지 않을수 있기 때문에, Deque1과 Deque2의 원소를 끝까지 뽑아낸다
4. 단 올림수가 여전히 발생할수 있기 때문에, 올림수에 관한 예외처리가 필요하다
5. Deque3에 있는 값을 뒤에서부터 뽑아내면서 새롭게 ListNode를 만들어 반환한다

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
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        Deque<Integer> first = new ArrayDeque<>();
        Deque<Integer> second = new ArrayDeque<>();
        ListNode temp = l1;
        while(temp != null) {
            first.add(temp.val);
            temp = temp.next;
        }
        temp = l2;
        while(temp != null) {
            second.add(temp.val);
            temp = temp.next;
        }
        Deque<Integer> three = new ArrayDeque<>();
        int carry=0;
        while(first.size()>0 && second.size()>0) {
            int value = first.pollLast()+ second.pollLast()+carry;
            three.add(value%10);
            if(value>=10) carry = 1;
            else carry=0;
        }
        while(first.size()>0) {
            int value = first.pollLast() + carry;
            three.add(value%10);
            if(value>=10) carry = 1;
            else carry=0;
        }
        while(second.size()>0) {
            int value = second.pollLast() + carry;
            three.add(value%10);
            if(value>=10) carry = 1;
            else carry=0;
        }
        if(carry==1) {
            three.add(carry);
        }
        ListNode ans = null;
        ListNode cur = null;
        while(three.size()>0) {
            int val = three.pollLast();
            if(cur==null) {
                cur = new ListNode(val);
                ans = cur;
            }
            else {
                cur.next= new ListNode(val);
                cur = cur.next;
            }
        }
        return ans;
    }
}
```