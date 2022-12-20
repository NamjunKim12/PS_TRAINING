const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim()
.split('\n').map(a => +a);


input.sort((a,b)=> a-b);
const answer = [];

const fivot = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

for(let i = 1; i <= fivot.length; i++) {
    if(input.indexOf(i) === -1){
        answer.push(i);
    }
}

console.log(answer[0]);
console.log(answer[1]);
