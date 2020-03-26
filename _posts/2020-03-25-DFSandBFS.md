---
title : "DFS와 BFS"
excerpt : "DFS & BFS Code (C++, Java) "

categories:
    - Algorithm

tags:
        - DFS
        - BFS
        - Algorithm
last_modified_at: 2020-03-25
---

동작 방식은 저의 예전 블로그의 글을 참고해보시면 좋을거같습니다!!  
**<https://blog.naver.com/gktgnjftm/221458488876>**  
(공을 좀 많이 들여놔서 좀 아깝더라고요 ㅎㅎ)  
(단 Java는 없고 , C++로만 설명이 되어있습니다!!)  
아래는 C++와 Java로 이루어져 있습니다!
# by C++(DFS)
```cpp
void dfs(int here,vector<vector<int>>&graph, int *visited,vector<int>& temp){
    visited[here] = 1;
    printf("%d ",here);
    for(int i=0 ; i<graph[here].size();i++) {
        int next = graph[here][i];
        if(!visited[next]) {
            dfs(next,graph,visited,temp);
        }
    }
}
```
# by Java(DFS)
bw의 경우는 BufferedWriter를 사용했다  
```java
private static void dfs(int here, ArrayList<Integer>[] graph, boolean[] visited) throws IOException {
        visited[here] = true;
        bw.write(String.valueOf(here)+" ");
        bw.flush();
        for(int i=0;i<graph[here].size();i++) {
            int next = graph[here].get(i);
            if(!visited[next]) dfs(next,graph,visited);
        }
    }
```

# by C++(BFS)
**vector** 자료구조와, **queue** 자료구조를 사용
```c++
void bfs(int here,vector<vector<int>> &graph, int *visited,vector<int> &temp){
    queue<int> q;
    q.push(here);
    visited[here] = 1;
    while(!q.empty()) {
        int here = q.front();
        printf("%d ",here);
        q.pop();
        for(int i=0; i<graph[here].size(); i++){
            int next = graph[here][i];
            if(!visited[next]){
                visited[next] = 1;
                q.push(next);
            }
        }
    }
}
```

# by Java(BFS)
성능의 향상을 위해(출력시 속도 향상) **BufferedWriter** 사용, ArrayDeque 클래스(Queue 관련) 사용 
그리고 ArrayList 클래스 사용, 그러나 **List** 와 **Deque** 인터페이스를 사용하자, 이유는 더 일반적으로 데이터를 보내거나 받기 위함임  
```java
private static void bfs(int here,ArrayList<Integer>[] graph,boolean[] visited) throws IOException {
        ArrayDeque<Integer> q = new ArrayDeque<>();
        q.add(here);
        visited[here] = true;
        while(!q.isEmpty()) {
            int Here = q.peekFirst();
            bw.write(String.valueOf(Here)+" ");
            bw.flush();
            q.pop();
            for(int i=0;i<graph[Here].size();i++){
                int next = graph[Here].get(i);
                if(!visited[next]) {
                    visited[next] = true;
                    q.add(next);
                }
            }
        }
     }
```
자바의 전체 코드  
문제 : [DFS와 BFS](https://www.acmicpc.net/problem/1260)

```java
import java.io.*;
import java.lang.reflect.Array;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collections;

public class Main {
    static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] input = br.readLine().split(" ");
        int n = Integer.parseInt(input[0]);
        int m = Integer.parseInt(input[1]);
        int st = Integer.parseInt(input[2]);
        ArrayList<Integer>[] graph = new ArrayList[n+1];
        boolean visited[] = new boolean[n+1];
        for(int i=1;i<=n;i++) {
            graph[i] = new ArrayList<>();
        }
        for(int i=0;i<m;i++) {
            String[] s = br.readLine().split(" ");
            int here = Integer.parseInt(s[0]);
            int next = Integer.parseInt(s[1]);
            graph[here].add(next);
            graph[next].add(here);
        }
        for(int i=1;i<=n;i++) {
            Collections.sort(graph[i]);
        }
        dfs(st,graph,visited);
        System.out.println();
        visited = new boolean[n+1];
        bfs(st,graph,visited);
        bw.close();
    }
    private static void dfs(int here, ArrayList<Integer>[] graph, boolean[] visited) throws IOException {
        visited[here] = true;
        bw.write(String.valueOf(here)+" ");
        bw.flush();
        for(int i=0;i<graph[here].size();i++) {
            int next = graph[here].get(i);
            if(!visited[next]) dfs(next,graph,visited);
        }
    }
    private static void bfs(int here,ArrayList<Integer>[] graph,boolean[] visited) throws IOException {
        ArrayDeque<Integer> q = new ArrayDeque<>();
        q.add(here);
        visited[here] = true;
        while(!q.isEmpty()) {
            int Here = q.peekFirst();
            bw.write(String.valueOf(Here)+" ");
            bw.flush();
            q.pop();
            for(int i=0;i<graph[Here].size();i++){
                int next = graph[Here].get(i);
                if(!visited[next]) {
                    visited[next] = true;
                    q.add(next);
                }
            }
        }
     }
}
```

궁금하신 사항은 댓글을 남겨주시면 감사하겠습니다^^  
잘못 된점 이 있다면 댓글 남겨주시면 감사드리겠습니다
