const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(root, "utf8").toString().trim().split("-");

const answer = input
  .map(item =>
    item
      .split("+")
      .map(Number)
      .reduce((acc, curr) => acc + curr)
  )
  .reduce((acc, curr) => acc - curr);

console.log(answer);
