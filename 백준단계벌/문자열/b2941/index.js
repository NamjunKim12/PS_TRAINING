const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim();

console.log(solution(input));

function solution(input) {
    const changeNeed = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

    for (let element of changeNeed) {
      input = input.split(element).join("❤");
    }
  
    return input.length;
};