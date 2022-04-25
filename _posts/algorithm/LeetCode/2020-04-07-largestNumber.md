---
title : "Largest Number"
excerpt : "Leet code Practice"

categories:
    - LeetCode

tags:
        - String
        - Sort
last_modified_at: 2020-04-07
---

String의 sort를 문제의 조건대로 정확히 할 수 있는지를 물어보는 문제이다.

아래 코드의 예제에서도 언급했지만, 숫자를 크게하기 위해서는, 아스키 코드가 큰 값이 먼저 오게 만들어야 한다. 그러기 위해서는, 여러가지 방법이 있을수 있지만, 숫자를 어떻게 하면 더 크게 할수 있을까? 라는 생각을 가지고 Sorting을 하는것이 방법인것 같다

아래의 코드를 참고해보면 될것 같다

## by Java

```java
class Solution {
    public String largestNumber(int[] nums) {
        String[] number = new String[nums.length];
        for(int i=0;i<nums.length;i++) {
            number[i] = String.valueOf(nums[i]);
        }
        Arrays.sort(number,(a,b)->compare(a,b));
        StringBuilder sb= new StringBuilder();
        for(int i=0;i<number.length;i++) {
            sb.append(number[i]);
        }
        if(sb.charAt(0)=='0' && sb.length()>=1) return "0";
        return sb.toString();
    }
    private int compare(String a,String b) {
        String first = a+b;
        String second = b+a;
        return second.compareTo(first);
        
        //ex)
        //a: 2, b: 10
        // a+b : 210
        // b+a : 102
        //(O) 102.compareTo(210)-> -1(a,b 상태유지, a가 b보다 더 앞에있음) -> 2, 10
        //(X) 210.compareTo(102) -> 1(a가 b보다 뒤에 있음) -> 10,2
    }
}
```