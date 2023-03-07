N, M = map(int, input().split())

arr = []

for _ in range(M):
    I,J = map(int, input().split())
    arr.append([I,J])

answer = [i for i in range(1, N+1)];
for item in arr:
    answer[item[0]-1],answer[item[1]-1] = answer[item[1]-1],answer[item[0]-1]

for i in answer :
    print(i, end =' ')
