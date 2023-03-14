import sys

N, M = map(int, input().split())

s = set()
count = 0

for _ in range(N):
    s.add(sys.stdin.readline().rstrip())

for _ in range(M):
    t = input()
    if t in s:
        count += 1

print(count)
