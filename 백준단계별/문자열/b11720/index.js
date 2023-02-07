const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim().split('\n');

console.log(solution(input));

function solution(input) {
    let [a, b] = input;
    let sum = 0;
    const targetArr = b.split('');
    for(let i = 0; i < a; i++) {
        sum += +targetArr[i] 
    }
    return sum
};