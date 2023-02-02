const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = fs.readFileSync(root, 'utf8').toString().trim().split('\n');

console.log(solution(a,b));

function solution(a,b) {
    const count = +a;
    const arr = b.split(' ').map(a => +a);
    let answer = 0;

    arr.sort((a, b) => a - b);

    for (let i = 0; i < count; i++) {
        answer += arr.slice(0, i+1).reduce((a, b) => a + b, 0);
    }
    return answer;
};