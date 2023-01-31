const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [quantity, input] = fs.readFileSync(root, 'utf8').toString().trim().split('\n');

function isPrime(n) {
    for (let i = 2; i < n; i++){
        if (n % i === 0) return false;
    }
    return true;
}
function solution(quantity, input) {
    let number = input.split(' ').map(a=> +a);
    let answer = 0; 
    for(let i = 0; i < +quantity; i++){
        if(isPrime(number[i]) && number[i]!==1) answer++;
    }
    
    return answer;
};

console.log(solution(quantity, input));