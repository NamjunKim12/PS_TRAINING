word = input()
answer = set()

for i in range(len(word)):
    for j in range(i,len(word)):
        temp = word[i:j+1]
        answer.add(temp)
    
print(len(answer))