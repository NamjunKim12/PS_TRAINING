const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [first, second] = fs.readFileSync(root, 'utf8').toString().trim()
.split('\n').map(a => +a);


function isPrime(n) {
    if (n===1){
        return false; 
    }
    
    for (let i = 2; i < n; i++){
        if (n % i === 0) return false;
    }
    return true;
}


function solution(first, second) {
    const answer = [];
    for (let i = first; i <= second; i++) {
        if (isPrime(i)) answer.push(i);
    }
    if(answer.length === 0) return -1;
    return `${answer.reduce((acc, cur) => acc + cur)}\n${answer[0]}`;
    
};

console.log(solution(first, second));