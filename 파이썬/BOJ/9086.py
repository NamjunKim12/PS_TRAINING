N = int(input())

arr = []
for _ in range(N):
    arr.append(input())

for word in arr:
    print(word[0]+word[-1])
