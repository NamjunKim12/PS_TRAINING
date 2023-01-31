const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim().split(' ').map(a => +a);

console.log(solution(input));

function solution(input) {
    const [upside, downside, height] = input;
    const realheight = height - downside;
    const dailyrountine = upside - downside;

    return Math.ceil(realheight / dailyrountine);
};