const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = fs.readFileSync(root, 'utf8').toString().trim().split(' ').map(a => +a);

console.log(solution(a,b));

function solution(a, b) {
    let arr = [];
    let count = 0;
    let answer = 0;
    for(let i = 2; i <= a; i++) {
        arr.push(i);
    }
    while(count < b){
        prime = arr[0];
        arr.some(number => {
            if(number % prime === 0) {
                arr.splice(arr.indexOf(number), 1);
                answer = number;
                count += 1;
            }
            if(count === b) return true;
        })
    }

    return answer;
};