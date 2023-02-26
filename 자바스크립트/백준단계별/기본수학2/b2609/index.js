const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [x, y] = fs
  .readFileSync(root, "utf8")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(solution(x, y));
console.log((x * y) / solution(x, y));

function solution(a, b) {
  if (b === 0) return a;

  return solution(b, a % b);
}
