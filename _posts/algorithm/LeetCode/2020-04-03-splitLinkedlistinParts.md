---
title : "Split LinkedList in parts"
excerpt : "Leet code Practice"

categories:
    - Algorithm

tags:
        - LinkedList
        - Array
        - Algorithm
last_modified_at: 2020-04-03
---

LinkedList 배열을 리턴하는 문제여서 조금 익숙치 않을수 있다.  
그 배열의 크기는 k개의 그룹이 필요하다고 하였으니, k개만큼 선언하면 된다  
**몫과 나머지**를 이용하여, **나머지가 존재하는 경우는, 원소를 몫에서 1개를 더** 넣어주면 된다  


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
    public ListNode[] splitListToParts(ListNode root, int k) {
        int length = 0;
        ListNode temp = root;
        List<Integer> list = new ArrayList<>();
        while (temp != null) {
            length++;
            list.add(temp.val);
            temp = temp.next;
        }
        int rest = length % k, same = length / k;
        ListNode[] ans = new ListNode[k];
        if (same >= 1) {
            int idx = 0;
            for (int i = 0; i < list.size(); ) {
                ListNode cur = null;
                ListNode temp2 = null;
                int p = same;
                if (rest > 0) {
                    while (p-- > 0) {
                        int value = list.get(i);
                        if (cur == null) {
                            cur = new ListNode(value);
                            temp2 = cur;
                        } else {
                            cur.next = new ListNode(value);
                            cur = cur.next;
                        }
                        i++;
                    }
                    int plusone = list.get(i);
                    i++;
                    cur.next = new ListNode(plusone);
                    cur = cur.next;
                    rest--;
                    ans[idx++] = temp2;
                } else {
                    while (p-- > 0) {
                        int value = list.get(i);
                        if (cur == null) {
                            cur = new ListNode(value);
                            temp2 = cur;
                        } else {
                            cur.next = new ListNode(value);
                            cur = cur.next;
                        }
                        i++;
                    }
                    ans[idx++] = temp2;
                }
            }
        } else {
            for (int i = 0; i < list.size(); i++) {
                ans[i] = new ListNode(list.get(i));
            }
        }
        return ans;
    }
}
```