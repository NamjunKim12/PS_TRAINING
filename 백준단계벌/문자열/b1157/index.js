const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim();

console.log(solution(input));

function solution(input) {

    const arr = input.toUpperCase().split('').filter( a => a.charCodeAt(0) >= 65 && a.charCodeAt(0) <= 90);
    const newObject = arr.reduce((acc, cur) => {
        acc.hasOwnProperty(cur) ? (acc[cur] += 1) : (acc[cur] = 1);
        return acc;
      }, {});

      const duplicate = new Set(Object.values(newObject));

      const modeKey = Object.keys(newObject).reduce((acc, cur) =>
        newObject[acc] > newObject[cur] ? acc : cur
      );

      return Object.values(newObject).length === duplicate.size ? modeKey : '?';
};