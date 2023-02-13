const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [X, Y] = fs
  .readFileSync(root, "utf8")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const factorial = x => {
  let answer = 1;
  for (let i = 2; i <= x; i++) {
    answer *= i;
  }
  return answer;
};

console.log(Math.floor(factorial(X) / (factorial(X - Y) * factorial(Y))));
