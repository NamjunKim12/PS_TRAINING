const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [count, ...input] = fs
  .readFileSync(root, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map(a => a.split(" ").map(Number));

const ASC = (a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);

function solution(input) {
  let answer = "";
  input.sort(ASC).forEach(item => (answer += `${item[0]} ${item[1]}` + "\n"));
  console.log(answer.trim());
}

solution(input);
