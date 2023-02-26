const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [info, score] = fs.readFileSync(root, 'utf8').toString().trim().split('\n').map(a=> a.split(' ').map(a=> +a));

console.log(score.sort((a,b)=> b-a)[info[1]-1]);