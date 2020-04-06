---
title : "Valid Parentheses"
excerpt : "Leet code Practice"

categories:
    - Algorithm

tags:
        - Algorithm
        - Stack
        - Implementation
last_modified_at: 2020-04-07
---

BOJ의 괄호문제가 method형태로 나왔을뿐이다.

1. 올바른 괄호를 만들어주기 위해 Stack 혹은 Deque를 쓴다(LIFO를 지키는 자료구조면 사실 뭐든 가능하다.)
2. 그다음 여는 괄호('(','{','[')가 들어오면 Deque에 넣어준다
3. 만약 그렇지 않다면, 제일 늦게 들어간 원소를 빼낸다음 괄호의 모양이 맞는지 체크를 한다
4. 그런데 만약 비어있으면 불가능하다 혹은 모양이 안맞거나
5. 그리고 맨 마지막에, 여는괄호가 더 많을수도있기에, Deque는 항상 비어있어야 한다, 그렇지않다면 불가능하다

## by Java

```java
class Solution {
    public boolean isValid(String s) {
        Deque<Character> q = new ArrayDeque<>();
        boolean no = false;
        for(int i=0;i<s.length();i++) {
            char c= s.charAt(i);
            if(c=='(' || c=='{' || c=='[') {
                q.add(c);
            }
            else {
                if(q.isEmpty()) {
                    no = true;
                    break;
                }
                char top = q.pollLast();
                if(top=='(' && c==')' || top=='{' && c=='}' || top=='[' && c==']') {
                    continue;
                }
                else {
                    no= true;
                    break;
                }
            }
        }
        
        if(!no && q.isEmpty()) return true;
        return false;
    }
}
```