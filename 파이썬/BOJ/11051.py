import sys

MOD = 10007
sys.setrecursionlimit(10 ** 7)

cache = [[0] * 1001 for _ in range(1001)]
N,K = map(int, input().split())

def bino(n,k):
    if cache[n][k]:
        return cache[n][k]
    
    if k == 0 or k == n :
        cache[n][k] = 1
    else : 
        cache[n][k] = bino(n-1, k-1) + bino(n-1, k)
        cache[n][k] %= MOD 


    return cache[n][k]

print(bino(N,K))


# import sys 
# from math import factorial

# input = sys.stdin.readline
# N, K = list(map(int, input().split()))
# result = factorial(N) // (factorial(K) * factorial(N-K))
# print (result % 10007)

# import math
# n, k = list(map(int, input().split()))
# print(int(math.comb(n, k)%10007))