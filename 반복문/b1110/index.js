const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +fs.readFileSync(root, 'utf8').toString().trim();

let num = input;
let sum;
let i = 0;

while (true) {
    i++;

    sum = Math.floor(num / 10) + num % 10;
    num = (num % 10) * 10 + sum % 10;

    if(num === input) break;
}
console.log(i);