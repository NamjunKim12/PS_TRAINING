const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +fs.readFileSync(root, 'utf8').toString().trim();

solution(input);

function solution(input) {
    for (let i = 1; i < 10; i++) {
        console.log(`${input} * ${i} = ${input * i}`);
    }
};