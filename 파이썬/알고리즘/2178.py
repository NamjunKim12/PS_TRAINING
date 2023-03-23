import sys
from collections import deque

input = sys.stdin.readline

n, m = map(int, input().split())
maze = []

for _ in range(n):
    maze.append(list(map(int, input().rstrip())))

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]


def bfs(x, y):
    queue = deque()
    queue.append((x, y))

    while queue:
        x, y = queue.popleft()

        if maze[x][y] == 0:
            continue

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if 0 <= nx < n and 0 <= ny < m and maze[nx][ny] == 1:
                queue.append((nx, ny))
                maze[nx][ny] = maze[x][y] + 1

    maze[0][0] = 1

    return maze[n-1][m-1]


print(bfs(0, 0))
