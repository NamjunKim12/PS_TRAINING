const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [count, sum, ...input] = fs
  .readFileSync(root, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map(a => a.split(" ").map(Number))
  .flat();

console.log(solution(input));

function solution(input) {
  let answer = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      for (let k = j + 1; k < input.length; k++) {
        let temp = input[i] + input[j] + input[k];
        if (temp <= sum && Math.abs(sum - answer) > Math.abs(sum - temp)) {
          answer = temp;
        }
      }
    }
  }
  return answer;
}
