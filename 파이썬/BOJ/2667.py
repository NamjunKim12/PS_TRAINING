import sys
n = int(sys.stdin.readline().rstrip())
graph = []
for _ in range(n):
    graph.append(list(map(int, sys.stdin.readline().rstrip())))


dx = [0, 0, -1, 1]
dy = [1, -1, 0, 0]
count = 0
result = []

def dfs(x,y):
    global count
    if x < 0 or x >= n or y < 0 or y >= n :
        return 0
    if graph[x][y] == 0:
        return 0
    graph[x][y] = 0
    count += 1

    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        dfs(nx,ny)

    return count


for i in range(n):
    for j in range(n):
        answer = dfs(i, j)
        if answer :
            result.append(answer)
            count = 0

result.sort()
print(len(result))
for i in result:
    print(i)