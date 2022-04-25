---
title : "Valid Anagram"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
        - Implementation
last_modified_at: 2020-04-09
---

소문자 갯수를 체크를 해준다음, 갯수가 알맞는지 확인을 해주면된다

## by Java

```java
class Solution {
    public boolean isAnagram(String s, String t) {
        int[] cnt = new int[26];
        int[] cnt2 = new int[26];
        for(int i=0;i<s.length();i++) {
            char c= s.charAt(i);
            cnt[c-'a']++;
        }
        for(int i=0;i<t.length();i++) {
            char cc= t.charAt(i);
            cnt2[cc-'a']++;
        }
        for(int i=0;i<26;i++) {
            if(cnt[i]!=cnt2[i]) return false;
        }
        return true;
    }
}
```