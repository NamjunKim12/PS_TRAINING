N, M = map(int, input().split())
arr = [ i for i in range(1, N+1)]

for _ in range(M):
    start, end, pivot = map(int, input().split())
    start, end, pivot = start - 1, end - 1, pivot -1 
    arr = arr[:start] + arr[pivot:end+1] + arr[start:pivot] + arr[end+1:]



print(*arr);    
