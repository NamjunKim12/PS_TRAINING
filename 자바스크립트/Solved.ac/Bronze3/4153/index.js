const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(root, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map(a => a.split(" ").map(Number));

solution(input);

function solution(input) {
  input.pop();
  input.forEach(item => {
    item.sort((a, b) => a - b);
    const [a, b, c] = item;

    if (a ** 2 + b ** 2 === c ** 2) {
      console.log("right");
    } else {
      console.log("wrong");
    }
  });
}
