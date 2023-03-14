const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(root, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map(a => a.split(""));

const maxLength = Math.max(...input.map(i => i.length));

console.log(solution(input));

function solution(input) {
  let vertical = "";
  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < input.length; j++) {
      vertical += input[j][i] || "";
    }
  }
  return vertical;
}
