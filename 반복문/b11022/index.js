const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim().split(/\s/).map(a=>+a);


sol(input);


function sol(input){

    let round = 0;

    for(let i = 1; i<input.length; i+=2){
        round += 1;
        console.log(`Case #${round}: ${input[i]} + ${input[i+1]} = ${input[i]+input[i+1]}`);
    }
}


