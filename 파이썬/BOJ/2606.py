import sys
sys.setrecursionlimit(10**5)

N = int(sys.stdin.readline().rstrip())
M = int(sys.stdin.readline().rstrip())

graph = [[] for _ in range(N+1)]
visited = [0] * (N + 1)

for _ in range(M):
    a, b = map(int, sys.stdin.readline().rstrip().split())

    graph[a].append(b)
    graph[b].append(a)

for i in range(N+1):
    graph[i].sort()

def dfs(graph, v, visited):
    global count
    visited[v] = 1

    for i in graph[v]:
        if not visited[i]:
            dfs(graph, i, visited)

dfs(graph, 1, visited)

print(visited.count(True)-1)