var store = [{
        "title": "DFS와 BFS",
        "excerpt":"동작 방식은 저의 예전 블로그의 글을 참고해보시면 좋을거같습니다!! https://blog.naver.com/gktgnjftm/221458488876 (공을 좀 많이 들여놔서 좀 아깝더라고요 ㅎㅎ) (단 Java는 없고 , C++로만 설명이 되어있습니다!!) 아래는 C++와 Java로 이루어져 있습니다! by C++(DFS) void dfs(int here,vector&lt;vector&lt;int&gt;&gt;&amp;graph, int *visited,vector&lt;int&gt;&amp; temp){ visited[here] = 1; printf(\"%d \",here); for(int i=0 ; i&lt;graph[here].size();i++) { int next = graph[here][i];...","categories": ["Algorithm"],
        "tags": ["DFS","BFS","Algorithm"],
        "url": "http://localhost:4000/algorithm/DFSandBFS/",
        "teaser": null
      },{
        "title": "github.io 블로그 시작하기",
        "excerpt":"GitHub Blog 서비스인 github.io 블로그 시작하기로 했다. GitHub Blog 서비스의 이름은 Pages이다. 봄 여름 가을 겨울 This is a blockqute. This is a H1 This is a H2 이것은 cancelline int main() { int y = SOME_MACRO_REFERENCE; int x = 5 + 6; cout &lt;&lt; \"Hello World! \" &lt;&lt; x...","categories": ["Blog"],
        "tags": ["Blog"],
        "url": "http://localhost:4000/blog/test/",
        "teaser": null
      },{
        "title": "Java 언어의 특성 및 장단점",
        "excerpt":"Java 장단점 및 특징 정리 장점 객체 지향 언어로서 클래스 계층 구조, 상속성, 다형성, 캡슐화 등을 지원 멀티 스레드 C,C++ 많은 언어들은 자체적으로 멀티 스레드를 지원하지 않고, 운영체제의 도움을 받음 반면 자바의 경우는 운영체제 도움 없이 독립적으로 실행이 가능하다 함!! 플랫폼 독립성 하드웨어, 운영체제 등 플랫폼에 종속되지 않는 독립적인 바이트...","categories": ["language"],
        "tags": ["Java","language"],
        "url": "http://localhost:4000/language/%EC%9E%90%EB%B0%94%EC%9E%A5%EB%8B%A8%EC%A0%90/",
        "teaser": null
      },{
        "title": "최소스패닝트리(크루스칼)",
        "excerpt":"최소 스패닝 트리는 정점이 n개인 상태에서, n-1개의 간선만을 택해 최소 거리를 만든다는 것이 핵심입니다! 최소 스패닝 트리를 만드는 방법은 2가지가 있지만, Kruskal을 이용하여 문제를 풀수있습니다. 이 Kruskal의 구현의 핵심은 Union Find인데 Union Find의 핵심은 친구의 적은 적이라는 것입니다. 같은 그룹으로 만드는 작업 Union과 어느 그룹에 속해있는지를 빠르게 찾는 Find로 이루어져있습니다....","categories": ["Algorithm"],
        "tags": ["Minimum Spanning Tree","Union Find","Kruskal","Algorithm"],
        "url": "http://localhost:4000/algorithm/%EC%B5%9C%EC%86%8C%EC%8A%A4%ED%8C%A8%EB%8B%9D%ED%8A%B8%EB%A6%AC/",
        "teaser": null
      },{
        "title": "LCA",
        "excerpt":"서론 및 개인적인 생각 LCA는 최소 공통 조상을 뜻하며, 영어로는 Least Common Ancestor? 뭐 이런 의미 인거 같다 ​그럼 반대로 최대 공통 조상이란 말이 있을까라는 생각이 든다. 그런데, 사실 최대 공통조상의 정답은 너무 간단하다. 왜냐하면 항상 루트일것이기 때문이다 ​그러면 LCA를 통해서 무엇을 할수 있을것인가? 라는 고민이 문득 든다 ​이런 문제의...","categories": ["Algorithm"],
        "tags": ["LCA","Dynamic Programming","Algorithm"],
        "url": "http://localhost:4000/algorithm/LCA/",
        "teaser": null
      },{
        "title": "LCS",
        "excerpt":"LCS는 Longest Common Subsequence 라는 의미로 최장 공통 부분수열을 구하는 알고리즘이다. ACAYKP CAPCAK 일때 LCS를 하게 되면, 길이는 4가 나오고, ACAK라는 수열을 갖게된다 그냥 동작원리는 다른 블로그에도 잘 나와 있어서 간략하게 쓰려고 한다   0 A C A Y K P 0 0 0 0 0 0 0 0 C...","categories": ["Algorithm"],
        "tags": ["LCS","Dynamic Programming","Algorithm"],
        "url": "http://localhost:4000/algorithm/LCS/",
        "teaser": null
      },{
        "title": "CCW교차판별",
        "excerpt":"이번의 경우는 CCW를 통해서 교차 판별을 이루는 문제를 파악해보려 합니다 ​CCW를 하면 반시계방향인지, 시계 방향인지를 알수 있습니다. ​그러면 교차를 하려면 어떻게 형성이 되어야 할까요? ​당연히 아래 그림과 같이 형성을 해야 할것입니다 그러면 점 A와 B 그리고 C를 CCW한 값을 CCW1이라고 가정을 해보겠습니다 ​그때 CCW1의 값은 무조건 반시계방향이니까 양수일것입니다 그러면 한번더...","categories": ["Algorithm"],
        "tags": ["CCW","Algorithm"],
        "url": "http://localhost:4000/algorithm/ccw%EA%B5%90%EC%B0%A8%ED%8C%90%EB%B3%84/",
        "teaser": null
      },{
        "title": "CCW",
        "excerpt":"CCW는 간략하게 CW와 CCW로 이루어진 말인것 같다 아무튼 CCW는 평면상의 임의의 세점이 있을때 그 점들간의 위치관계를 파악할수 있다는것이다 ​경우는 3가지로 나뉘는데 반시계 방향인 경우 : 이때는 ccw값이 양수(+)값이 나온다 시계 방향인 경우 : 이때는 ccw값이 음수(-)가 나온다 일직선인 경우 : 이때는 ccw값이 0이 나온다 ​그림으로 간략하게 표현해 보면 위의 그림은...","categories": ["Algorithm"],
        "tags": ["CCW","Algorithm"],
        "url": "http://localhost:4000/algorithm/ccw%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "ConvexHull",
        "excerpt":"Convex Hull (Monotone Chain 기법) 저도 컨벡스 헐을 배운지는 1주일도 안되서, 공부하고 기록의 차원이니 많이 이해해주셨으면 좋겠다. ​우선 컨벡스 헐이라는건, 간단하게 2차원 평면에 n개의 점이 흩어져 있는데, 이 n개의 점중에 몇개를 선택해서 볼록 다각형을 만들때 그 다각형안에 나머지 모든 점을 포함시키게 하는 도형을 볼록 껍질 , 컨벡스헐이라고 한다 ​이 문제를...","categories": ["Algorithm"],
        "tags": ["CCW","ConvexHull","Stack","Algorithm"],
        "url": "http://localhost:4000/algorithm/convexHull/",
        "teaser": null
      },{
        "title": "단절점",
        "excerpt":"단절점은 무향 연결 그래프에서 특정 정점을 제거 했을때 두개의 연결 그래프로 나뉘는 정점을 단절점이라고 한다 그림을 통해서 어떻게 가는지 한번 보자 이런 무향그래프가 있다고 가정할때 아래와 같이 방문을 했다고 가정해보자 파란글씨는 방문순서 이제 6번째로 방문한 7번 노드는 주위에 더이상 갈곳이 없으니 5번으로 돌아올것이다 근데 이때, 돌아올때 우리는 리턴해주는 값을 설정할것이다...","categories": ["Algorithm"],
        "tags": ["단절점","graph","Algorithm"],
        "url": "http://localhost:4000/algorithm/%EB%8B%A8%EC%A0%88%EC%A0%90/",
        "teaser": null
      },{
        "title": "BitMasking DP",
        "excerpt":"애초에 DP를 너무너무너무 못하는지라 참 쓰기가 뭐하지만 대표적인 비트마스킹 DP문제가 있습니다 https://www.acmicpc.net/problem/2098 문제를 요약하면, 1번마을에서 시작해서 다시 1번마을까지 돌아오는데, 최소 비용을 출력하는 문제이다 ​근데 문제를 보면, n 사이즈가 16이다. ​우선은 일반적으로 생각을 해보면 아 1번 마을에서 시작해서 다음 마을로 가는 경우의수가 15가지이고, 그다음은 14가지, … 1가지 이렇게 되니까 15! 즉...","categories": ["Algorithm"],
        "tags": ["Dynamic Programming","bitMask","Algorithm"],
        "url": "http://localhost:4000/algorithm/%EB%B9%84%ED%8A%B8%EB%A7%88%EC%8A%A4%ED%82%B9DP/",
        "teaser": null
      },{
        "title": "Add Two Numbers",
        "excerpt":"ListNode를 정확히 사용할줄 알아야 한다 맨앞을 가리키는 헤더는 그대로 냅두고, 계속 뒤로 노드를 만들어서 이어 나가는것이 핵심이다. 그래서 뒤로 계속 향할 수 있게 가는 리스트노드 변수가 하나 더 필요하게 된다. 여기서는 ret가 될것이다. by Java /** * Definition for singly-linked list. * public class ListNode { * int val; *...","categories": ["Algorithm"],
        "tags": ["ListNode","Algorithm"],
        "url": "http://localhost:4000/algorithm/AddtwoNumbers/",
        "teaser": null
      },{
        "title": "Container with Most Water",
        "excerpt":"투 포인터를 사용하자 최대넓이 = (오른쪽위치-왼쪽위치)*(오른쪽위치와 왼쪽위치의 높이중최소) 높이가 더 짧은쪽을 움직이자, 왜냐하면 어차피 투포인터로 인해, 가로너비는 계속 줄고 있고 최대넓이로 만드려면 높이는 최대한 높아야 하기때문 by Java class Solution { public int maxArea(int[] height) { int max =0 , left = 0, right = height.length-1; while(left&lt;right) { max =...","categories": ["Algorithm"],
        "tags": ["Two Pointer","min max","Algorithm"],
        "url": "http://localhost:4000/algorithm/ContainerwithMostTwowater/",
        "teaser": null
      },{
        "title": "Group Anagram",
        "excerpt":"using Map, String 같은 원소로 이루어진것들을 List&lt;List&gt; 타입으로 반환을 시켜줘야함! by Java class Solution { public List&lt;List&lt;String&gt;&gt; groupAnagrams(String[] strs) { if(strs.length==0) return new ArrayList&lt;&gt;(); Map&lt;String,List&gt; map = new HashMap&lt;&gt;(); for(String s : strs) { int[] cnt = new int[26]; for(int j=0;j&lt;s.length();j++){ cnt[s.charAt(j)-'a']++; } StringBuilder sb = new StringBuilder(); for(int i=0;i&lt;26;i++){...","categories": ["Algorithm"],
        "tags": ["Map","String","Algorithm"],
        "url": "http://localhost:4000/algorithm/GroupAnagram/",
        "teaser": null
      },{
        "title": "LRU cache",
        "excerpt":"LRU Cache 코드 DoubleLinkedList + HashMap 이용!! HashMap의 value를 Double LinkedList를 가리키게 한다 그리고 queue처럼 put의 경우는 맨 뒤에 삽입을 하고, get의 경우는 값이 있다면 반환을 하고난뒤에, 그 위치의 값을 제거한다 그러기 위해서는, Double LinkedList를 삽입 삭제해주는 메소드 2개가 구현되어야한다 head가 가장 안쓴거, tail이 가장 빈번하게 쓰는거라고 정의를 하면 결국...","categories": ["Algorithm"],
        "tags": ["LRU Cache","Map","DoubleLinkedList","Algorithm"],
        "url": "http://localhost:4000/algorithm/LRUcache/",
        "teaser": null
      },{
        "title": "Letter Combinations of a Phone Number",
        "excerpt":"List 그리고 String 메소드 그리고 Map(HashMap)을 이용해서 풀수있다. 먼저 입력된 번호를 각 번호마다 알파벳에 맞게 설정을 해준다 그다음 Recursion을 돌리긴 하는데, substring 메소드를 적절히 이용하는 것이 중요하다 String+String 연산을 통해 계속 String 문자열을 만들어낸다 (3번 말고 다른 좋은 방법이 충분히 있을수 있으니 참고하길바람) by Java class Solution { public List&lt;String&gt;...","categories": ["Algorithm"],
        "tags": ["Map","List","String","Algorithm"],
        "url": "http://localhost:4000/algorithm/LetterCombination/",
        "teaser": null
      },{
        "title": "Remove Nth node from End of List",
        "excerpt":"맨 앞에 0을 집어넣은다음, 현재 링크드리스트에 연결을 시킨다 그다음 전체 길이를 구한다. 그러면 원래 길이가 k면 k+1이 된다 그다음 k+1에서 n을뺀다음에 1개가 추가가 되었기 때문에, rest가 2가 될때까지 빼준다(n-1번째 노드까지 가면된다) 그다음 현재 위치(n-1번째노드)의 다음번째를 다음번째(n+1)로 연결시킨다 대입으로 같은 reference를 공유하고 있기 때문에 처음의 헤드의 next를 리턴시킨다 by Java /**...","categories": ["Algorithm"],
        "tags": ["LinkedList","Algorithm"],
        "url": "http://localhost:4000/algorithm/RemoveNthNode/",
        "teaser": null
      },{
        "title": "Validate Binary Search Tree",
        "excerpt":"이진 탐색 트리가 유효한지를 판별하는 문제이다. 어떻게 해야할지 고민을 하다가 솔루션을 참고했는데, 항상 현위치에서 왼쪽과 오른쪽값의 존재가 필요하기 때문에, Parameter로 왼쪽과 오른쪽을 추가해서 Recursion을 진행해야 한다는 것이었다 by Java /** * Definition for a binary tree node. * public class TreeNode { * int val; * TreeNode left; * TreeNode...","categories": ["Algorithm"],
        "tags": ["Binary Search Tree","Algorithm"],
        "url": "http://localhost:4000/algorithm/ValidateBST/",
        "teaser": null
      },{
        "title": "Happy Number",
        "excerpt":"boolean 배열을 써도 되지만, HashMap을 이용해서 구현했다. by Java class Solution { public boolean isHappy(int n) { Map&lt;Integer,Integer&gt; map = new HashMap&lt;&gt;(); int p = n; while(map.get(p)==null) { map.put(p,1); int sum=0; while(p&gt;0) { sum += (p%10)*(p%10); p/=10; } p = sum; } if(p==1) return true; else return false; } }...","categories": ["Algorithm"],
        "tags": ["implementation","Map","Algorithm"],
        "url": "http://localhost:4000/algorithm/HappyNumber/",
        "teaser": null
      },{
        "title": "reversed-linked-list",
        "excerpt":"한번 loop를 돌면서 끝까지 가면서 원소를 list에 삽입해준다 이제 새로운 ListNode를 생성한다음, list의 반대 원소부터 시작해서 순차적으로 넣는다 by Java /** * Definition for singly-linked list. * public class ListNode { * int val; * ListNode next; * ListNode(int x) { val = x; } * } */ class Solution...","categories": ["Algorithm"],
        "tags": ["Map","List","String","Algorithm"],
        "url": "http://localhost:4000/algorithm/ReversedLinkedList/",
        "teaser": null
      },{
        "title": "reversed-linked-list-2",
        "excerpt":"m번째와 n번째가 어느 위치에서끝나는지 계산을 한다 그다음 그사이에 있는 값을 list에 넣는다 이제 각 3단계를 거쳐서 원소값을 집어넣는다 처음부터 m번째 위치전까지 그다음은 m번째 위치부터 n번째 위치까지 삽입 n번째 다음위치부터 끝까지 삽입(단 여기서 n번째 다음위치가 없을 수있으므로, 예외처리 필요) by Java /** * Definition for singly-linked list. * public class ListNode...","categories": ["Algorithm"],
        "tags": ["LinkedList","Algorithm"],
        "url": "http://localhost:4000/algorithm/ReversedLinkedList2/",
        "teaser": null
      },{
        "title": "SingleNumber",
        "excerpt":"단순 구현문제이다. 중복된 것을 효율적으로 체크하기 위해 맵을 사용한다. 그런데, 메모리를 더 안쓰고 푸는지는 수학적인 개념이 들어가는거같다! by Java class Solution { public int singleNumber(int[] num) { Map&lt;Integer,Integer&gt; map = new HashMap&lt;&gt;(); for(int i=0;i&lt;num.length;i++) { if(map.get(num[i])==null) { map.put(num[i],1); } else { int value = map.get(num[i]); value++; map.remove(num[i]); map.put(num[i],value); } }...","categories": ["Algorithm"],
        "tags": ["Map","Algorithm"],
        "url": "http://localhost:4000/algorithm/SingleNumber/",
        "teaser": null
      },{
        "title": "Unique Path 2",
        "excerpt":"unique-paths 1과 똑같은데 중간에 장애물이 생겼다. DP를 적용하되, 중간에 장애물을 만나면 더이상 탐색을 진행하지 않고 돌아가면 된다. dp[x][y] : (x,y)로 오는 경우의수라고 정의를 하자 dp[x][y] = dp[x+1][y] + dp[x][y+1] 단 장애물은 예외 by Java class Solution { public int uniquePathsWithObstacles(int[][] board) { int n= board.length; int m = board[0].length; int[][]...","categories": ["Algorithm"],
        "tags": ["implementation","Dynamic Programming","Algorithm"],
        "url": "http://localhost:4000/algorithm/UniquePath2/",
        "teaser": null
      },{
        "title": "add Binary",
        "excerpt":"이진수가 얼마까지 등장할지 모르므로, BigInteger를 사용하면 간단하게 구현이 가능하다 import를 빼먹지 말자   by Java   import java.math.BigInteger; class Solution {     public String addBinary(String a, String b) {         BigInteger c = new BigInteger(a,2);         BigInteger d = new BigInteger(b,2);         c = c.add(d);         return c.toString(2);     } }  ","categories": ["Algorithm"],
        "tags": ["implementation","BigInteger","Algorithm"],
        "url": "http://localhost:4000/algorithm/addBinary/",
        "teaser": null
      },{
        "title": "Remove Duplicate Sorted list",
        "excerpt":"더 간단한 방법이 있지만, Map을 써서 체크를 하면서 list에 넣은다음 loop를 돌면서 순차적으로 값을 넣는다 by Java /** * Definition for singly-linked list. * public class ListNode { * int val; * ListNode next; * ListNode(int x) { val = x; } * } */ class Solution { public ListNode...","categories": ["Algorithm"],
        "tags": ["LinkedList","Map","Algorithm"],
        "url": "http://localhost:4000/algorithm/removeDuplicateSortedlist/",
        "teaser": null
      },{
        "title": "Remove Duplicate Sorted list 2",
        "excerpt":"좀 더 효율적으로 풀어야 되나 생각을 하다가, 정확성을 위해 정확하게 풀려했다 value의 갯수와 동시에 index를 표현하기 위해 HashMap과 List를 사용하였다. boolean 배열을 이용하여 걸러냈고 정답을 만들어 리턴 by Java /** * Definition for singly-linked list. * public class ListNode { * int val; * ListNode next; * ListNode(int x) {...","categories": ["Algorithm"],
        "tags": ["LinkedList","List","Map","Algorithm"],
        "url": "http://localhost:4000/algorithm/removeDuplicateSortedlist2/",
        "teaser": null
      },{
        "title": "Same Tree",
        "excerpt":"두 개의 tree가 동일한지 체크를 하는문제이다. 순회를 하면 되는데 틀린것은 3가지의 경우가 존재한다 왼쪽트리가 null 인데, 오른쪽트리가 null이 아닌 경우 왼쪽트리가 null이 아닌데, 오른쪽트리가 null인 경우 왼쪽트리의 val값과 오른쪽트리의 val값이 다른경우 이 경우를 제외하면서 순회를 해주면 된다. 왼쪽트리, 오른쪽트리 둘다 필요하기 때문에, Parameter를 계속 전달을 해준다 by Java /** *...","categories": ["Algorithm"],
        "tags": ["Binary Tree","Algorithm"],
        "url": "http://localhost:4000/algorithm/sameTree/",
        "teaser": null
      },{
        "title": "Odd Even LinkedList",
        "excerpt":"번갈아 가면서 넣어줘야 하기 때문에, 홀수번째 노드를 처음위치, 짝수번째 노드를 처음의 다음위치(2번째)에 놓고 시작을 한다 그다음 홀수번째 노드를 먼저 순차적으로 순회하면서 값을 집어넣는다 단 예외처리를 해줘야 하는것이, 2칸씩 건너가야 하는데, 2칸을 가기전에 1칸만 갔는데도 null인경우는 NullPointerException이 나므로 1칸씩 이동해주면된다. by Java /** * Definition for singly-linked list. * public class...","categories": ["Algorithm"],
        "tags": ["LinkedList","List","Map","Algorithm"],
        "url": "http://localhost:4000/algorithm/oddevenLinkedList/",
        "teaser": null
      },{
        "title": "Split LinkedList in parts",
        "excerpt":"LinkedList 배열을 리턴하는 문제여서 조금 익숙치 않을수 있다. 그 배열의 크기는 k개의 그룹이 필요하다고 하였으니, k개만큼 선언하면 된다 몫과 나머지를 이용하여, 나머지가 존재하는 경우는, 원소를 몫에서 1개를 더 넣어주면 된다 by Java /** * Definition for singly-linked list. * public class ListNode { * int val; * ListNode next; *...","categories": ["Algorithm"],
        "tags": ["LinkedList","Array","Algorithm"],
        "url": "http://localhost:4000/algorithm/splitLinkedlistinParts/",
        "teaser": null
      },{
        "title": "Binary Tree ZigZag Level Order Traversal",
        "excerpt":"먼저 트리를 순회하면서 총깊이를 구한다 총깊이 만큼 2차원 List에 할당을 해준다 트리를 다시 순회하면서, 각 List의 높이 == index에 맞게 넣어준다 지그재그 순서이므로 예제를 보고 다시 데이터를 만들어 리턴한다 by Java /** * Definition for a binary tree node. * public class TreeNode { * int val; * TreeNode left;...","categories": ["Algorithm"],
        "tags": ["Tree","List","Algorithm"],
        "url": "http://localhost:4000/algorithm/binaryTreeZigZag/",
        "teaser": null
      },{
        "title": "Count Prime",
        "excerpt":"입력된 n 미만의 수들중에서 소수의 갯수를 반환하는 문제이다 에라토스테네스의 체를 이용하여 소수를 빠르게 구한후 갯수를 세어주면 된다 by Java class Solution { public int countPrimes(int n) { boolean[] notprime = new boolean[n+1]; for(int i=2;i&lt;=Math.sqrt(n);i++) { if(notprime[i]) continue; for(int j=i*i;j&lt;=n;j+=i) { notprime[j]=true; } } int count=0; for(int i=2;i&lt;n;i++) { if(!notprime[i]) {...","categories": ["Algorithm"],
        "tags": ["prime","math","에라토스테네스의 체","Algorithm"],
        "url": "http://localhost:4000/algorithm/countPrime/",
        "teaser": null
      },{
        "title": "Pascals Triangle",
        "excerpt":"파스칼의 삼각형 문제이다 이 문제는 이항계수를 이용하여 문제를 풀수있다. dp[n][m] : nCm이라고 정의를 하자, 즉 n개중에 m개를 순서없이 고르는 경우의수이다 dp[n][m] = dp[n-1][m]+dp[n-1][m-1], 단 m&gt;=1,n&gt;=1이상이다 그리고 n과 m이 같거나 , m이 0인경우는 1로 처리를 해준다 by Java class Solution { public List&lt;List&lt;Integer&gt;&gt; generate(int numRows) { if(numRows==0) return new ArrayList&lt;&gt;(); int[][]...","categories": ["Algorithm"],
        "tags": ["Dynamic Programming","Math","Algorithm"],
        "url": "http://localhost:4000/algorithm/pascalsTriangle/",
        "teaser": null
      },{
        "title": "Pascals Triangle 2",
        "excerpt":"Pascals Triangle 문제와 거의 흡사하다 by Java class Solution { public List&lt;Integer&gt; getRow(int rowIndex) { int[][] dp = new int[rowIndex+1][rowIndex+1]; for(int i=0;i&lt;=rowIndex;i++) { for(int j=0;j&lt;=rowIndex;j++) { dp[i][j]=-1; } } dp[0][0]=1; for(int i=0;i&lt;=rowIndex;i++) { go(dp,rowIndex,i); } List&lt;Integer&gt; list = new ArrayList&lt;&gt;(); for(int i=0;i&lt;=rowIndex;i++) { list.add(dp[rowIndex][i]); } return list; } private int...","categories": ["Algorithm"],
        "tags": ["Dynamic Programming","Math","Algorithm"],
        "url": "http://localhost:4000/algorithm/pascalsTriangle2/",
        "teaser": null
      },{
        "title": "Populating Next Right Pointers In Each Node",
        "excerpt":"이 문제는 개인적으로는 좀 어려운거 같아서 솔루션을 보고 풀었다. 2가지 경우가 핵심인데 현재 노드의 위치 아래에 왼쪽자식과 오른쪽 자식이 둘다 존재하는 경우 왼쪽자식의 다음을 오른쪽자식으로 잇는다 현재 노드의 오른쪽자식과 현재 노드의 다음위치노드가 둘다 존재하는 경우, 현재 노드의 오른쪽자식의 다음노드를 현재 노드의 다음위치의 왼쪽자식으로 잇는다 말로 하려니 참 긴거같다 코드를 보자...","categories": ["Algorithm"],
        "tags": ["Tree","A","Algorithm"],
        "url": "http://localhost:4000/algorithm/populatingRightNode/",
        "teaser": null
      },{
        "title": "Sort list",
        "excerpt":"LinkedList와 sorting을 이용하면 된다. 한번 ListNode를 순회하면서 원소들을 뽑아냈다 그다음 list의 원소를 정렬한후(Comparator이용) 새롭게 다시 ListNode에 list의 원소들을 집어넣어서 반환하였다 by Java /** * Definition for singly-linked list. * public class ListNode { * int val; * ListNode next; * ListNode(int x) { val = x; } * } */...","categories": ["Algorithm"],
        "tags": ["LinkedList","Sorting","Comparator","Algorithm"],
        "url": "http://localhost:4000/algorithm/sortList/",
        "teaser": null
      },{
        "title": "Linked List Cycle 2",
        "excerpt":"linked-list-cycle과 똑같은데, 이번에는 ListNode를 반환하면 된다. Set으로 체크를 하다가, 동일한것이 체크되면 그때의 ListNode를 반환하자 Set으로 ListNode를 체크하는건 정말 좋은 아이디어인거같다 by Java /** * Definition for singly-linked list. * class ListNode { * int val; * ListNode next; * ListNode(int x) { * val = x; * next = null;...","categories": ["Algorithm"],
        "tags": ["Algorithm","LinkedList","Cycle","Set","Implementation"],
        "url": "http://localhost:4000/algorithm/LinkedListCycle2/",
        "teaser": null
      },{
        "title": "Surrounded Regions",
        "excerpt":"BFS문제인데, 조건을 break문을 넣어가지고, 제대로 탐색이 안됐었다. O인 지점에서 BFS를 진행하되, X로 바꿔야 하는 조건은 O인 것만 탐색을 하되 경계선까지 가지 않았을때만 X로 바꿔야 하는 문제이다 by Java class Solution { int[] gox = {0,1,-1,0}; int[] goy = {1,0,0,-1}; public void solve(char[][] board) { if(board.length==0) return; boolean[][] visited = new...","categories": ["Algorithm"],
        "tags": ["Algorithm","BFS","Implementation"],
        "url": "http://localhost:4000/algorithm/SurroundedRegions/",
        "teaser": null
      },{
        "title": "Number of Islands",
        "excerpt":"이 문제는 백준의 섬 구하기? 문제랑 똑같은 문제이다 그 형태가 메소드 작성형태로 바뀐 문제이다 DFS 혹은 BFS를 이용하여, DFS와 BFS가 실행된 횟수를 반환하면 된다. 단 DFS와 BFS는 인접한 1인 곳만 갈수있다(동서남북으로) by Java class Solution { int[] gox = {0,1,-1,0}; int[] goy = {1,0,0,-1}; public int numIslands(char[][] grid) { if(grid.length==0)...","categories": ["Algorithm"],
        "tags": ["Algorithm","DFS,BFS","Implementation"],
        "url": "http://localhost:4000/algorithm/numberOfIslands/",
        "teaser": null
      },{
        "title": "Palidrome Number",
        "excerpt":"입력받은 숫자를 StringBuilder로 이용해  거꾸로 만든다음 String과 비교를 해주면 되는 문제이다  by Java   class Solution {     public boolean isPalindrome(int x) {         String s= String.valueOf(x);         StringBuilder sb = new StringBuilder();         for(int i=s.length()-1;i&gt;=0;i--) {             sb.append(s.charAt(i));         }         if(s.equals(sb.toString())) return true;         else return false;     } }  ","categories": ["Algorithm"],
        "tags": ["Algorithm","String","Implementation"],
        "url": "http://localhost:4000/algorithm/palindromeNumber/",
        "teaser": null
      },{
        "title": "Remove Linked List Elements",
        "excerpt":"list에 제거할 값만 빼고 순차적으로 값을 저장한다. 그다음 새롭게 ListNode를 만들어서 list의 원소에 있는값들을 넣으며 만든다음에 리턴한다 by Java /** * Definition for singly-linked list. * public class ListNode { * int val; * ListNode next; * ListNode(int x) { val = x; } * } */ class Solution {...","categories": ["Algorithm"],
        "tags": ["Algorithm","LinkedList","Implementation"],
        "url": "http://localhost:4000/algorithm/removeListElements/",
        "teaser": null
      },{
        "title": "Reverse String",
        "excerpt":"단순히 입력배열(char[] 타입을 받아서) 정확히 반을 바꿔주면되는문제이다 오랜만에 기본형 타입을 써서 그런지 String이랑 헷갈렸다 ㅠㅠ by Java class Solution { public void reverseString(char[] s) { for(int i=0,j=s.length-1;i&lt;s.length/2;i++,j--) { // 기본 primitive type인 char형의 경우는 // charAt()메소드는 없다, String에서 주어질뿐.. 항상 헷갈리는듯 ㅇㅇ char c = s[i]; s[i] = s[j]; s[j]...","categories": ["Algorithm"],
        "tags": ["Algorithm","String","Implementation"],
        "url": "http://localhost:4000/algorithm/reverseString/",
        "teaser": null
      },{
        "title": "Search a 2d matrix 1 and 2",
        "excerpt":"1이랑 2가 똑같은 문제다 그냥 이중포문돌면서 체크하면된다..   by Java   class Solution {     public boolean searchMatrix(int[][] matrix, int target) {         for(int i=0;i&lt;matrix.length;i++) {             for(int j=0;j&lt;matrix[i].length;j++) {                 if(target== matrix[i][j]) return true;             }         }         return false;     } }  ","categories": ["Algorithm"],
        "tags": ["Algorithm","Implementation"],
        "url": "http://localhost:4000/algorithm/searchMatrix2d/",
        "teaser": null
      },{
        "title": "Top K Frequent Elements",
        "excerpt":"Map으로 숫자갯수를 정확하게 세준다 list에 넣고 정렬을 한다 k개만큼 원소를 뽑고 리턴을 한다 단 list에 넣을때, 숫자와 숫자갯수가 필요하니 class를 선언하여 사용하도록 하자 by Java class Solution { public List&lt;Integer&gt; topKFrequent(int[] nums, int k) { List&lt;P&gt; list = new ArrayList&lt;&gt;(); Map&lt;Integer,Integer&gt; map = new HashMap&lt;&gt;(); for(int i=0;i&lt;nums.length;i++) { if(map.get(nums[i])==null) {...","categories": ["Algorithm"],
        "tags": ["Algorithm","List","Sort","Map","Implementation"],
        "url": "http://localhost:4000/algorithm/topKFrequentElements/",
        "teaser": null
      },{
        "title": "Top K Frequent Words",
        "excerpt":"top-k-frequent-elements랑 거의 똑같은 문제이다 단지 체크해주는 것이 int타입에서 String으로 바뀌었을뿐이다 by Java class Solution { public List&lt;String&gt; topKFrequent(String[] words, int k) { Map&lt;String,Integer&gt; map = new HashMap&lt;&gt;(); for(int i=0;i&lt;words.length;i++) { String s = words[i]; if(map.get(s)==null) { map.put(s,1); } else { int value = map.get(s); value++; map.remove(s); map.put(s,value); } } List&lt;P&gt;...","categories": ["Algorithm"],
        "tags": ["Algorithm","List","Sort","Map","Implementation"],
        "url": "http://localhost:4000/algorithm/topKFrequentWords/",
        "teaser": null
      },{
        "title": "Web Server VS WAS",
        "excerpt":"Web Server VS WAS 우선 Static Pages와 Dynamic Pages를 알아야 하는데 이 2개의 차이는 말 그대로 페이지가 바뀌느냐 바뀌지 않느냐의 유무이다 간단한 예를 들면, 인자에따라서 계속 바뀐다면 그건 Dynamic Pages 그렇지 않다면 Static Pages라고 볼수있다. 이 Static Pages들을 처리하는것이 Web Server 반면 Dynamic Pages들을 처리하는것이 WAS(Web Application Server)라는것이다 Web Server...","categories": ["Server"],
        "tags": ["Server","Web Server","WAS","Servlet"],
        "url": "http://localhost:4000/server/webServerandWAS/",
        "teaser": null
      },{
        "title": "Best Time To Buy and Sell Stock",
        "excerpt":"loop를 돌면서, 내가 현재지점까지 왔을때 가장싸게 살수 있을때를 계속 안다고 가정해보면 이때 현재지점에 팔수 있다면, 최대이익을 남길수 있는지 없는지를 알수 있을것이다. by Java class Solution { public int maxProfit(int[] prices) { if(prices.length==0) return 0; int buy = (int)1e9,res=0; for(int i=0;i&lt;prices.length;i++) { buy = Math.min(buy,prices[i]); res = Math.max(res,prices[i]-buy); } return res;...","categories": ["Algorithm"],
        "tags": ["Implementation"],
        "url": "http://localhost:4000/algorithm/bestTimetoBuyandSellStock/",
        "teaser": null
      },{
        "title": "Evaluate Reverse Polish Notation",
        "excerpt":"스택에 숫자가 나올때, 숫자를 계속 쌓는다 만약 기호가 나온다면, 기호에 맞게 연산을 진행한후 다시 연산된값을 쌓는다 마지막에 스택에 남아있는 한가지 숫자를 뽑아서 리턴한다 예외적으로 처리해줘야 하는 부분은 음수가 들어갔을때이다 by Java class Solution { public int evalRPN(String[] tokens) { Deque&lt;Integer&gt; stack = new ArrayDeque&lt;&gt;(); for(int i=0;i&lt;tokens.length;i++) { String s= tokens[i];...","categories": ["Algorithm"],
        "tags": ["Stack","Implementation"],
        "url": "http://localhost:4000/algorithm/evaluateReversePolishNotation/",
        "teaser": null
      },{
        "title": "Excel Sheet Column Number",
        "excerpt":"단순하게 자릿수에 26을 곱해서 틀릴수 있는문제이다. 26^n이라는것을 잊지말자   by Java   class Solution {     public int titleToNumber(String s) {         int sum=0,idx=0;         for(int i=s.length()-1;i&gt;=0;i--) {             char c= s.charAt(i);             sum += (c-'A'+1)*Math.pow(26,idx++);         }         return sum;     } }  ","categories": ["Algorithm"],
        "tags": ["Implementation"],
        "url": "http://localhost:4000/algorithm/excelSheetColumnNumber/",
        "teaser": null
      },{
        "title": "Find Peak Element",
        "excerpt":"양 옆원소보다 클때의 그때 인덱스를 반환해주면 되는문제이다. 가장 높은 원소의 인덱스도 아니고, 그냥 아무거나 반환하면 된다. 예외적으로 처리해야하는부분은, 길이가 1인 경우와, 맨 처음과 맨마지막의 경우만 예외처리를 해줘서 문제를 풀었다. by Java class Solution { public int findPeakElement(int[] nums) { if(nums.length==1) return 0; int maxHeight =0 , idx=-1; for(int i=0;i&lt;nums.length;i++) {...","categories": ["Algorithm"],
        "tags": ["Implementation"],
        "url": "http://localhost:4000/algorithm/findPeakElement/",
        "teaser": null
      },{
        "title": "Generate Parentheses",
        "excerpt":"맨처음에는, n!으로 돌려서 일일이 맞는지 체크하려 했다(시간초과가 날꺼를 알면서도) 결국 시간초과가 났고, 풀이를 찾아봤다. 이해를 해보려 하니 항상 ‘(‘로 먼저 시작한다는 것이 주요 특징이다. 그래서 ’(‘를 주요적으로 먼저 넣어줘야 한다. 그리고, ‘)’닫는괄호를 넣어야 하는데, 닫는 괄호를 넣어줄수 있을때는 항상, 남은 닫는 괄호의 갯수가 남은 여는 괄호의 갯수보다 항상 많아야 한다는...","categories": ["Algorithm"],
        "tags": ["Algorithm","Stack","Recursion","Implementation"],
        "url": "http://localhost:4000/algorithm/generateParentheses/",
        "teaser": null
      },{
        "title": "Largest Number",
        "excerpt":"String의 sort를 문제의 조건대로 정확히 할 수 있는지를 물어보는 문제이다. 아래 코드의 예제에서도 언급했지만, 숫자를 크게하기 위해서는, 아스키 코드가 큰 값이 먼저 오게 만들어야 한다. 그러기 위해서는, 여러가지 방법이 있을수 있지만, 숫자를 어떻게 하면 더 크게 할수 있을까? 라는 생각을 가지고 Sorting을 하는것이 방법인것 같다 아래의 코드를 참고해보면 될것 같다...","categories": ["Algorithm"],
        "tags": ["String","Sort"],
        "url": "http://localhost:4000/algorithm/largestNumber/",
        "teaser": null
      },{
        "title": "Maximum Depth Of Binary Tree",
        "excerpt":"트리를 순회(전위, 중위,후위 뭐든 상관없을것 같다)하면서, 최대 높이를 구해주면 되는 문제이다 by Java /** * Definition for a binary tree node. * public class TreeNode { * int val; * TreeNode left; * TreeNode right; * TreeNode(int x) { val = x; } * } */ class Solution { int...","categories": ["Algorithm"],
        "tags": ["Graph","Tree","Implementation"],
        "url": "http://localhost:4000/algorithm/maximumDepthOfBinaryTree/",
        "teaser": null
      },{
        "title": "Maximum SubArray",
        "excerpt":"기본적인 DP문제이다. 다시한번 생각을 해보지만 dp[i] : i를 끝으로 했을때 최대 부분배열의 합이라고 정의하자 그러면 dp[i-1]과 arr[i]를 더한것이 정의에 맞을수 있다. 그러나 dp[i-1]이 음수이게 되면, 오히려 값이 줄어들게 되므로, 0과 비교를 해서 항상 양수가 될때만을 더해줘야 한다는 예외처리를 해줘야한다 by Java class Solution { public int maxSubArray(int[] nums) { int...","categories": ["Algorithm"],
        "tags": ["Dynamic Programming","Implementation"],
        "url": "http://localhost:4000/algorithm/maximumSubarray/",
        "teaser": null
      },{
        "title": "Minimum Depth Of Binary Tree",
        "excerpt":"최소 높이를 구하는데 있어서, 조건이 있는 문제인데 왼쪽 오른쪽 자식이 아무도 없을때, 즉 말단 노드일때의 최소높이를 구하는 문제이다. 후위 순회를 돌면서 최소 높이를 구해줬다 by Java /** * Definition for a binary tree node. * public class TreeNode { * int val; * TreeNode left; * TreeNode right; * TreeNode(int...","categories": ["Algorithm"],
        "tags": ["Graph","Tree","Implementation"],
        "url": "http://localhost:4000/algorithm/minimumDepthOfBinaryTree/",
        "teaser": null
      },{
        "title": "Valid Parentheses",
        "excerpt":"BOJ의 괄호문제가 method형태로 나왔을뿐이다. 올바른 괄호를 만들어주기 위해 Stack 혹은 Deque를 쓴다(LIFO를 지키는 자료구조면 사실 뭐든 가능하다.) 그다음 여는 괄호(‘(‘,’{‘,’[‘)가 들어오면 Deque에 넣어준다 만약 그렇지 않다면, 제일 늦게 들어간 원소를 빼낸다음 괄호의 모양이 맞는지 체크를 한다 그런데 만약 비어있으면 불가능하다 혹은 모양이 안맞거나 그리고 맨 마지막에, 여는괄호가 더 많을수도있기에, Deque는...","categories": ["Algorithm"],
        "tags": ["Algorithm","Stack","Implementation"],
        "url": "http://localhost:4000/algorithm/validParentheses/",
        "teaser": null
      },{
        "title": "인터페이스와 추상클래스와 익명(무명)클래스",
        "excerpt":"Abstract class VS interface 우선 interface를 살펴보자 Interface 껍데기,설계도, 어떤 틀에 대한 명세 모든 메소드가 추상메소드임 그 의미는 interface를 구현(이행)한 클래스는 강제적으로 interface의 모든 메소드를 강제적으로 구현(이행)해야함 즉, 필요없는 메소드도 구현(이행)해야하는 짜증을 유발할수는 있음 그럼 언제쓰냐 협업을하거나, 큰 프로젝트의 경우 유용하게 쓸수있다. 왜냐하면, 어떤 사람이 무슨 일을 하는지 몰라도, 약속을...","categories": ["language"],
        "tags": ["Java","Language","Interface","Abstract Class","AnonyMous Class"],
        "url": "http://localhost:4000/language/%EC%9E%90%EB%B0%94%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4%EC%99%80%EC%B6%94%EC%83%81%ED%81%B4%EB%9E%98%EC%8A%A4%EC%A0%95%EB%A6%AC/",
        "teaser": null
      },{
        "title": "N Queens",
        "excerpt":"전형적인 n queen 문제이다 1차원배열을 이용해서 2차원 좌표를 저장할수있다. 1차원의 인덱스는 행, 1차원 인덱스의 value값을 열값이라고 칭하면 된다. 그럼 Recursion을 이용하여 각 행마다 퀸을 계속놓는다고 가정할때, 더이상 끝을 놓을수 없을때 그때 답이 된다는 것을 알고있다. 그러면, 각 행마다 열의 위치를 놓아줘야 하는데, 이 경우의수를 다하게되면 시간초과가 난다 그래서 백트래킹을 이용해서...","categories": ["Algorithm"],
        "tags": ["Recursion","BackTracking","Implementation"],
        "url": "http://localhost:4000/algorithm/NQueen1/",
        "teaser": null
      },{
        "title": "N Queen 2",
        "excerpt":"N-Queen과 똑같은데 오히려 문제는 더 쉬워졌다. 경우의수만 체크를 해서 리턴을 하면된다 by Java class Solution { int ans=0; public int totalNQueens(int n) { int[] arr = new int[n]; go(0,n,arr); return ans; } private void go(int index,int depth,int[] arr) { if(index==depth) { ans++; return; } for(int i=1;i&lt;=depth;i++) { arr[index] = i;...","categories": ["Algorithm"],
        "tags": ["Recursion","BackTracking","Implementation"],
        "url": "http://localhost:4000/algorithm/NQueen2/",
        "teaser": null
      },{
        "title": "Perfect Sqaures",
        "excerpt":"기본적인 동전 문제이다. 뭐 아니면 배낭문제라고 보셔도 무방하다. 여러개의 동전 중에 동전을 최소로 선택해서 목표치를 만드는 경우의 대표적인 문제이다. 이 문제는 배낭문제와는 좀 다르지만, 최소의 동전을 선택해서 목표인 n을 만드는문제이다. dp[k] : k원을 만드는데 쓰이는 동전의 최소갯수라고 정의하면 만약 k원을 만드는데 a라는 동전이 쓰인다면 a라는 동전은 k보다 같거나 작을것이다. 그럼...","categories": ["Algorithm"],
        "tags": ["Dynamic Programming","KnapSack","Implementation"],
        "url": "http://localhost:4000/algorithm/PerfectSquares/",
        "teaser": null
      },{
        "title": "Longest Increasing Subsequence",
        "excerpt":"LIS문제이다. 전통적으로 n^2으로 짜는 경우가 있지만, lowerbound나 upperbound를 이용해서 nlogn으로 구현하는 경우도 있다 이번에는 전통적인 n^2으로 구현을 해보았다. dp[i] : i를 오른쪽끝으로 할때, 최장 증가 부분 수열의 길이를 의미한다 그러면, 현재 위치를 j라고하자 (단 0≤j&lt;i)이다 오른쪽으로 계속 갈수록 수가 커져야 하기에, arr[j]&lt;arr[i]라는 조건이 필요하다 그래서 정리하면, dp[i] = max(dp[0],…dp[j],…,dp[i-1])+1(단, arr[j]&lt;arr[i]일때...","categories": ["Algorithm"],
        "tags": ["Dynamic Programming","Implementation"],
        "url": "http://localhost:4000/algorithm/longestIncreaseingSubsequence/",
        "teaser": null
      },{
        "title": "Middle Of The Linked List",
        "excerpt":"전체길이를 구한다 다시 처음부터 전체길이의 절반만 포인터를 이동시킨다 by Java /** * Definition for singly-linked list. * public class ListNode { * int val; * ListNode next; * ListNode(int x) { val = x; } * } */ class Solution { public ListNode middleNode(ListNode head) { ListNode temp = head;...","categories": ["Algorithm"],
        "tags": ["LinkedList","Implementation"],
        "url": "http://localhost:4000/algorithm/middleOfLinkedList/",
        "teaser": null
      },{
        "title": "Swap Nodes In Pair",
        "excerpt":"먼저 순회를 하면서 원소를 뽑아낸다 그다음 현재원소와 다음원소를 바꿔준다 그리고 2칸씩 넘어간다 단 다음원소가 존재해야하므로 예외처리가 필요하다 그다음 swap된 리스트를 순회하면서 정답을 만들어 리턴한다 by Java /** * Definition for singly-linked list. * public class ListNode { * int val; * ListNode next; * ListNode(int x) { val = x;...","categories": ["Algorithm"],
        "tags": ["LinkedList","Implementation"],
        "url": "http://localhost:4000/algorithm/swapNpdesinPair/",
        "teaser": null
      },{
        "title": "Valid Anagram",
        "excerpt":"소문자 갯수를 체크를 해준다음, 갯수가 알맞는지 확인을 해주면된다 by Java class Solution { public boolean isAnagram(String s, String t) { int[] cnt = new int[26]; int[] cnt2 = new int[26]; for(int i=0;i&lt;s.length();i++) { char c= s.charAt(i); cnt[c-'a']++; } for(int i=0;i&lt;t.length();i++) { char cc= t.charAt(i); cnt2[cc-'a']++; } for(int i=0;i&lt;26;i++) { if(cnt[i]!=cnt2[i])...","categories": ["Algorithm"],
        "tags": ["Implementation"],
        "url": "http://localhost:4000/algorithm/validAnagram/",
        "teaser": null
      },{
        "title": "Add Two Numbers 2",
        "excerpt":"Stack(Deque)를 이용하여 l1과 l2에 있는 원소들을 각각 Deque1, Deque2에 넣어준다 그다음 뒤에서부터 새로운 Deque3에 계속 더한다, 단 올림수가 발생할수 있기 때문에 carry 변수를 하나 둬서 관리를 한다 l1 혹은 l2의 길이가 일치 하지 않을수 있기 때문에, Deque1과 Deque2의 원소를 끝까지 뽑아낸다 단 올림수가 여전히 발생할수 있기 때문에, 올림수에 관한 예외처리가...","categories": ["Algorithm"],
        "tags": ["LinkedList","Stack, Deque","Implementation"],
        "url": "http://localhost:4000/algorithm/addTwoNumbers2/",
        "teaser": null
      },{
        "title": "Coin Change",
        "excerpt":"말 그대로 동전문제이다. 주어진 동전의 종류에 맞춰서 최소 동전을 반환해주면 된다 by Java class Solution { public int coinChange(int[] coins, int amount) { int[] dp = new int[amount+1]; Arrays.fill(dp,-1); int ans = go(amount,dp,coins); if(ans==(int)1e9) return -1; else return ans; } private int go(int k,int[] dp,int[] coins) { if(k&lt;0) return (int)1e9;...","categories": ["Algorithm"],
        "tags": ["Dynamic Programming","KnapSack","Implementation"],
        "url": "http://localhost:4000/algorithm/coinChange/",
        "teaser": null
      },{
        "title": "Fizz Buzz",
        "excerpt":"3과 5로 동시에 나눠지면 FizzBuzz 3로만 나눠지면 Fizz 5로만 나눠지면 Buzz 1,2,3번 이외의 경우면 그냥 숫자를 넣어줌 by Java class Solution { public List&lt;String&gt; fizzBuzz(int n) { List&lt;String&gt; ans = new ArrayList&lt;&gt;(); for(int i=1;i&lt;=n;i++) { if(i%3 ==0 &amp;&amp; i%5==0) { ans.add(\"FizzBuzz\"); } else if(i%3==0) { ans.add(\"Fizz\"); } else if(i%5==0) {...","categories": ["Algorithm"],
        "tags": ["Implementation"],
        "url": "http://localhost:4000/algorithm/fizzBuzz/",
        "teaser": null
      },{
        "title": "House Robber",
        "excerpt":"DP문제이다 인접한 것은 통과해서 인접하지 않은것을 선택해서 최대합을 만드는 중요한 문제이다 그냥 맨처음에는 단순하게 인접한것을 선택해서 틀렸다. 생각해보니 DP 개념을 집어넣어서 풀어야 하는문제였다 by Java class Solution { public int rob(int[] nums) { int[] dp = new int[nums.length+1]; Arrays.fill(dp,-1); return go(0,nums.length,nums,dp); } private int go(int here,int depth,int[] nums,int[] dp) {...","categories": ["Algorithm"],
        "tags": ["Dynamic Programming","Implementation"],
        "url": "http://localhost:4000/algorithm/houseRobber/",
        "teaser": null
      },{
        "title": "Majority Element",
        "excerpt":"제일 많은 원소갯수를 체크해서 그때의 원소를 반환해주면 되는 문제이다 by Java class Solution { public int majorityElement(int[] nums) { Map&lt;Integer,Integer&gt; map = new HashMap&lt;&gt;(); for(int i=0;i&lt;nums.length;i++) { int num= nums[i]; if(map.get(num)==null) { map.put(num,1); } else { int value = map.get(num); value++; map.remove(num); map.put(num,value); } } int ans=0,temp=0; for(Integer e :...","categories": ["Algorithm"],
        "tags": ["Data Structure","Map","Implementation"],
        "url": "http://localhost:4000/algorithm/majorityElement/",
        "teaser": null
      },{
        "title": "Majority Element 2",
        "excerpt":"원소의 갯수가 n/3 + 1개 이상인 경우일때의 모든 원소들을 List에 넣어서 반환하면 되는 문제이다 by Java class Solution { public List&lt;Integer&gt; majorityElement(int[] nums) { int length = nums.length,cnt=0; cnt = length/3+1; Map&lt;Integer,Integer&gt; map = new HashMap&lt;&gt;(); List&lt;Integer&gt; list = new ArrayList&lt;&gt;(); for(int i=0;i&lt;nums.length;i++) { int num = nums[i]; if(map.get(num)==null) {...","categories": ["Algorithm"],
        "tags": ["Data Structure","Map","Implementation"],
        "url": "http://localhost:4000/algorithm/majorityElement2/",
        "teaser": null
      },{
        "title": "Rotate Array",
        "excerpt":"k번만큼 돌려주면 되는문제이다. 구현에 신경을 써서 하도록하자 by Java class Solution { public void rotate(int[] nums, int k) { for(int i=1;i&lt;=k;i++) { change(nums); } } private void change(int[] nums) { int first = nums[0]; nums[0] = nums[nums.length-1]; int temp = first; for(int i=1;i&lt;nums.length;i++) { int temp2 = nums[i]; nums[i] =...","categories": ["Algorithm"],
        "tags": ["Implementation"],
        "url": "http://localhost:4000/algorithm/rotateArray/",
        "teaser": null
      },{
        "title": "Rotate List",
        "excerpt":"결국 k번 rotate를 계속 돌려야 한다. 그러면, k가 크다면 전부 다 돌릴필요없이 k mod list의 길이 횟수만큼만 돌려주면 된다. LinkedList이기때문에, List를 이용하여 순서를 맞춘다음, 새롭게 LinkedList를 만들어서 반환을 하였다 by Java /** * Definition for singly-linked list. * public class ListNode { * int val; * ListNode next; * ListNode(int...","categories": ["Algorithm"],
        "tags": ["LinkedList","Implementation"],
        "url": "http://localhost:4000/algorithm/rotateList/",
        "teaser": null
      },{
        "title": "Backspace String Compare",
        "excerpt":"Deque를 이용하여 올바른 문자열을 형성한다 만들어진 두문자열이 같은지 확인한다 by Java class Solution { public boolean backspaceCompare(String s, String t) { Deque&lt;Character&gt; d1 = new ArrayDeque&lt;&gt;(); Deque&lt;Character&gt; d2 = new ArrayDeque&lt;&gt;(); for(int i=0;i&lt;s.length();i++) { char c= s.charAt(i); if(c=='#') { if(s.isEmpty()) { continue; } d1.pollLast(); } else { d1.add(c); } }...","categories": ["Algorithm"],
        "tags": ["Deque","Implementation"],
        "url": "http://localhost:4000/algorithm/BackspaceStringCompare/",
        "teaser": null
      },{
        "title": "Diameter Of Binary Tree",
        "excerpt":"임의의 두 노드를 선택했을때, 최대의 길이를 리턴하는 문제이다. 이 문제는 재귀와 리턴값을 이용해야 한다는것이 주요한 문제인것같다. 리턴값이 임의의 루트 노드를 기준으로 할때 왼쪽 노드의 높이 or 오른쪽 노드의 높이의 최대 높이를 계속 리턴을 해준다 이렇게 되면, 모든 임의의 루트 노드를 기준으로할때, 왼쪽자식의 높이 + 오른쪽자식의 높이를 알 수 있게 되고,...","categories": ["Algorithm"],
        "tags": ["Tree","Recursion","Implementation"],
        "url": "http://localhost:4000/algorithm/DiameterOfBinaryTree/",
        "teaser": null
      },{
        "title": "Last Stone Weight",
        "excerpt":"단순 구현문제이다 제일 첫번째 최댓값과 두번째 최댓값을 어찌 구할지 생각을 해보다가 정렬을 해서 빠르게 값을 구했다 그다음 같으면 맨 뒤의 두 요소를 지우고, 다르면 차이값을 넣어주고 맨 뒤의 두 요소를 지운다 이 작업을 요소가 1개남을때 까지 진행한다. 만약 요소가 하나도 안남으면 0을 리턴 by Java class Solution { public int...","categories": ["Algorithm"],
        "tags": ["List","Implementation"],
        "url": "http://localhost:4000/algorithm/LastStoneWeight/",
        "teaser": null
      },{
        "title": "Add Strings",
        "excerpt":"큰 수덧셈문제인데, 구현을 목적으로 한 문제인것같다 하하   그냥 BigInteger썼다   by Java   import java.util.*; import java.math.*; class Solution {     public String addStrings(String num1, String num2) {         BigInteger a= new BigInteger(num1,10);         BigInteger b= new BigInteger(num2,10);         a = a.add(b);         return a.toString(10);     } }  ","categories": ["Algorithm"],
        "tags": ["BigInteger","Implementation"],
        "url": "http://localhost:4000/algorithm/addStrings/",
        "teaser": null
      },{
        "title": "Add to Array Form of Integer",
        "excerpt":"구현문제이다. 숫자 K를 뒤에서부터 한자리씩 보면서 동시에 A의 원소의 합을 더해서 List에 삽입을 해준다 그 상태에서 List를 뒤집어서 반환을 해주면된다. by Java class Solution { public List&lt;Integer&gt; addToArrayForm(int[] A, int K) { int idx = A.length; List&lt;Integer&gt; list = new ArrayList&lt;&gt;(); int cur = K; while(--idx&gt;=0 || cur&gt;0) { if(idx&gt;=0)...","categories": ["Algorithm"],
        "tags": ["Implementation"],
        "url": "http://localhost:4000/algorithm/addToArrayFormofInteger/",
        "teaser": null
      },{
        "title": "Min Stack",
        "excerpt":"Method를 구현하는 문제이다. Stack을 구현하는데, getMin()메소드 구현이 어려울수 있다. 한번 Stack(Deque)를 돌면서 제일 작은값을 리턴해주면된다. by Java class MinStack { Deque&lt;Integer&gt; stack; /** initialize your data structure here. */ public MinStack() { stack = new ArrayDeque&lt;&gt;(); } public void push(int x) { stack.add(x); } public void pop() { stack.pollLast(); }...","categories": ["Algorithm"],
        "tags": ["Stack","Implementation"],
        "url": "http://localhost:4000/algorithm/minStack/",
        "teaser": null
      },{
        "title": "Multiply-Strings",
        "excerpt":"String의 입력된 수를 곱해서 반환하는 문제이다. BigInteger를 쓰지말라고는 하는데, 그렇지 않으면, 일일이 구현하는게 올바른 문제인것같다 그러나, BigInteger를 잘 쓸수 있는사람이 구지 안쓰는것도 웃긴것 같다. 실전의 경우 시간이 많이 걸릴수 있기 때문(연습이 안되어있다면) by Java import java.util.*; import java.math.*; class Solution { public String multiply(String num1, String num2) { BigInteger a...","categories": ["Algorithm"],
        "tags": ["BigInteger","Implementation"],
        "url": "http://localhost:4000/algorithm/multiplyStrings/",
        "teaser": null
      },{
        "title": "Plus One",
        "excerpt":"구현 문제이다. 맨끝에 한 숫자를 더한다음에, 새로운 배열의 결과를 반환해줘야 하는문제이다. 올림수가 발생해서, 자릿수가 한자리 증가할수 있기 때문에 주의해야한다 by Java class Solution { public int[] plusOne(int[] digits) { digits[digits.length-1]++; List&lt;Integer&gt; list = new ArrayList&lt;&gt;(); int carry=0; for(int i=digits.length-1;i&gt;=0;i--) { int num = digits[i]; int newnum = num+carry; if(newnum&gt;=10) {...","categories": ["Algorithm"],
        "tags": ["List","Implementation"],
        "url": "http://localhost:4000/algorithm/plusOne/",
        "teaser": null
      },{
        "title": "Counting Elements",
        "excerpt":"무슨말인지 도저히 몰라서 코드를 보고풀었다. 해석하자면, 주어진 배열에서 x라는 수가 존재하고, x+1이라는 수가 동시에 존재한다면 그때 x라는 수가 등장한 횟수를 전부 더해서 반환해주는 문제이다. Set과 Map을 써서 문제를 풀었다. by Java class Solution { public int countElements(int[] arr) { Set&lt;Integer&gt; set = new HashSet&lt;&gt;(); Map&lt;Integer,Integer&gt; map = new HashMap&lt;&gt;(); for(int...","categories": ["Algorithm"],
        "tags": ["Set","Map","Implementation"],
        "url": "http://localhost:4000/algorithm/CountingElements/",
        "teaser": null
      },{
        "title": "Perform String Shifts",
        "excerpt":"0이면 왼쪽으로 옮기고, 1이면 오른쪽으로 옮기는데 몇번 움직여야 하는지 구현을 하는 문제이다. 어차피 String의 길이보다 큰경우는 돌려도 순환을 하기 때문에, mod 연산을 이용한 나머지값만 돌려주면 된다. left의 경우는 cnt의 index부터 시작해서 끝(String.length())까지 본다음, 처음부터 cnt까지 보면서 순차적으로 만들면된다 반면에 right의 경우는 String의 length()에서 cnt를 뺀다음부터 끝(String.length())까지 본다음, 다시 처음부터 String.length()-cnt까지...","categories": ["Algorithm"],
        "tags": ["String","Implementation"],
        "url": "http://localhost:4000/algorithm/PerformStringShifts/",
        "teaser": null
      },{
        "title": "가장 먼 노드",
        "excerpt":"BFS를 이용해서 1번 노드로부터의 모든 노드의 길이를 체크하면서 동시에, 그때 길이의 갯수를 체크해준다 HashMap을 이용하여!!, 그리고 나서 가장 먼 거리였을때, 그때 거리를 반환해주면 된다 by Java import java.util.*; class Solution { int D=0; Map&lt;Integer,Integer&gt; map = new HashMap&lt;&gt;(); public int solution(int n, int[][] edge) { List&lt;Integer&gt;[] graph = new ArrayList[n+1];...","categories": ["Algorithm"],
        "tags": ["BFS","Map","Implementation"],
        "url": "http://localhost:4000/algorithm/%EA%B0%80%EC%9E%A5%EB%A8%BC%EB%85%B8%EB%93%9C/",
        "teaser": null
      },{
        "title": "가장 큰 수",
        "excerpt":"저번에 풀었던 LeetCode의 Largest-Number와 똑같은 문제이다. compare메소드를 적절하게 작성하는것이 아주 중요한 문제이다 by Java import java.util.*; class Solution { public String solution(int[] numbers) { String[] arr = new String[numbers.length]; for(int i=0;i&lt;numbers.length;i++) { arr[i] = String.valueOf(numbers[i]); } Arrays.sort(arr,(a,b)-&gt;compare(a,b)); if(arr[0].equals(\"0\")) return \"0\"; StringBuilder answer = new StringBuilder(); for(int i=0;i&lt;arr.length;i++) { answer.append(arr[i]); }...","categories": ["Algorithm"],
        "tags": ["Sort","Implementation"],
        "url": "http://localhost:4000/algorithm/%EA%B0%80%EC%9E%A5%ED%81%B0%EC%88%98/",
        "teaser": null
      },{
        "title": "등굣길",
        "excerpt":"물 웅덩이인 곳을 먼저 체크를 해준다 시작점(0,0)에서 시작하여, 끝점(m,n)에 도달하면 1을 리턴한다 값이 클 수 있기 때문에 1000000007로 매번 나눠줘야 한다 by Java import java.util.*; class Solution { public int solution(int m, int n, int[][] puddles) { int[][] board = new int[m][n]; for(int i=0;i&lt;puddles.length;i++) { int x = puddles[i][0]; int...","categories": ["Algorithm"],
        "tags": ["Dynamic Programming","Implementation"],
        "url": "http://localhost:4000/algorithm/%EB%93%B1%EA%B5%A3%EA%B8%B8/",
        "teaser": null
      },{
        "title": "완주하지 못한 선수",
        "excerpt":"해쉬문제이다. Map을 이용해서 출전명단에 있는 사람의 수를 체크를 한다음 완료명단에 있는 사람을 찾아, Map에서 해당하는 사람의 수를 하나씩 줄였다. 이때 Map에 value로 1이 남아있는 Key값이 답이 된다 by Java import java.util.*; class Solution { public String solution(String[] participant, String[] completion) { Map&lt;String,Integer&gt; map = new HashMap&lt;&gt;(); for(int i=0;i&lt;participant.length;i++) { String...","categories": ["Algorithm"],
        "tags": ["Set","Map","Implementation"],
        "url": "http://localhost:4000/algorithm/%EC%99%84%EC%A3%BC%ED%95%98%EC%A7%80%EB%AA%BB%ED%95%9C%EC%84%A0%EC%88%98/",
        "teaser": null
      },{
        "title": "위장",
        "excerpt":"BOJ의 패션왕 신해빈과 동일한 문제이다. 각 clothes에 해당하는 갯수를 세준다(ex) headgear 몇개, eyewear 몇개…) 그다음, 각원소의 갯수를 (a,b,c,…)이라 하면 (a+1)(b+1)(c+1)… 를 한후에 1을 빼준값을 리턴하면 된다 by Java import java.util.*; class Solution { public int solution(String[][] clothes) { Map&lt;String,Integer&gt; map = new HashMap&lt;&gt;(); for(int i=0;i&lt;clothes.length;i++) { String s = clothes[i][1];...","categories": ["Algorithm"],
        "tags": ["Set","Map","Implementation"],
        "url": "http://localhost:4000/algorithm/%EC%9C%84%EC%9E%A5/",
        "teaser": null
      },{
        "title": "DATETIME에서 DATE로 형변환",
        "excerpt":"말 그대로 DATETIME타입을 DATE로 어떻게 형 변환을 할수 있을지에 대한 문제이다 DATE_FORMAT(DATE,형식)으로 입력을 해주면 된다고 한다 by SQL -- 코드를 입력하세요 SELECT ANIMAL_ID, NAME, DATE_FORMAT(datetime, '%Y-%m-%d') AS 날짜 from animal_ins // %Y : 4자리 연도, %y : 2자리 연도, %m : 월, %d : 일, %H : 24시간, %h :...","categories": ["SQL"],
        "tags": ["MySQL","DATE_FORMAT"],
        "url": "http://localhost:4000/sql/DATETIME%EC%97%90%EC%84%9CDATE%EB%A1%9C%ED%98%95%EB%B3%80%ED%99%98/",
        "teaser": null
      },{
        "title": "NULL 처리하기",
        "excerpt":"Null인경우는 No name으로 처리를 해줘야 하는데   IFNULL명령어를 통해서 처리를 해준다고 하자   IFNULL을 기억하자   by SQL   -- 코드를 입력하세요 SELECT ANIMAL_TYPE, IFNULL(NAME,\"No name\") As NAME , SEX_UPON_INTAKE from animal_ins order by animal_id  ","categories": ["SQL"],
        "tags": ["MySQL","check null","order by"],
        "url": "http://localhost:4000/sql/NULL%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "고양이와 개는 몇 마리 있을까",
        "excerpt":"group by로 묶은 다음, 그때, 총 몇 마리가 있는지 count를 이용해서 세어주면 된다   by SQL   SELECT animal_type, count(*) from animal_ins group by animal_type  ","categories": ["SQL"],
        "tags": ["MySQL","group by"],
        "url": "http://localhost:4000/sql/%EA%B3%A0%EC%96%91%EC%9D%B4%EC%99%80%EA%B0%9C%EB%8A%94%EB%AA%87%EB%A7%88%EB%A6%AC%EC%9E%88%EC%9D%84%EA%B9%8C/",
        "teaser": null
      },{
        "title": "동명 동물의 수 찾기",
        "excerpt":"group by로 묶은 다음, having 옵션을 이용하여 조건에 맞게 체크를 해준다   이름이 동일한 것이 2개이상인것만 체크를 해줘야한다   그리고 name으로 정렬을 하라고 했으므로 name으로 정렬을 해준다   by SQL   -- 코드를 입력하세요 SELECT NAME, count(*) as count from animal_ins group by name having count(name)&gt;=2 order by name  ","categories": ["SQL"],
        "tags": ["MySQL","group by","having"],
        "url": "http://localhost:4000/sql/%EB%8F%99%EB%AA%85%EB%8F%99%EB%AC%BC%EC%9D%98%EC%88%98%EC%B0%BE%EA%B8%B0/",
        "teaser": null
      },{
        "title": "동물 수 구하기",
        "excerpt":"count명령어를 이용해서 구해주면 된다   by SQL   -- 코드를 입력하세요 SELECT count(*) AS count from animal_ins  ","categories": ["SQL"],
        "tags": ["MySQL","count"],
        "url": "http://localhost:4000/sql/%EB%8F%99%EB%AC%BC%EC%88%98%EA%B5%AC%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "루시와 엘사 찾기",
        "excerpt":"by SQL -- 코드를 입력하세요 SELECT ANIMAL_ID, NAME, SEX_UPON_INTAKE from animal_ins where name like 'Lucy' or name like 'Ella' or name like 'Pickle' or name like 'Rogan' or name like 'Sabrina' or name like 'Mitty' order by animal_id 혹은 in 옵션을 이용하여 나열을 할수도 있다 -- 코드를 입력하세요 SELECT ANIMAL_ID,...","categories": ["SQL"],
        "tags": ["MySQL","like","order by"],
        "url": "http://localhost:4000/sql/%EB%A3%A8%EC%8B%9C%EC%99%80%EC%97%98%EC%82%AC%EC%B0%BE%EA%B8%B0/",
        "teaser": null
      },{
        "title": "멀쩡한 사각형",
        "excerpt":"GCD문제이겠거니 눈치는 챘는데, 정확한 식 도출에는 실패하였다. 설명은 여기가 아주 잘되어있다. 수학 문제에 상당히 가까운 문제이다 https://leedakyeong.tistory.com/entry/프로그래머스-멀쩡한-사각형-in-python by Java class Solution { public long solution(int w,int h) { long answer = (long)w*h; int res = gcd(w,h); return answer - res*((w/res)+(h/res)-1); } private int gcd(int a,int b) { if(a%b==0) return b;...","categories": ["Algorithm"],
        "tags": ["Math","Implementation"],
        "url": "http://localhost:4000/algorithm/%EB%A9%80%EC%A9%A1%ED%95%9C%EC%82%AC%EA%B0%81%ED%98%95/",
        "teaser": null
      },{
        "title": "보행자 천국",
        "excerpt":"Dynamic Programming 문제이다. 카카오 코드 페스티벌 문제이다. DP가 약해서 그런것도 있었지만, 하나의 2차원 배열에 풀려고 했던것이 시작부터 난관에 빠진느낌이었다. 하나의 2차원배열에 풀려다 보니, 중복된 경로가 체크되어 정확한 답이 도출이 되지않았다. 그래서 풀이를 보니, 2개의 2차원 배열이 필요했다. 그다음 입력된 cityMap이 0,1,2에 따라 값이 달랐는데 0의 경우는 어디든지 이동이 가능하므로, 이전방향에서...","categories": ["Algorithm"],
        "tags": ["Dynamic Programming","Implementation"],
        "url": "http://localhost:4000/algorithm/%EB%B3%B4%ED%96%89%EC%9E%90%EC%B2%9C%EA%B5%AD/",
        "teaser": null
      },{
        "title": "보호소에서 중성화한 동물",
        "excerpt":"like 옵션을 줘서 문제를 풀어야 한다. 똑같이 left join 명령을 해주면 된다. by SQL -- 코드를 입력하세요 SELECT a.animal_id as ANIMAL_ID, a.animal_type AS ANIMAL_TYPE , a.name as NAME from animal_ins a left join animal_outs b on a.animal_id = b.animal_id where a.sex_upon_intake like 'Intact%' and (b.sex_upon_outcome like 'Spayed%' or b.sex_upon_outcome like...","categories": ["SQL"],
        "tags": ["MySQL","JOIN","like"],
        "url": "http://localhost:4000/sql/%EB%B3%B4%ED%98%B8%EC%86%8C%EC%97%90%EC%84%9C%EC%A4%91%EC%84%B1%ED%99%94%ED%95%9C%EB%8F%99%EB%AC%BC/",
        "teaser": null
      },{
        "title": "없어진 기록 찾기",
        "excerpt":"JOIN류의 기본문제인것 같다. JOIN을 아예 까먹어서 한번 보고 풀었다. animal_ins 테이블과 animal_outs테이블을 합치는데, animal_outs의 animal_id가 없는 동시에, animal_ins의 animal_id가 있어야 하므로, left join명령어를 이용하고, where옵션을 이용해 체크를 해줬다. 마지막으로, animal_id에 의해 정렬이 되어야 하므로 아래와 같이 썼다. by SQL -- 코드를 입력하세요 SELECT A.ANIMAL_ID, A.NAME from animal_outs A left join...","categories": ["SQL"],
        "tags": ["MySQL","JOIN","order by"],
        "url": "http://localhost:4000/sql/%EC%97%86%EC%96%B4%EC%A7%84%EA%B8%B0%EB%A1%9D%EC%B0%BE%EA%B8%B0/",
        "teaser": null
      },{
        "title": "오랜기간 보호한 동물(2)",
        "excerpt":"가장 오랜 기간 보호된 동물의 차이를 구해야 하는데, 시간단위차이를 빼주는 명령어가 있다고 한다   datediff라는 명령어이다. datediff(시간a,시간b)라고 쓴다. 시간a가 시간b보다 반드시 빠르지않아도된다.   시간 순서는 상관없음!!   by SQL   -- 코드를 입력하세요 SELECT a.ANIMAL_ID, a.NAME from animal_ins a, animal_outs b where a.animal_id = b.animal_id order by datediff(a.datetime,b.datetime) limit 2  ","categories": ["SQL"],
        "tags": ["MySQL","datediff"],
        "url": "http://localhost:4000/sql/%EC%98%A4%EB%9E%9C%EA%B8%B0%EA%B0%84%EB%B3%B4%ED%98%B8%ED%95%9C%EB%8F%99%EB%AC%BC(2)/",
        "teaser": null
      },{
        "title": "오랜 기간 보호한 동물",
        "excerpt":"a 테이블과 b 테이블을 합쳐줘야 한다. 그다음 입양을 가지 못한 동물들을 선택해야 하기 때문에, b테이블에 animal_id가 없는 옵션을 넣어줘야 한다. 이때 가장 오래 머문 동물 3마리만 출력을 하는것이므로, order by옵션을 주되 limit를 이용하여 갯수를 제한해주면 된다. by SQL -- 코드를 입력하세요 SELECT a.NAME as NAME , a.DATETIME from animal_ins a...","categories": ["SQL"],
        "tags": ["MySQL","JOIN","datetime","limit"],
        "url": "http://localhost:4000/sql/%EC%98%A4%EB%9E%9C%EA%B8%B0%EA%B0%84%EB%B3%B4%ED%98%B8%ED%95%9C%EB%8F%99%EB%AC%BC/",
        "teaser": null
      },{
        "title": "이름에 el 들어가는 동물찾기",
        "excerpt":"like옵션을 줘서 문제를 풀수 있다. %는 와일드카드 *과 동일하다는 것을 기억하자   by SQL   -- 코드를 입력하세요 SELECT ANIMAL_ID, NAME from animal_ins where name like '%el%' and animal_type like 'Dog' order by name  ","categories": ["SQL"],
        "tags": ["MySQL","like"],
        "url": "http://localhost:4000/sql/%EC%9D%B4%EB%A6%84%EC%97%90el%EB%93%A4%EC%96%B4%EA%B0%80%EB%8A%94%EB%8F%99%EB%AC%BC%EC%B0%BE%EA%B8%B0/",
        "teaser": null
      },{
        "title": "이름이 없는 동물의 아이디",
        "excerpt":"is null 옵션을 이용하여 문제를 출력해주면 된다   by SQL   -- 코드를 입력하세요 SELECT animal_id as ANIMAL_ID from animal_ins where name is null  ","categories": ["SQL"],
        "tags": ["MySQL","check null"],
        "url": "http://localhost:4000/sql/%EC%9D%B4%EB%A6%84%EC%9D%B4%EC%97%86%EB%8A%94%EB%8F%99%EB%AC%BC%EC%9D%98%EC%95%84%EC%9D%B4%EB%94%94/",
        "teaser": null
      },{
        "title": "이름이 있는 동물의 아이디",
        "excerpt":"is not null옵션을 이용하고, 오름차순을 해줘야 하기 때문에 오름차순을 해주는 것이 중요하다   by SQL   -- 코드를 입력하세요 SELECT ANIMAL_ID from animal_ins where name is not null order by animal_id  ","categories": ["SQL"],
        "tags": ["MySQL","check null"],
        "url": "http://localhost:4000/sql/%EC%9D%B4%EB%A6%84%EC%9D%B4%EC%9E%88%EB%8A%94%EB%8F%99%EB%AC%BC%EC%9D%98%EC%95%84%EC%9D%B4%EB%94%94/",
        "teaser": null
      },{
        "title": "입양 시각 구하기(1)",
        "excerpt":"이번에는 시간을 기준으로 구해보는 것이다.   문제를 보면 1시간 단위로 간격이 나뉘어지는 것을 알수 있다. 그래서 hour메소드를 써줘야한다   그안에는 DATETIME관련 Column을 넣어주면 되는것 같다   by SQL   -- 코드를 입력하세요 SELECT hour(datetime) as HOUR, count(*) as COUNT from animal_outs where hour(datetime) &gt;= 9 and hour(datetime)&lt;=19 group by hour(datetime) order by hour(datetime)  ","categories": ["SQL"],
        "tags": ["MySQL","group by","order by","hour"],
        "url": "http://localhost:4000/sql/%EC%9E%85%EC%96%91%EC%8B%9C%EA%B0%81%EA%B5%AC%ED%95%98%EA%B8%B0(1)/",
        "teaser": null
      },{
        "title": "입양 시각 구하기(2)",
        "excerpt":"이번 문제는 좀 신세계였다. 정말 프로그래밍 하는 듯한 기분이 들었다. 그냥 입양 시각 구하기(1)의 경우처럼 할때는, 0~6시, 20~23시까지 0이어서 count가 되지않는다 그러므로, 변수를 하나둬서 증가를 시켜줘야 한다. 변수는 set명령어를 이용하고, @를 이용하여 선언한다, 마지막에는 ;이 들어가줘야 한다 그다음 count명령어를 이용하기 보다, select문을 이용하여 쿼리를 다시 계산을 해준다 왜냐하면 0개인 경우의...","categories": ["SQL"],
        "tags": ["MySQL","hour","set"],
        "url": "http://localhost:4000/sql/%EC%9E%85%EC%96%91%EC%8B%9C%EA%B0%81%EA%B5%AC%ED%95%98%EA%B8%B0(2)/",
        "teaser": null
      },{
        "title": "있었는데요 없었습니다",
        "excerpt":"시간을 비교를 해줘야 하는데, 더 큰경우가 시간이 더빠른경우이다.   먼저 Join을 하는데, animal_id가 일치하는 것끼리 묶어준다. 그다음 시간을 비교한다   그리고 시간이 빠른순으로 정렬을 해준다   by SQL   -- 코드를 입력하세요 SELECT animal_ins.animal_id as ANIMAL_ID, animal_ins.name as NAME from animal_ins left join animal_outs on animal_ins.animal_id = animal_outs.animal_id where animal_ins.datetime&gt;animal_outs.datetime order by animal_ins.datetime  ","categories": ["SQL"],
        "tags": ["MySQL","JOIN","datetime"],
        "url": "http://localhost:4000/sql/%EC%9E%88%EC%97%88%EB%8A%94%EB%8D%B0%EC%9A%94%EC%97%86%EC%97%88%EC%8A%B5%EB%8B%88%EB%8B%A4/",
        "teaser": null
      },{
        "title": "중복 제거하기",
        "excerpt":"count명령어는 중복제거를 해줄수는 없다. 그래서 distinct 명령어를 이용해서 체크를 해줘야 한다   by SQL   -- 코드를 입력하세요 SELECT count(distinct name) from animal_ins;  ","categories": ["SQL"],
        "tags": ["MySQL","count","distinct"],
        "url": "http://localhost:4000/sql/%EC%A4%91%EB%B3%B5%EC%A0%9C%EA%B1%B0%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "중성화 여부 파악하기",
        "excerpt":"if else를 MYSQL에서는 어떻게 표현해야 할까 case를 시작으로 WHEN … THEN이 한 묶음이 된다 by SQL -- 코드를 입력하세요 SELECT ANIMAL_ID, NAME, case when sex_upon_intake like '%Neutered%' or sex_upon_intake like '%Spayed%' then \"O\" else \"X\" end AS 중성화 from animal_ins CASE관련 문법 CASE WHEN 조건 THEN '반환 값' WHEN 조건...","categories": ["SQL"],
        "tags": ["MySQL","case ... when ... then"],
        "url": "http://localhost:4000/sql/%EC%A4%91%EC%84%B1%ED%99%94%EC%97%AC%EB%B6%80%ED%8C%8C%EC%95%85%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "크레인 인형 뽑기",
        "excerpt":"시뮬레이션 문제이다. 스택을 이용해서 문제를 풀면된다 by Java import java.util.*; class Solution { public int solution(int[][] board, int[] moves) { int score=0; Deque&lt;Integer&gt; stack = new ArrayDeque&lt;&gt;(); for(int j=0;j&lt;moves.length;j++) { int sy = moves[j]; sy--; int pick = -1; for(int i=0;i&lt;board.length;i++) { if(board[i][sy] !=0) { pick = board[i][sy]; board[i][sy]=0; break;...","categories": ["Algorithm"],
        "tags": ["Simulation","Implementation"],
        "url": "http://localhost:4000/algorithm/%ED%81%AC%EB%A0%88%EC%9D%B8%EC%9D%B8%ED%98%95%EB%BD%91%EA%B8%B0/",
        "teaser": null
      },{
        "title": "Search in a Binary Tree",
        "excerpt":"목표로 하는 target값과 일치할때, 그때의 TreeNode를 리턴해주면 된다. TreeNode를 리턴해줘야하기때문에, Recursion을 돌릴때 TreeNode도 추가적으로 같이 Recursion을 돌려줘야 한다. by Java /** * Definition for a binary tree node. * public class TreeNode { * int val; * TreeNode left; * TreeNode right; * TreeNode(int x) { val = x; }...","categories": ["Algorithm"],
        "tags": ["Tree","Recursion","Implementation"],
        "url": "http://localhost:4000/algorithm/SearchinaBinaryTree/",
        "teaser": null
      },{
        "title": "Construct Binary Search Tree from Preorder Traversal",
        "excerpt":"preorder의 기본적인 순서에 집중해야 하는문제이다. 결국 preorder는 현재위치, 왼쪽,오른쪽 순서로 확인을 하기때문에 현재위치가 만약 null이면 새롭게 트리노드를 만들어 반환하고 그렇지않다면, 왼쪽 혹은 오른쪽으로 순회를 해주면된다. 현재노드의 val값과 target값의 비교를 통해서, 왼쪽으로 갈지 오른쪽으로 갈지 정해주면된다. by Java /** * Definition for a binary tree node. * public class TreeNode {...","categories": ["Algorithm"],
        "tags": ["Tree","Recursion","Implementation"],
        "url": "http://localhost:4000/algorithm/constructBinaryTreeFromInorder/",
        "teaser": null
      },{
        "title": "Construct Binary Tree From Preorder and Inorder Traversal",
        "excerpt":"postorder가 아닌 이번에는 preorder의 순서에 집중을 하면된다. 현재위치,왼쪽,오른쪽 순서로 탐방하기 때문에 이 경우를 그대로 적용을 해주면된다. 왼쪽부터 만들어줘야 하기때문에, postorder and inorder와는 반대로 순회를 하면된다 Construct Binary Tree From Inorder and Postorder Traversal문제를 반대로 적용을 해주면된다. 자세한 풀이는 위의 코드에 있다. by Java /** * Definition for a binary tree...","categories": ["Algorithm"],
        "tags": ["Tree","Recursion","Implementation"],
        "url": "http://localhost:4000/algorithm/constructBinaryTreeFromPreorderInorder/",
        "teaser": null
      },{
        "title": "Construct Binary Tree From Inorder and Postorder Traversal",
        "excerpt":"이 문제는 postorder의 순회방법을 거꾸로 탐색해서 만드는 문제이다. postorder는 왼쪽,오른쪽,현재위치를 순서로 탐색한다. 이걸 반대로 하면, 현재위치,오른쪽,왼쪽 순서로 진행을 할수 있게된다. 반대로 하기때문에, postorder값을 이용해 반대로 값을 넣어주면서, 오른쪽자식부터 먼저 Tree를 만들면서 진행을 하면된다. 그리고 inorder를 통해서 현재 index의 위치를 알아야 한다 순서를 보면, 맨처음에 루트노드를 먼저 만들게 되는데, postorder의 맨마지막...","categories": ["Algorithm"],
        "tags": ["Tree","Recursion","Implementation"],
        "url": "http://localhost:4000/algorithm/constructBinaryTreefromInorderandPostorder/",
        "teaser": null
      },{
        "title": "Minimum Path Sum",
        "excerpt":"(0,0)에서 시작해서 (n-1,m-1)에 도달하는데 있어서 최소 가중치를 만들어서 도달하는 문제이다. 아마 BFS로 문제를 풀어도 되지만, DP로 한번 접근을 해보았다. by Java class Solution { public int minPathSum(int[][] grid) { int n = grid.length; int m = grid[0].length; int[][] dp = new int[n][m]; for(int i=0;i&lt;n;i++) { for(int j=0;j&lt;m;j++){ dp[i][j]=-1; } }...","categories": ["Algorithm"],
        "tags": ["Dynamic Programming","Implementation"],
        "url": "http://localhost:4000/algorithm/minimumPathSum/",
        "teaser": null
      },{
        "title": "Java Lambda 관련 정리 from 이것이 자바다(책)",
        "excerpt":"Java Lambda Lambda : 익명 함수(anonymous function)을 생성하기 위한 식으로, 객체 지향 언어보다는 함수 지향 언어에 가까움 그런데 왜 자바에서 이런 람다식을 수용한 것인가? 자바 코드가 매우 간결해짐 컬렉션의 요소를 필터링하거나 매핑해서 결과 집계를 쉽게 가능하게 함 // 람다식 -&gt; 매개 변수를 가진 코드 블록 -&gt; 익명 구현 객체 Runnable...","categories": ["language"],
        "tags": ["Java","language","Lambda"],
        "url": "http://localhost:4000/language/%EC%9E%90%EB%B0%94%EB%9E%8C%EB%8B%A4/",
        "teaser": null
      },{
        "title": "Java Thread 관련 정리 from 이것이 자바다(책)",
        "excerpt":"Java Thread 관련 정리 Thread 스레드의 동시성(Concurrency)과 병렬성(Parallelism)의 단어 차이 동시성(Concurrency) : 하나의 코어에서 멀티 스레드가 번갈아 가면서 실행하는 것을 의미 병렬성(Parallelism) : 멀티 작업을 위해, 멀티 코어에서 개별 스레드를 동시에 실행하는 것을 의미 즉, 싱글 코어 CPU를 이용한 멀티 스레드 작업은 병렬적으로 실행되는 것처럼 보이지만, 실제로는 번갈아 가면서 실행하는...","categories": ["language"],
        "tags": ["Java","language","Thread"],
        "url": "http://localhost:4000/language/%EC%9E%90%EB%B0%94%EC%8A%A4%EB%A0%88%EB%93%9C/",
        "teaser": null
      },{
        "title": "Java Generic 관련 정리 from 이것이 자바다(책)",
        "excerpt":"Java Generic 관련 정리 왜 제네릭을 사용해야 하는가? 컴파일 시 강한 타입 체크를 할 수 있다. 실행 시 타입 에러가 나는 것보다는 컴파일 시에 미리 타입을 강하게 체크를 해서 에러를 사전에 방지하기 위함 타입 변환(casting)을 제거한다. 비제네릭 코드는 불필요한 타입 변환을 하기 때문에, 프로그램 성능에 악영향을 미친다. 요소를 찾아 올때,...","categories": ["language"],
        "tags": ["Java","language","Generic"],
        "url": "http://localhost:4000/language/%EC%9E%90%EB%B0%94%EC%A0%9C%EB%84%A4%EB%A6%AD/",
        "teaser": null
      },{
        "title": "오픈 채팅방",
        "excerpt":"이 문제는 Enter나 Change를 통해 계속 닉네임이 바뀔수 있다는 것이다. 최종적인 닉네임으로 값을 출력해야 하므로, uid값을 키로 가지고, nickname을 value로 가지는 HashMap을 사용하였다. 최종적으로 uid가 어떤 닉네임인지를 구분한다(Enter,Change), 동시에 Change의 경우는 정답에 출력할필요가 없기때문에, Change의 경우는 전체 출력해야할 횟수에 더하지 않는다 그다음 루프를 돌면서, Enter와 Leave를 통해 정답을 채운다 By...","categories": ["algorithm"],
        "tags": ["Java","String","Parsing","Map"],
        "url": "http://localhost:4000/algorithm/%EC%98%A4%ED%94%88%EC%B1%84%ED%8C%85%EB%B0%A9/",
        "teaser": null
      },{
        "title": "Java Stream 관련 정리 from 이것이 자바다(책)",
        "excerpt":"Stream Stream : 자바 8부터 추가된 컬렉션(배열 포함)의 저장 요소를 하나씩 참조해서 람다식으로 처리할 수 있도록 해주는 반복자 내부 반복자를 사용하므로 병렬 처리가 쉽다 내부 반복자들은 멀티 코어 CPU를 활용하기 위해 요소들을 분배시켜 병렬 작업을 할 수있게 도와준다는 특징이 있다. 중간 처리와 최종 처리 작업을 수행한다 위의 그림처럼 중간처리에서 학생의...","categories": ["language"],
        "tags": ["Java","Stream","Parallel"],
        "url": "http://localhost:4000/language/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%8A%B8%EB%A6%BC/",
        "teaser": null
      },{
        "title": "튜플",
        "excerpt":"이 문제는 Parsing을 어떻게 할것인가가 가장 큰 문제였던거 같다. 그래서 다음과 같이 3가지 방법을 가지고 해결을 했다 parsing을 어떻게 할지가 가장 큰 문제 파싱을 하고 나면 길이순으로 오름차순 정렬 그다음 list의 contains메소드를 써서 중복적으로 포함이 되었는지 안되었는지를 체크를 해준다 By Java import java.util.*; class Solution { public int[] solution(String s)...","categories": ["algorithm"],
        "tags": ["Java","String","Parsing"],
        "url": "http://localhost:4000/algorithm/%ED%8A%9C%ED%94%8C/",
        "teaser": null
      },{
        "title": "프린터",
        "excerpt":"현재 있는 위치의 인덱스가 계속 바뀔수 있기 때문에, 우선순위와 인덱스를 동시에 가질수있는 Class를 만들어 문제를 풀었다. Class를 Deque의 타입 파라미터로 지정하고, 문제의 사이즈가 크지 않기 때문에,시뮬레이션을 구현을 했다. 현재 위치의 우선순위와 그 뒤의 우선순위들을 전부 체크를 해주고 만약 우선순위가 더큰것이 존재하면 맨뒤에 push를 하고, 그렇지 않다면 맨앞에서 하나씩 빼준다 1과...","categories": ["algorithm"],
        "tags": ["Java","Queue","Data Structure"],
        "url": "http://localhost:4000/algorithm/%ED%94%84%EB%A6%B0%ED%84%B0/",
        "teaser": null
      }]
