const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim().split(' ').map(a=> +a);

console.log(solution(input));

function solution(input) {
    const [staticCost, variableCost, price] = input;
    const margin = price - variableCost;

    const count = Math.floor(staticCost / margin) + 1;

    
    return margin <= 0 ? -1 : count;
};