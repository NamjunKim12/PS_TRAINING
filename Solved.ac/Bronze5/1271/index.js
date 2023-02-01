const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [m,n] = fs.readFileSync(root, 'utf8').toString().trim().split(' ').map(BigInt);

let answer = m / n + '\n';
answer += m % n;

console.log(answer);