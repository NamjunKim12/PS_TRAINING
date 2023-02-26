const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(root, "utf8")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(solution(input));

function solution(input) {
  const [hansuX, hansuY, X, Y] = input;
  const answer = [];

  answer.push(hansuX);
  answer.push(hansuY);
  answer.push(Y - hansuY);
  answer.push(X - hansuX);

  return Math.min(...answer);
}
