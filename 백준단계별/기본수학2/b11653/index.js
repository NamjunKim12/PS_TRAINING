const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +fs.readFileSync(root, 'utf8').toString().trim();

console.log(solution(input));

function solution(input) {
    let result = [];

    for (let i = 2; i <= input; i++) {
        while (input % i === 0) {
            input = input / i;
            result.push(i);
        }
    }

    return result.join('\n');
};