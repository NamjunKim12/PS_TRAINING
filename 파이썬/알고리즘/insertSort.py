array = [1,4,6,9,7,5,2,3,8]

for i in range(1, len(array)):
    for j in range(i, 0, -1):
        if array[j] < array[j-1]:
            array[j], array[j-1] = array[j-1], array[j]
        else:
            break

print(array)

## 시간복잡도
## O(N^2)