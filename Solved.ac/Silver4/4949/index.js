const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim().split('\n').slice(0,-1).map(a=> a.split(''));

solution(input);

function solution(input) {
    input
    .map(a=> a.filter(a=> a === '[' || a === ']' || a === '(' || a === ')'))
    .forEach(a => {
        let stack = [];
        let isYes = true;
      
        for (let i = 0; i < a.length; i++) {
          //브라켓이 없을 경우 동작없이 순회 종료
          if(a.length === 0) break;
   
          // 순회를 돌면서 여는 브라켓이 등장할 경우 스택에 넣는다.
          let bracket = a[i];
          if (bracket === "(" || bracket === "[") {
            stack.push(bracket);
          } 
          
          // 닫는 브라켓이 등장하는 경우
          if (bracket === ")" || bracket === "]") {           
            let lastStack = stack.pop();
            
            if ((bracket === ")" && lastStack !== "(") || (bracket === "]" && lastStack !== "[")) {
              isYes = false;
              break;
            }
          }
        }
      	// 스택에 브라켓이 남아있는 경우(닫히지 않은 경우)
        if (stack.length !== 0) {
          isYes = false;
        }
      	//isYes의 값에 따라 조건부 출력
        console.log(isYes ? "yes" : "no");
        });
};