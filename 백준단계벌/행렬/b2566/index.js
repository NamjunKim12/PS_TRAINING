const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
            .readFileSync(root, 'utf8')
            .toString()
            .trim()
            .split('\n')
            .map(a => a.split(' ').map(b => +b));

console.log(solution(input));

function solution(input) {
    let max = 0;
    let maxIndexRow=1;
    let maxIndexCol=1;

    for(let i = 0; i < input.length; i++) {
        if(Math.max(...input[i]) > max){
            max = Math.max(...input[i]);
            maxIndexCol = i + 1;
            maxIndexRow = input[i].indexOf(max) + 1; 
        }
    }

    return `${max}\n${maxIndexCol} ${maxIndexRow}`;
};