const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim()
.split('\n').map(a => +a);

console.log(input.reduce((acc, curr) => acc + curr, 0) / input.length)
console.log(input.sort((a,b)=> a-b)[Math.floor(input.length/2)])

