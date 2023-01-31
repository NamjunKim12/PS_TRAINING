const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim().split(/\s/).map(a=>+a);

solution(input);

function solution(input) {
    for(let i = 1; i < input.length; i+=2) {
        console.log(input[i]+input[i+1]);
    }
}
