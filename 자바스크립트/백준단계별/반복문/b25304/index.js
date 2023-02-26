const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim().split(/\s/).map(a=>+a);

console.log(solution(input));

function solution(input) {
    const CORRECT = input[0];
    input.shift();
    input.shift();
    let answer = 0;

    for(let i = 0; i < input.length; i+=2){
        answer += (input[i] * input[i+1]);
    }

    return answer === CORRECT ? "Yes" : "No";
}
