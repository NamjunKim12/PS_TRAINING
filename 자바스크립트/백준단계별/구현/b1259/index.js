const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(root, "utf8").toString().trim().split("\n");

solution(input);

function solution(input) {
  for (let i = 0; i < input.length; i++) {
    let answer = "yes";
    if (input[i] === "0") break;

    let temp = input[i].split("");
    for (let j = 0; j < temp.length / 2; j++) {
      if (temp[j] !== temp[temp.length - 1 - j]) {
        answer = "no";
        break;
      }
    }
    console.log(answer);
  }
}
