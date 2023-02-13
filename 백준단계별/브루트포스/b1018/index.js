const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(root, "utf8").toString().trim().split("\n");

const [X, Y] = input.shift().split(" ").map(Number);

console.log(solution(input, X, Y));

function solution(input, X, Y) {
  const FirstB = "BWBWBWBW";
  const FirstW = "WBWBWBWB";

  const answer = [];

  for (let i = 0; X - 8 >= i; i++) {
    const a = [...input].slice(0 + i, 8 + i);

    for (let j = 0; Y - 8 >= j; j++) {
      let Case1 = 0;
      let Case2 = 0;
      const target = a.map(a => a.slice(0 + j, 8 + j));
      for (let k = 1; k <= 8; k++) {
        for (let l = 0; l < 8; l++) {
          if (k % 2 === 1) {
            if (FirstW[l] !== target[k - 1][l]) Case1 += 1;
          }
          if (k % 2 === 0) {
            if (FirstB[l] !== target[k - 1][l]) Case1 += 1;
          }
        }
      }
      for (let k = 1; k <= 8; k++) {
        for (let l = 0; l < 8; l++) {
          if (k % 2 === 1) {
            if (FirstB[l] !== target[k - 1][l]) Case2 += 1;
          }
          if (k % 2 === 0) {
            if (FirstW[l] !== target[k - 1][l]) Case2 += 1;
          }
        }
      }
      Case1 <= Case2 ? answer.push(Case1) : answer.push(Case2);
    }
  }
  return Math.min(...answer);
}
