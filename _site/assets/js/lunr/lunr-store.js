var store = [{
        "title": "DFS와 BFS",
        "excerpt":"동작 방식은 저의 예전 블로그의 글을 참고해보시면 좋을거같습니다!! https://blog.naver.com/gktgnjftm/221458488876 (공을 좀 많이 들여놔서 좀 아깝더라고요 ㅎㅎ) (단 Java는 없고 , C++로만 설명이 되어있습니다!!) by C++(DFS) void dfs(int here,vector&lt;vector&lt;int&gt;&gt;&amp;graph, int *visited,vector&lt;int&gt;&amp; temp){ visited[here] = 1; printf(\"%d \",here); for(int i=0 ; i&lt;graph[here].size();i++) { int next = graph[here][i]; if(!visited[next]) { dfs(next,graph,visited,temp); } }...","categories": ["Algorithm"],
        "tags": ["DFS","BFS","Algorithm"],
        "url": "http://localhost:4000/algorithm/DFSandBFS/",
        "teaser": null
      },{
        "title": "github.io 블로그 시작하기",
        "excerpt":"GitHub Blog 서비스인 github.io 블로그 시작하기로 했다. GitHub Blog 서비스의 이름은 Pages이다. 봄 여름 가을 겨울 This is a blockqute. This is a H1 This is a H2 이것은 cancelline int main() { int y = SOME_MACRO_REFERENCE; int x = 5 + 6; cout &lt;&lt; \"Hello World! \" &lt;&lt; x...","categories": ["Blog"],
        "tags": ["Blog"],
        "url": "http://localhost:4000/blog/test/",
        "teaser": null
      }]
