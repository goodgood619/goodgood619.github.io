---
title : "Perform String Shifts"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
    - String
    - Implementation
last_modified_at: 2020-04-16
---

0이면 왼쪽으로 옮기고, 1이면 오른쪽으로 옮기는데 

몇번 움직여야 하는지 구현을 하는 문제이다.

어차피 String의 길이보다 큰경우는 돌려도 순환을 하기 때문에, **mod 연산을 이용한 나머지**값만 

돌려주면 된다.

left의 경우는 **cnt의 index부터 시작해서 끝(String.length())까지 본다음, 처음부터 cnt까지** 보면서 순차적으로 만들면된다

반면에 right의 경우는 **String의 length()에서 cnt를 뺀다음부터 끝(String.length())까지 본다음, 다시 처음부터 String.length()-cnt**까지 보면서 순차적으로 만들어주면된다.

## by Java

```java
class Solution {
    public String stringShift(String s, int[][] shift) {
        StringBuilder sb = new StringBuilder(s);
        for(int i=0;i<shift.length;i++) {
            int move = shift[i][0];
            int cnt = shift[i][1];
            sb = go(sb,move,cnt);
        }
        return sb.toString();
    }
    private StringBuilder go(StringBuilder sb, int move,int cnt) {
        String temp = sb.toString();
        cnt = cnt % temp.length();
        StringBuilder ret = new StringBuilder();
        if(move==0) { //left
            for(int i=cnt;i<temp.length();i++) {
                ret.append(temp.charAt(i));
            } 
            for(int i=0;i<cnt;i++) {
                ret.append(temp.charAt(i));
            }
        }
        else { //right
            for(int i=temp.length()-cnt;i<temp.length();i++) {
                ret.append(temp.charAt(i));
            }
            for(int i=0;i<temp.length()-cnt;i++) {
                ret.append(temp.charAt(i));
            }
        }
        return ret;
    }
}
```