const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(root, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map(a => a.split(" ").map(Number));

const [count] = input.shift();

function solution(input) {
  const rankCount = [];

  for (let i = 0; i < count; i++) {
    let rank = 1;
    for (let j = 0; j < count; j++) {
      if (i === j) continue;
      [weight1, tall1] = input[i];
      [weight2, tall2] = input[j];

      if (weight1 < weight2 && tall1 < tall2) rank += 1;
    }
    rankCount.push(rank);
  }
  return rankCount.join(" ");
}

console.log(solution(input));
