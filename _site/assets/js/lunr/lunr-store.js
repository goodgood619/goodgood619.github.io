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
      }]
