def solution(keyinput, board):
    answer = [0,0]
    max = [board[0] // 2, board[1] // 2]
    for i in keyinput:
        if i == 'left':
            answer[0] -= 1
            if answer[0] < -max[0]:
                answer[0] = -max[0]
                
        if i == 'right':
            answer[0] += 1
            if answer[0] > max[0]:
                answer[0] = max[0]
            
        if i == 'up':
            answer[1] += 1
            if answer[1] > max[1]:
                answer[1] = max[1]
            
        if i == 'down':
            answer[1] -= 1
            if answer[1] < -max[1]:
                answer[1] = -max[1]
            
            
    return answer