while True :
    n = int(input())
    arr = []
    if n == -1 : break
    for i in range(1, n):
        if n % i == 0 :
            arr.append(i)
    if sum(arr) == n:
        print(n, " = ", " + ".join(str(i) for i in arr), sep="")
    else:
        print(n, "is NOT perfect.")