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

  const mode = cards.reduce((acc, curr) => {
    acc.hasOwnProperty(curr) ? (acc[curr] += 1) : (acc[curr] = 1);
    return acc;
  }, {});

  for (let i = 0; number.length > i; i++) {
    answer += mode[number[i]] ? mode[number[i]] + " " : 0 + " ";
  }

  return answer.trim();
}
