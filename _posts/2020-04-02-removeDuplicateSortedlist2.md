---
title : "Remove Duplicate Sorted list 2"
excerpt : "Leet code Practice"

categories:
    - Algorithm

tags:
        - LinkedList
        - List
        - Map
        - Algorithm
last_modified_at: 2020-04-02
---

좀 더 효율적으로 풀어야 되나 생각을 하다가, 정확성을 위해 정확하게 풀려했다

value의 갯수와 동시에 index를 표현하기 위해

1. HashMap과 List를 사용하였다.
2. boolean 배열을 이용하여 걸러냈고
3. 정답을 만들어 리턴

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
    public ListNode deleteDuplicates(ListNode head) {
        Map<Integer, Integer> map = new HashMap<>();
        List<Integer> list = new ArrayList<>();
        ListNode temp = head;
        while (temp != null) {
            if (map.get(temp.val) == null) {
                map.put(temp.val, 1);
                list.add(temp.val);
            } else {
                int value = map.get(temp.val);
                value++;
                map.remove(temp.val);
                map.put(temp.val, value);
            }
            temp = temp.next;
        }
        // twice check
        boolean[] visited = new boolean[list.size()];
        for (int i = 0; i < list.size(); i++) {
            int value = map.get(list.get(i));
            if (value >= 2) visited[i] = true;
        }
        ListNode goahead = null;
        ListNode ans = null;
        // make ListNode
        for (int i = 0; i < list.size(); i++) {
            if (!visited[i]) {
                int value = list.get(i);
                if (goahead == null) {
                    goahead = new ListNode(value);
                    ans = goahead;
                } else {
                    goahead.next = new ListNode(value);
                    goahead = goahead.next;
                }
            }
        }
        return ans;
    }
}
```