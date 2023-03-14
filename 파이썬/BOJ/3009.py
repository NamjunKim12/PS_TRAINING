x = []
y = []

answer = []

for _ in range(3):
    a, b = map(int, input().split())
    x.append(a)
    y.append(b)

for i in x:
    if x.count(i) == 1:
        answer.append(i)
for i in y:
    if y.count(i) == 1:
        answer.append(i)

print(*answer) 