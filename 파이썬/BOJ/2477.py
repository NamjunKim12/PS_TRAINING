import sys
melon = int(sys.stdin.readline().rstrip())

way_info = []
x = []
y = []
small=[]

for _ in range(6):
    way, length = map(int, sys.stdin.readline().rstrip().split())
    way_info.append([way, length])

    if way == 1 or way == 2 :
        x.append(length)
    if way == 3 or way == 4 :
        y.append(length)

for i in range(6):
    if way_info[i][0] == way_info[(i+2) % 6][0]:
        small.append(way_info[(i+1)%6][1])

big_square = max(x) * max(y) 
small_square = small[0] * small[1]

print((big_square - small_square) * melon)