const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim();

console.log(solution(input));

function solution(input) {
    const target = input.split('').reduce((acc, cur)=> {
        acc[cur] = acc[cur] ? acc[cur] + 1 : 1; 
        return acc;
    }, {});

    const oddCount  = Object.values(target).filter(a=> a % 2 === 1).length;

    if(oddCount > 1) return 'I\'m Sorry Hansoo'; 


    let data = Object.entries(target).sort((a,b)=>a[0].localeCompare(b[0]));
    
    let halfAnswer = '';
    let oddChar = '';

    data.forEach(([alphabet, count])=>{
        let temp = '';

        if(count % 2 === 1) {
            oddChar = alphabet;
        } 
        if(count > 1 ){
            for(let i = 0; Math.floor(count/2) > i; i++){
                temp += alphabet;
            }
            halfAnswer += temp;
        }
    }
    )
    
    return halfAnswer + oddChar + halfAnswer.split('').reverse().join('');
};