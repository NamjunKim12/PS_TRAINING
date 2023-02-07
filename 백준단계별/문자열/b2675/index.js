const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim().split('\n');

solution(input);

function solution(input) {
    const repeatCount = +input[0];

    for(let i = 1; i <= repeatCount; i++) {
        let answer = '';
        let [repeatCnt, letter] = input[i].split(' ');
        for(let j = 0; j < letter.length; j++) {
                answer += letter[j].repeat(repeatCnt);
        }
        console.log(answer);
    }
};