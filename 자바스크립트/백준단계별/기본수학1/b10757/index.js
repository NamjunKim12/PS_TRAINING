const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [a, b] = fs.readFileSync(root, 'utf8').toString().trim().split(' ');

a = BigInt(a);
b = BigInt(b);

console.log(solution(a,b));

function solution(a,b) {
    return a+b+"";
};