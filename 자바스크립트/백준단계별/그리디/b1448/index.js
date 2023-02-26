const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...input] = fs
  .readFileSync(root, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map(a => +a);

input.sort((a, b) => b - a);

let answer = -1;
let result = [];
for (let i = 0; i < n - 2; i++) {
  if (input[i] < input[i + 1] + input[i + 2]) {
    answer = input[i] + input[i + 1] + input[i + 2];
    break;
  }
}

console.log(answer);
