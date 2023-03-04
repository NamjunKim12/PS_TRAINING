from collections import deque 

N, M, V = map(int,input().split())
graph = []

for _ in range(M):
    a = list(map(int, input().split()))
    a.sort()
    graph.append(a)
	
visited1 = [False] * (N+1)
visited2 = [False] * (N+1)

print(graph)

def dfs(graph, v, visited):
    visited[v] = True
    print(v, end=' ')

    for i in graph[v]:
        if not visited[i]:
            dfs(graph, i, visited)

def bfs(graph, start, visited):
    queue = deque([start])
    visited[start] = True

    while queue :
        v = queue.popleft()
        print(v, end = ' ')

        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                visited[i]=True

dfs(graph, V-1, visited1)
print()
bfs(graph, V-1, visited2)