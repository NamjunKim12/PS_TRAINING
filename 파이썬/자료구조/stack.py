## 파이썬의 stack 자료구조는
## 리스트 자료형을 활용
## DFS와 연관있는 자료구조
stack = []

stack.append(5)
stack.append(2)
stack.append(3)
stack.append(7)
stack.pop()
stack.append(1)
stack.append(4)
stack.pop()

print(stack[::-1])
print(stack)


"""
    시간복잡도 : 삽입 : O(1) , 삭제 : O(1)
"""