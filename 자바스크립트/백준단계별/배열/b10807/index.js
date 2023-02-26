const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim().split('\n');

const [N, S, V] = input;

const cnt = S.split(' ').filter( a => +a === +V).length;

console.log(cnt);