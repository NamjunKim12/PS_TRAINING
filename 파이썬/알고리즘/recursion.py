## 프린트

def recursive_function(i):
    if i == 5:
        return
    print(i, '번째 재귀함수에서', i+1, '번째 재귀함수를 호출합니다')
    recursive_function(i+1)
    print(i,'번째 재귀함수를 종료합니다.')

recursive_function(1)


## 팩토리얼
def factorial_recursive(n):
    if n <= 1:
        return 1    
    return n * factorial_recursive(n-1)

print('재귀 팩토리얼',factorial_recursive(5))


## 유클리드 호제법

## 최대공약수
## from math import GCD 또는 

def gcd(a,b):
    if a % b == 0:
        return b
    else: 
        return gcd(b, a % b)
    
print(gcd(192, 162))


