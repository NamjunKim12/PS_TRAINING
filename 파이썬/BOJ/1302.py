import sys

N = sys.stdin.readline()

store = {}

for _ in range(int(N)):
    item = sys.stdin.readline().rstrip()

    if item in store :
        store[item] += 1 
    else :
        store[item] = 1


m = max(store.values())

bestsellers = []
for k, v in store.items():
    if v == m:
        bestsellers.append(k)

bestsellers.sort()

print(bestsellers[0])
