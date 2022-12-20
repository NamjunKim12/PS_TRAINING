const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim().split('\n');

const [a , b] = input;

const numArr = b.split('').map(a => +a);

console.log(`${Math.min(...numArr)} ${Math.max(...numArr)}`);