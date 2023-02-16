const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [count, ...input] = fs
  .readFileSync(root, "utf8")
  .toString()
  .split("\n")
  .map(Number);

console.log(solution(input));

function solution(input) {
  let pointer = 1;
  let answer = "";
  const stack = [];

  for (let i = 0; i < count; i++) {
    while (pointer <= input[i]) {
      stack.push(pointer);
      answer += "+ \n";
      pointer += 1;
    }

    let num = stack.pop();
    if (num !== input[i]) {
      answer = "NO";
      break;
    }
    answer += "- \n";
  }

  return answer;
}
