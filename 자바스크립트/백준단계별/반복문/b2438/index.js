const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +fs.readFileSync(root, 'utf8').toString().trim();

solution(input);

function solution(input) {
    for(let i = 1; i <= input; i++){
        console.log('*'.repeat(i))
    }
};