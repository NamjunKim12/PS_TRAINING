const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [[N], cards, [M], number] = fs
  .readFileSync(root, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map(a => a.split(" ").map(Number));

console.log(solution(cards, number));

function solution(cards, number) {
  let answer = "";

  const set = new Set(cards);

  for (let i = 0; number.length > i; i++) {
    answer += set.has(number[i]) ? 1 + "\n" : 0 + "\n";
  }

  return answer.trim();
}
