from collections import deque
import sys 
N, M, R = map(int, sys.stdin.readline().rstrip().split())

graph = [[] for _ in range(N+1)]
visited = [0] * (N + 1)

for _ in range(M):
    a, b = map(int, sys.stdin.readline().rstrip().split())

    graph[a].append(b)
    graph[b].append(a)

for i in range(N+1):
    graph[i].sort()

def bfs(graph, start, visited):
    queue = deque([start])
    visited[start] = 1
    count = 2

    while queue :
        v = queue.popleft()

        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                visited[i]=count
                count += 1

bfs(graph, R, visited)

for i in visited[1::]:
    print(i)