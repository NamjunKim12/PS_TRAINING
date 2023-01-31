const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim();

console.log(solution(input));

function solution(input) {
    const letter = 'abcdefghijklmnopqrstuvwxyz'
    const answer = Array(26).fill(-1)

    for(let i = 0; i < answer.length; i++) {
        if(input.includes(letter[i])){
            answer[i] = input.indexOf(letter[i])
        }
    }

    return answer.join(" ");
};