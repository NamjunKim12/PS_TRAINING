const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [[count], ...input] = fs
  .readFileSync(root, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map(a => a.split(" ").map(a => (!isNaN(+a) ? +a : a)));

solution(input);

function solution(input) {
  console.log(
    input
      .sort((a, b) => a[0] - b[0])
      .map(a => a.join(" "))
      .join("\n")
  );
}
