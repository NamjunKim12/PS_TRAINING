import sys
N = int(sys.stdin.readline())
arr = list(map(int,input().split()))
budget = int(sys.stdin.readline())

end = max(arr)
start = 1 

while end >= start :
    mid = (start + end ) // 2
    count = 0
    for i in arr:
        if i > mid :
            count += mid
        else :
            count += i
    if count > budget :
        end = mid - 1
    else : 
        start = mid + 1

print(end)