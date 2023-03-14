import sys

N, M = map(int, sys.stdin.readline().rstrip().split())

dotdo = set()
bodo = set()

for _ in range(N):
    dotdo.add(sys.stdin.readline().rstrip())

for _ in range(M):
    bodo.add(sys.stdin.readline().rstrip())


answer = sorted(list(dotdo & bodo))

print(len(answer))

for i in range(len(answer)):
    print(answer[i])