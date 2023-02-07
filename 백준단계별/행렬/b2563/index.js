const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [count, ...input] = fs.readFileSync(root, 'utf8').toString().trim()
.split('\n').map(a=> a.split(' ').map(b=> +b));

console.log(solution(count, input));

function solution(count, input) {
    let paper = new Array(100).fill().map(el => new Array(100).fill(false));

    for (let i = 0; i < count[0]; i++) {
        const colorPaper = input[i];
        const x = colorPaper[0], y= colorPaper[1];

        for (let j = 0; j <10; j++) {
            for (let k = 0; k < 10; k++) {
                paper[x+j][y+k] = true;
            }
        }
    }

    const answer = paper.reduce((prev, curr) => {
        for (const el of curr) {
            if (el) {
                prev++;
            }
        }

        return prev;
    }, 0);

    return answer;
};