---
title : "Generate Parentheses"
excerpt : "Leet code Practice"

categories:
    - Algorithm

tags:
        - Algorithm
        - Stack
        - Recursion
        - Implementation
last_modified_at: 2020-04-07
---

맨처음에는, n!으로 돌려서 일일이 맞는지 체크하려 했다(시간초과가 날꺼를 알면서도)

결국 시간초과가 났고, 풀이를 찾아봤다. 이해를 해보려 하니 항상 '('로 먼저 시작한다는 것이 주요 특징이다. 그래서 **'('를 주요적으로 먼저 넣어줘야 한다**. 그리고, ')'닫는괄호를 넣어야 하는데, 닫는 괄호를 넣어줄수 있을때는 항상, **남은 닫는 괄호의 갯수가 남은 여는 괄호의 갯수보다 항상 많아야 한다**는 조건이었다. 생각을 다시 해보면, **유효한 괄호를 만드려면 항상 닫는 괄호의 갯수가 더 많아야 한다**는 특징을 캐치를 해야 하는 문제였다. 이런 아이디어 문제는 알고나면 허전한데, 생각하기는 쉽지는 않은문제인 것 같다 ㅠㅠ

## by Java

```java
class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> ans= new ArrayList<>();
        backtrack(ans,new StringBuilder(),n,n);
        return ans;
    }
    private void backtrack(List<String> ans,StringBuilder sb, int closecnt,int opencnt) {
        if(opencnt!=0) {
            sb.append('(');
            backtrack(ans,sb,closecnt,opencnt-1);
            sb.deleteCharAt(sb.length()-1);
        }
        if(closecnt!=0 && closecnt>opencnt) {
            sb.append(')');
            backtrack(ans,sb,closecnt-1,opencnt);
            sb.deleteCharAt(sb.length()-1);
        }
        if(opencnt==0 && closecnt==0) {
            ans.add(sb.toString());
        }
    }
}
```