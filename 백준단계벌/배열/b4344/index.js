const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim().split('\n');

input.shift();

for(let i = 0; i < input.length; i++){
    const targetArr = input[i].split(' ').map(a=>+a);
    const student = targetArr[0];
    let sum = 0;
    let targetStudent = 0;
    let Avg = 0;
    for(let j = 1; j < targetArr.length; j++){
        sum += targetArr[j];
    };
    Avg = sum / student;
    for(let j = 1; j < targetArr.length; j++){
        if(targetArr[j] > Avg){
            targetStudent += 1;
        }
    }
    console.log(`${(targetStudent/student * 100).toFixed(3)}%`);
}