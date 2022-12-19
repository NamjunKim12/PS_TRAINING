const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim();

console.log(solution(input));

function solution(input) {
    if(input.length === 1 && input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90) return input.toUpperCase();

    const arr = input.toUpperCase().split('').filter( a => a.charCodeAt(0) >= 65 && a.charCodeAt(0) <= 90);
    const newObject = arr.reduce((acc, cur) => {
        acc.hasOwnProperty(cur) ? (acc[cur] += 1) : (acc[cur] = 1);
        return acc;
      }, {});

      let result = '';
      let n = 0;
      
      
      for (let i in newObject) {
          if(newObject[i] > n) {
              n = newObject[i] 
              result = i
          }
          else if(newObject[i] == n) result = '?';
      }
      
      return result;
};