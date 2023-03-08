K, N = map(int, input().split())
arr = []

for i in range(K):
    arr.append(int(input()))

start, end = 1, max(arr) 

while start <= end : 
    mid = (start+end) // 2

    cable = 0
    for i in arr:
        if i >= mid:
            cable += i // mid

    if cable >= N:
        start = mid + 1
    else:
        end = mid - 1

print(end)  
