const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(root, "utf8")
  .toString()
  .trim()
  .split(" ")
  .map(a => +a);

console.log(solution(input));

function solution(input) {
  const ASC = [1, 2, 3, 4, 5, 6, 7, 8];
  const DESC = [8, 7, 6, 5, 4, 3, 2, 1];
  let isAscending = true;
  let isDescending = true;

  for (let i = 0; 8 > i; i++) {
    if (input[i] !== ASC[i]) isAscending = false;
  }
  for (let j = 0; 8 > j; j++) {
    if (input[j] !== DESC[j]) isDescending = false;
  }

  return isAscending ? "ascending" : isDescending ? "descending" : "mixed";
}
