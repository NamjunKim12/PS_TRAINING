const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [K, ...INT] = fs.readFileSync(root, 'utf8').toString().trim()
.split('\n').map(a => +a);

console.log(solution(K, INT));

function solution(K, INT) {
    let stack = [];
    for(let i = 0; K > i; i++){
        if(INT[i] === 0) stack.pop(INT[i]);
        if(INT[i] !== 0) stack.push(INT[i]);
    }
    return stack.reduce((acc,curr) => acc+curr, 0);
};