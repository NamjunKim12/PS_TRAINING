const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(root, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map(a => a.split(" ").map(Number));

const cases = input.shift();

console.log(solution(input));

function solution(input) {
  let answer = "";
  for (let i = 0; input.length > i; i += 2) {
    let [count, location] = input[i];
    let target = input[i + 1];
    let current = 0;

    while (true) {
      const max = Math.max(...target);
      const number = target.shift();
      if (number === max) {
        current += 1;
        if (location === 0) {
          answer += current + "\n";
          break;
        }
      } else {
        target.push(number);
      }

      if (location === 0) {
        location = target.length - 1;
      } else {
        location -= 1;
      }
    }
  }
  return answer.trim();
}
