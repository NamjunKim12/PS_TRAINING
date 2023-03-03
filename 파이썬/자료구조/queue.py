from collections import deque

queue = deque()

queue.append(5)
queue.append(2)
queue.append(3)
queue.append(7)
queue.popleft()
queue.append(1)
queue.append(4)
queue.popleft()


print(list(queue))
queue.reverse()
print(list(queue))

## 선입선출 (FIFO) 특징을 갖는 자료구조
## BFS와 연관있는 자료구조
