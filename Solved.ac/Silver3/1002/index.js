const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
    .readFileSync(root, 'utf8')
    .toString()
    .trim()
    .split('\n')
    .map(a=>a.split(' ').map(b=>+b));

    solution(input);

function solution(input) {
    let [[count], ...tries] = input;
    for(let i = 0 ; i < count ; i++) {
        const [x1, y1, r1, x2, y2, r2] = tries[i];
        const dx = x1 - x2;
        const dy = y1 - y2;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const sum = r1 + r2;
        const diff = Math.abs(r1 - r2);
        if (distance === 0 && diff === 0) {
            console.log(-1);
        }
        else if (distance === sum || distance === diff) {
            console.log(1);
        }
        else if (distance < sum && distance > diff) {
            console.log(2);
        }
        else {
            console.log(0);
        }
    }
};