const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [count, ...input] = fs.readFileSync(root, 'utf8').toString().trim()
.split('\n').map(a => +a);

console.log(solution(input));

function solution(input) {
    return input.sort((a,b)=> a-b).join('\n');
};

//node.js로 풀 수 없는 문제라고 함. 