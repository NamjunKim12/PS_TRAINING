const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim().split('\n');

const count = input[0];

input.shift();

for(let i = 0; i < count; i++){
    let targetArr = input[i].split('');
    let score = 0;
    let num = 0;
    
    for(let j = 0; j < targetArr.length; j++){
        if(targetArr[j] === 'O'){
            num += 1;
            score += num;
        }else{
            num = 0;
        }
    }
    console.log(score);
}

