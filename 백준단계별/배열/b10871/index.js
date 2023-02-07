const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim().split('\n');

const [a, b] = input

const numArray = b.split(' ').map(a => +a);
const fivot = a.split(' ').map(a=> +a)[1];

const filterArr = numArray.filter( a => fivot > a );

console.log(filterArr.join(' '));