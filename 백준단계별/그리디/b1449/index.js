const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [[N, tapeLength], [...input]] = fs
  .readFileSync(root, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map(a => a.split(" ").map(Number));

console.log(solution(input, N, tapeLength));

function solution(input, N, tapeLength) {
  const target = [...input].sort((a, b) => a - b);
  let answer = 0;
  let fixedHoleLocation = 0;
  for (let i = 0; i < N; i++) {
    if (target[i] > fixedHoleLocation) {
      answer += 1;
      fixedHoleLocation = target[i] + tapeLength - 1;
    }
  }
  return answer;
}
