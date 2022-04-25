---
title : "Letter Combinations of a Phone Number"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
        - Map
        - List
        - String
        - Algorithm
last_modified_at: 2020-03-30
---

**List** 그리고 **String 메소드** 그리고 **Map(HashMap)**을 이용해서 풀수있다.  
1. 먼저 입력된 번호를 각 번호마다 알파벳에 맞게 설정을 해준다
2. 그다음 Recursion을 돌리긴 하는데, substring 메소드를 적절히 이용하는 것이 중요하다
3. String+String 연산을 통해 계속 String 문자열을 만들어낸다  
(3번 말고 다른 좋은 방법이 충분히 있을수 있으니 참고하길바람) 

## by Java

```java
class Solution {
    public List<String> letterCombinations(String digits) {
        List<String> output = new ArrayList<>();
        Map<String,String> map = new HashMap<>();
        map.put("2","abc");
        map.put("3","def");
        map.put("4","ghi");
        map.put("5","jkl");
        map.put("6","mno");
        map.put("7","pqrs");
        map.put("8","tuv");
        map.put("9","wxyz");
        if(digits.length()!=0) go("",digits,map,output);
        return output;
    }
    private void go(String cur,String num,Map<String,String> map,List<String> output) {
        if(num.length()==0) {
            output.add(cur);
            return;
        }
        String curnum = num.substring(0,1);
        String alphalist= map.get(curnum);
        for(int i=0;i<alphalist.length();i++) {
            String next = map.get(curnum).substring(i,i+1);
            go(cur+next,num.substring(1),map,output);
        }
    }
}
```