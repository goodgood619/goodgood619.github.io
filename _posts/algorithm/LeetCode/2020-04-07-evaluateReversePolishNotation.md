---
title : "Evaluate Reverse Polish Notation"
excerpt : "Leet code Practice"

categories:
    - Algorithm

tags:
        - Stack
        - Implementation
last_modified_at: 2020-04-07
---

1. 스택에 숫자가 나올때, 숫자를 계속 쌓는다
2. 만약 기호가 나온다면, 기호에 맞게 연산을 진행한후 다시 연산된값을 쌓는다
3. 마지막에 스택에 남아있는 한가지 숫자를 뽑아서 리턴한다
4. 예외적으로 처리해줘야 하는 부분은 **음수**가 들어갔을때이다


## by Java

```java
class Solution {
    public int evalRPN(String[] tokens) {
        Deque<Integer> stack = new ArrayDeque<>();
        for(int i=0;i<tokens.length;i++) {
            String s= tokens[i];
            if(s.charAt(0)>='0' && s.charAt(0)<='9') {
                int num = Integer.parseInt(s);
                stack.add(num);
            }
            else if(s.charAt(0)=='-' && s.length()>1) {
                int num = Integer.parseInt(s);
                stack.add(num);
            }
            else {
                int second = stack.pollLast();
                int first = stack.pollLast();
                if(s.equals("+")) {
                    stack.add(first+second);
                }
                if(s.equals("-")) {
                    stack.add(first-second);
                }
                if(s.equals("*")) {
                    stack.add(first*second);
                }
                if(s.equals("/")) {
                    stack.add(first/second);
                }
            }
        }
        return stack.pollLast();
    }
}
```