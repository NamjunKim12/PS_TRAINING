const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +fs.readFileSync(root, 'utf8').toString().trim();

console.log(solution(input));

function solution(number) {
    let count = 0;
    
    for(let i = 1; i <= number; i++) {
        if(validator(i)){
            count += 1;
        }
    }
    return count;
};

function validator(number){
    let numString = ""+number;
    if(numString.length <= 2){
       return true; 
    }

    const commonDiff = +numString[1] - +numString[0];
    let beforeNum = +numString[1];

    for(let i = 2; i < numString.length; i++){
        if(numString[i] - beforeNum !== commonDiff){
            return false;
        }
        beforeNum = +numString[i];
    }
    return true
}