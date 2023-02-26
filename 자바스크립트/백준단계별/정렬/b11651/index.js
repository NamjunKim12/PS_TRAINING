const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(root, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map(a => a.split(" ").map(Number));

input.shift();

console.log(solution(input));

function solution(input) {
  return input
    .sort(Sorting)
    .map(a => a.join(" "))
    .join("\n");
}

function Sorting(a, b) {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
}
