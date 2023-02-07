const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim()
.split('\n').map(a => +a);

console.log(Math.max(...input));
console.log(input.indexOf(Math.max(...input))+1);