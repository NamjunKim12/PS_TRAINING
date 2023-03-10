# 힙
# 완전 이진 트리 자료구조의 일종
# 최대 힙: 부모 노드의 키 값이 자식 노드의 키 값보다 크거나 같은 완전 이진 트리
# 최소 힙: 부모 노드의 키 값이 자식 노드의 키 값보다 작거나 같은 완전 이진 트리

# 우선순위 큐 라이브러리를 활용한 힙 정렬 구현
# 시간 복잡도: O(NlogN)

# 파이썬은 기본적으로 최소 힙 라이브러리를 제공한다.
import heapq
import sys

input = sys.stdin.readline

def heapsort(iterable):
    h = []
    result = []

    # 모든 원소를 차례대로 힙에 삽입
    for value in iterable:
        heapq.heappush(h, value)

    # 힙에 삽입된 모든 원소를 차례대로 꺼내어 담기
    for i in range(len(h)):
        result.append(heapq.heappop(h))

    return result

n = int(input())
array = []

for _ in range(n):
    array.append(int(input()))

array = heapsort(array)

for i in array:
    print(i)

# 입력 예시
# 5
# 3
# 2
# 1
# 4

# 출력 예시
# 1
# 2
# 3
# 4
# 5


# 최대 힙

# 최대 힙을 구현하는 방법
# 1. 원소의 부호를 바꾸어 최소 힙으로 구현한 뒤, 출력할 때 다시 부호를 바꾸는 방법
# 2. 원소를 튜플 형태로 저장하는 방법


from heapq import heappush, heappop

nums = [4, 1, 7, 3, 8, 5]
heap = []

for num in nums:
  heappush(heap, (-num, num))

while heap:
  print(heappop(heap)[1])


# 출력 예시
# 8
# 7
# 5
# 4
# 3
# 1
