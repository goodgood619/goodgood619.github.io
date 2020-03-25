var store = [{
        "title": "DFS",
        "excerpt":"by C++ void dfs(int here,vector&lt;vector&lt;int&gt;&gt;&amp;graph, int *visited,vector&lt;int&gt;&amp; temp){ visited[here] = 1; printf(\"%d \",here); for(int i=0 ; i&lt;graph[here].size();i++) { int next = graph[here][i]; if(!visited[next]) { dfs(next,graph,visited,temp); } } } by Java private static void dfs(int here, ArrayList&lt;Integer&gt;[] graph, boolean[] visited) throws IOException { visited[here] = true; bw.write(String.valueOf(here)+\" \"); bw.flush(); for(int i=0;i&lt;graph[here].size();i++)...","categories": ["Algorithm"],
        "tags": ["DFS","Algorithm"],
        "url": "http://localhost:4000/algorithm/DFS/",
        "teaser": null
      },{
        "title": "github.io 블로그 시작하기",
        "excerpt":"GitHub Blog 서비스인 github.io 블로그 시작하기로 했다. GitHub Blog 서비스의 이름은 Pages이다. 봄 여름 가을 겨울 This is a blockqute. This is a H1 This is a H2 이것은 cancelline int main() { int y = SOME_MACRO_REFERENCE; int x = 5 + 6; cout &lt;&lt; \"Hello World! \" &lt;&lt; x...","categories": ["Blog"],
        "tags": ["Blog"],
        "url": "http://localhost:4000/blog/test/",
        "teaser": null
      }]
