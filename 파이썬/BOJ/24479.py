import sys
sys.setrecursionlimit(10**5)

N, M, R = map(int, sys.stdin.readline().rstrip().split())

graph = [[] for _ in range(N+1)]
visited = [0] * (N + 1)
count = 0

for _ in range(M):
    a, b = map(int, sys.stdin.readline().rstrip().split())

    graph[a].append(b)
    graph[b].append(a)

for i in range(N+1):
    graph[i].sort()

def dfs(graph, v, visited):
    global count
    count += 1
    visited[v] = count

    for i in graph[v]:
        if not visited[i]:
            dfs(graph, i, visited)

dfs(graph, R, visited)

for i in visited[1::]:
    print(i)