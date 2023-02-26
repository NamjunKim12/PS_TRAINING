const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = fs
  .readFileSync(root, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map(a => +a);

input.sort((a, b) => a - b);

console.log(solution(input));

function solution(input) {
  const set = new Set();
  answer = [];

  for (let i = 0; N > i; i++) {
    for (let j = 0; N > j; j++) {
      set.add(input[i] + input[j]);
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (set.has(input[i] - input[j])) answer.push(input[i]);
    }
  }

  return Math.max(...answer);
}
