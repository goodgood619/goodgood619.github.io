---
title : "Group Anagram"
excerpt : "Leet code Practice"

categories:
    - Algorithm

tags:
        - Map
        - String
        - Algorithm
last_modified_at: 2020-03-30
---

using Map, String

같은 원소로 이루어진것들을 List<List<String>> 타입으로 반환을 시켜줘야함!

## by Java

```java
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        if(strs.length==0) return new ArrayList<>();
        Map<String,List> map = new HashMap<>();
        for(String s : strs) {
            int[] cnt = new int[26];
            for(int j=0;j<s.length();j++){
                cnt[s.charAt(j)-'a']++;
            }
            
            StringBuilder sb = new StringBuilder();
            for(int i=0;i<26;i++){
                sb.append('#');
                sb.append(cnt[i]);
            }
            
            String key = sb.toString();
            if(map.get(key)==null) map.put(key,new ArrayList());
            map.get(key).add(s);
        }
        //Collection<V> values(); value타입을 Collection안에 Wrapping시켜줌
        // 그래서 List<>로 감싸야해서 ArrayList로 한번더 묶어주는거같음!!
        List<List<String>> ans = new ArrayList(map.values());
        return ans;
    }
}
```