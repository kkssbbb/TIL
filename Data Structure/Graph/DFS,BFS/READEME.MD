
## DFS_인접행렬

``` java
import java.util.Scanner;

public class Main {


    /*
     *  DFS 인접 행렬 기본 코드
     * 2 차원 배열 기반
     * 재귀호출로 종단지점까지 방문하게끔 처리
     *
     * */

    static  int edge; //간선의 수
    static int vertex; //정점의 수
    static int[][] map; // 정점간의 연결의 정보를 담는 객체
    static  boolean[] visit; //정점을 방문 했는지 체크하기 위한 객체
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        vertex = sc.nextByte();
        edge = sc.nextInt();
        map = new int[vertex +1][vertex+1];
        visit = new boolean[vertex + 1];

        for (int i = 0; i < edge; i++) {
            int start = sc.nextInt();
            int next = sc.nextInt();

            map[start][next]=1;
            map[next][start]=1;
        }

        dfs(1);
    }

    public static void dfs(int start) {
        visit[start] = true;
        System.out.println(start + " ");

        for (int i = 1; i < vertex + 1; i++) {
            if (map[start][i] == 1 && visit[i] == false) {
                dfs(i);
            }
        }
    }


}
```

<br>
<br>

## DFS_인접리스트

``` java


import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;
/*
*
dfs 인접리스트 기본 구현
인접행렬 기반코드
* 재귀호출로 종단지점 까지 방문하게끔 처리
arrayList: 정점간의 관계를 담는 객체(Arraylist에 붙인 것이 포인트)
dfsList: 방문한 순서대로 저장하기 위한 리스트 객체
visit: 정점을 방문햇는지 체크하기 위한 객체
*
* */
public class DFS_List {

    //인접리스트로 정점간 관계 저장
    ArrayList<Integer>[] arrayList;
    boolean[] visited; //방문한 순서대로 저장하기 위한 리스트 객체
    ArrayList<Integer> dfsList = new ArrayList<>(); //정점을 방문했는지 체크하기 위한 객체

    public DFS_List() {
        Scanner sc = new Scanner(System.in);

        int vertex = sc.nextInt(); //정점의 수
        int line = sc.nextInt(); //간선의 수
        int startVertex = sc.nextInt(); //시작 정점

        
        arrayList = new ArrayList[vertex + 1];
        
        
        for (int i = 0; i < arrayList.length; i++) {
            arrayList[i] = new ArrayList<>();
        }

        visited = new boolean[vertex + 1];

        for (int i = 0; i < line; i++) {
            int x = sc.nextInt();
            int y = sc.nextInt();

            arrayList[x].add(y);
            arrayList[y].add(x);
        }
    

        for (int i = 1; i < vertex + 1; i++) {
            Collections.sort(arrayList[i]);
        }

        dfs(startVertex);
        for (Integer integer : dfsList) {
            System.out.println(integer + " ");
        }
        System.out.println();
    }

    public void dfs(int x) {
        if (visited[x]) {
            return;
        }

        visited[x] = true;
        dfsList.add(x);
        for (int y : arrayList[x]) {
            if (!visited[y]) {
                dfs(y);
            }
        }
    }

    public static void main(String[] args) {
        new DFS_List();
    }

}
```
## BFS_인접행렬
```java
import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

/**
 * BFS Code
 * thinkground.studio
 * YouTube : Around Hub Studio
 * @author Flature
 */
public class BFS_Matrix {

    static int vertex;
    static int edge;
    static int[][] map;
    static boolean[] visited;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        vertex = sc.nextInt();
        edge = sc.nextInt();
        map = new int[vertex + 1][vertex + 1];
        visited = new boolean[vertex + 1];

        for (int i = 1; i <= edge; i++) {
            int start = sc.nextInt();
            int end = sc.nextInt();

            map[start][end] = 1;
            map[end][start] = 1; //단방향일때는 지움
        }
        BFS(1, vertex);
    }

    static void BFS(int start, int end) {
        Queue<Node> queue = new LinkedList<>();
        queue.add(new Node(start, end));
        visited[1] = true;

        while (!queue.isEmpty()) {

            Node node = queue.poll();
            visited[node.x] = true;
            System.out.println(node.x);
            for (int i = 1; i < map.length; i++) {
                if (map[node.x][i] == 1 && !visited[i]) {
                    queue.add(new Node(i, end));
                    visited[i] = true;
                }
            }
        }
    }
}

class Node {
    int x;
    int y;

    Node(int x, int y) {
        this.x = x;
        this.y = y;
    }
}

```
## BFS_인접리스트
```java
import java.util.*;

/**
 * List로 구현한 BFS thinkground.studio YouTube : Around Hub Studio
 *
 * @author Flature
 */
public class BFS_adjacency_list {

    static ArrayList<Integer>[] arrayList;
    static boolean[] visited;
    static ArrayList<Integer> bfsList = new ArrayList<>();

    public static void bfs(int x) {
        Queue<Integer> queue = new LinkedList<>();
        queue.add(x);
        visited[x] = true;

        while (!queue.isEmpty()) {
            int y = queue.poll();
            System.out.print(y + " ");
            for (int c : arrayList[y]) {
                if (!visited[c]) {
                    visited[c] = true;
                    queue.add(c);
                }
            }
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int vertex = sc.nextInt();
        int line = sc.nextInt();
        int startVertex = sc.nextInt();

        arrayList = new ArrayList[vertex + 1];

        for (int i = 0; i < arrayList.length; i++) {
            arrayList[i] = new ArrayList<>();
        }

        visited = new boolean[vertex + 1];

        for (int i = 0; i < line; i++) {
            int x = sc.nextInt();
            int y = sc.nextInt();

            arrayList[x].add(y);
            arrayList[y].add(x);
        }

        for (int i = 1; i < vertex + 1; i++) {
            Collections.sort(arrayList[i]);
        }

        bfs(startVertex);
    }
}
```