const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const num = fs.readFileSync(root, 'utf8').toString().trim().split('\n').map( a => +a);

solution(num);

function solution(data) {
    let testCase = data[0];
    
    for(let i = 0; i < testCase; i++) {
        let current = 2 * i + 1;
        let k = data[current];
        let n = data[current + 1];

        let result = 1;
        for(let j = 0; j < n - 1; j++) {
            result = result * (k + n - j);
        }
        
        for(let j = 1; j < n; j++) {
            result = result / j;
        }
        
        console.log(Math.abs(result));
    }
}