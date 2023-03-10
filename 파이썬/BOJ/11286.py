import heapq as hq
import sys

N = sys.stdin.readline()

pq = []

for _ in range(int(N)):
    x = int(sys.stdin.readline().rstrip())

    if x : 
        hq.heappush(pq, (abs(x), x))
    else :
        print(hq.heappop(pq)[1] if pq else 0)