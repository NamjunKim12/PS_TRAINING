import sys

A_len, B_len = map(int, sys.stdin.readline().rstrip().split())

A = set(map(int, sys.stdin.readline().rstrip().split()))
B = set(map(int, sys.stdin.readline().rstrip().split()))


print(len(list((A - B) | (B  - A))))