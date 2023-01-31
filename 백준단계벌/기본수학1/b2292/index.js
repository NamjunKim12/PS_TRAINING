const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +fs.readFileSync(root, 'utf8').toString().trim();

let count = 1;
let block = 1;

while (block < input){
    block += 6 * count;

    count += 1;
}

console.log(count);