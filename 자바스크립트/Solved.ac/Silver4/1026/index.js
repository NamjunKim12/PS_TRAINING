const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[a], Arr1, Arr2] = fs.readFileSync(root, 'utf8').toString().trim().split('\n').map(a=> a.split(' ').map(a=>+a));

console.log(solution(a, Arr1, Arr2));

function solution(a, Arr1, Arr2) {
    let temp1 = 0;
    let temp2 = 0; 
    Arr1.sort((a,b)=> a-b);
    Arr2.sort((a,b)=> b-a);
    for(let i = 0; i < a; i++ ){
        temp1 += Arr1[i] * Arr2[i]
    }
    Arr1.sort((a,b)=> b-a);
    Arr2.sort((a,b)=> a-b);
    for(let i = 0; i < a; i++ ){
        temp2 += Arr1[i] * Arr2[i]
    }
    return temp1 >= temp2 ? temp2 : temp1 ; 
};