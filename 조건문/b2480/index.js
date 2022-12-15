const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim().split(' ').map(a => +a);

function solution(input) {
    const [a, b, c] = input;
    let answer = 0; 
    if(a === b && b === c){
        return a * 1000 + 10000;
    }
    if (a===b || a===c || b===c && !(a===b===c)){
        return 1000 + (a === b ? a : b === c ? b : a) * 100;
    }
    if (a !== b && a !== c && b !== c) {
        return Math.max(...input) * 100;
    }
};

console.log(solution(input));
