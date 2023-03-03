## 깊이 우선 탐색
## 그래프의 깊이를 우선하여 탐색하는 기법
## 리스트 자료구조를 통해 스택을 구현한다.
graph = [[],[2,3,8],[1,7],[1,4,5],[3,5],[3,4],[7],[2, 6, 8],[1,7]]

visited = [False] * 9

def dfs(graph, v, visited):
    visited[v] = True
    print(v, end='')

    for i in graph[v]:
        if not visited[i]:
            dfs(graph, i, visited)

dfs(graph, 1, visited)