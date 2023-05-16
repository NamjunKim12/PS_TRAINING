import sys

input = int(sys.stdin.readline())


def fibo_non_DP(x):
    if x == 1 or x == 2:
        return 1

    return fibo_non_DP(x - 1) + fibo_non_DP(x - 2)


def fibo_DP(n):
    d = [0] * (input+1)
    d[1], d[2] = 1, 1
    count = 0

    n = input
    for i in range(3, n+1):
        count += 1
        d[i] = d[i-1] + d[i - 2]
    return count


print(fibo_non_DP(input), fibo_DP(input))
