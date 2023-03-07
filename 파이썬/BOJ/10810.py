N, M = map(int, input().split())

arr = []

for _ in range(M):
    I,J,K = map(int, input().split())
    arr.append([I,J,K])

answer = [0 for _ in range(N)];
for item in arr:
    for i in range(item[0],item[1]+1):
        answer[i-1] = item[2]

for i in answer :
    print(i, end =' ')
