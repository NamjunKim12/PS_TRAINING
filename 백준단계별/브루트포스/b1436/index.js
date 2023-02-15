const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = +fs.readFileSync(root, "utf8").toString().trim();

let answer = 665;

while (input > 0) {
  answer++;

  if (answer.toString().includes("666")) {
    input--;
  }
}

console.log(answer);
