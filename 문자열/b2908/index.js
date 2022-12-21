const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim().split(' ');

console.log(solution(input));

function solution(input) {
    const target = input.map(a => a.split('').reverse().join(''));

    const [a, b] = target;
    
    return +a > +b ? a : b;
};