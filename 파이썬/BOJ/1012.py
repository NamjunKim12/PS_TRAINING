import sys
sys.setrecursionlimit(10**6)

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]


def dfs(x, y):

    for nx, ny in ((x-1, y), (x, y-1), (x+1, y), (x, y+1)):
        if 0 <= nx < m and 0 <= ny < n and graph[nx][ny] == 1:
            graph[nx][ny] = 0
            dfs(nx, ny)


for test_case in range(int(sys.stdin.readline().rstrip())):
    count = 0

    m, n, k = map(int, sys.stdin.readline().rstrip().split())
    graph = [[0] * n for _ in range(m)]
    for _ in range(k):
        x, y = map(int, sys.stdin.readline().rstrip().split())
        graph[x][y] = 1

    for i in range(m):
        for j in range(n):
            if graph[i][j] == 1:
                count += 1
                graph[i][j] = 0
                dfs(i, j)

    print(count)
