const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim().split('\n');

const numArr = input[1].split(' ').map( a => +a );
const count = +input[0];
const maxScore = Math.max(...numArr);
let answer = 0;

for(let i = 0; i < numArr.length; i++) {
    answer += ( numArr[i] / maxScore * 100 );
}

console.log(answer/count);