grade = {'A+': 4.5,
        'A0' : 4.0,
        'B+' : 3.5,
        'B0' : 3.0,
        'C+' : 2.5,
        "C0" : 2.0,
        'D+' : 1.5,
        'D0' : 1.0,
         'F' : 0 
         }

sum_score1 = 0
sum_score2 = 0

for _ in range(20):
    name, score, g = input().split()
    score = float(score)

    if g != 'P' :
        sum_score1 += score
        sum_score2 += score * grade[g]


print('%.6f' % (sum_score2/sum_score1))