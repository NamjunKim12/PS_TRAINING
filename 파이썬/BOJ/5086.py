while True :
    first, second = map(int, input().split())

    if first == 0 and second == 0 : break
    
    if first > second :
        if first % second == 0:
            print('multiple')
        else :
            print('neither')
    else :
        if second % first == 0:
            print('factor')
        else :
            print('neither')

