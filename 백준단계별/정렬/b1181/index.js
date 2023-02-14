const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(root, "utf8").toString().trim().split("\n");

const len = +input.shift();

solution(input);

function solution(input) {
  let answer = [];
  const target = input.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    if (a.length === b.length) return a.localeCompare(b);
  });

  for (let i = 0; target.length > i; i++) {
    if (!answer.includes(target[i])) answer.push(target[i]);
  }

  console.log(answer.join("\n"));
}
