const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N,K,...coins] = fs.readFileSync(root, 'utf8').toString().trim().split(/\s/).map(a=> +a);

console.log(solution(N, K, coins));

function solution(N, K, coins) {
    let answer = 0; 
    let reminder = K;
    let target = coins.filter(coin => coin <= K ).sort((a,b)=> b-a);

    for(let i = 0; N > i; i++){
        answer += Math.floor(reminder/target[i]);
        reminder -= target[i] * Math.floor(reminder/target[i]);

        if (reminder === 0) break;
    }

    return answer;
};