const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim().split('').map(a=> +a).sort((a,b)=>b-a).join('');

console.log(input);