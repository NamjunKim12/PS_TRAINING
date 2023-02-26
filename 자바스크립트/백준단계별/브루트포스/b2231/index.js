const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = +fs.readFileSync(root, "utf8").toString().trim();

console.log(solution(input));

function solution(input) {
  let answer = 0;

  for (let i = 1; input >= i; i++) {
    const key = i
      .toString()
      .split("")
      .map(a => +a)
      .reduce((acc, curr) => acc + curr, 0);

    if (key + i === input) {
      answer = input - key;
      break;
    }
  }

  return answer;
}
