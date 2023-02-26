const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim().split('\n').map(a=>a.split(' '));

console.log(solution(input));

function solution(input) {
    const N = +input[0][0];
    const M = +input[0][1];
    const target = input.slice(1, N+1);
    const question = input.slice(N+1);
    let answer = [];

    const passwordInfo = target.reduce((acc,curr)=>{
        acc[curr[0]]=curr[1];
        return acc;
    },{}) 

    for(let i = 0; question.length > i; i++){
        answer.push(passwordInfo[question[i][0]]);
    }

    return answer.join('\n');
};