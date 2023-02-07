const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim()
.split('\n').map(a => +a);

let reminder = [];
let answer = [];

for(let i = 0; i < input.length; i++){
    reminder.push(input[i] % 42);
}

for(let i = 0; i < reminder.length; i++){
    if(!answer.includes(reminder[i])){
        answer.push(reminder[i]);
    }
}

console.log(answer.length);