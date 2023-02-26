const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(root, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map(a => a.split(" "));

solution(input);

function solution(input) {
  let answer = "";

  for (let i = 0; input.length > i; i++) {
    let [s, t] = input[i];
    let part = s.split("");
    let tmp = t;
    let stack = [];

    if (t.includes(s)) {
      answer += "Yes" + "\n";
      continue;
    } else {
      for (let i = 0; part.length > i; i++) {
        if (tmp.indexOf(part[i]) !== -1) {
          tmp = tmp.substr(tmp.indexOf(part[i]) + 1);
          stack.push(part[i]);
        }
      }
      stack.length === part.length
        ? (answer += "Yes" + "\n")
        : (answer += "No" + "\n");
    }
  }

  console.log(answer.trim());
}

// const isValidate = (words, t) => {
//   let tmp = t;
//   for (let word of words) {
//     if (tmp.indexOf(word) == -1) {
//       return false;
//     } else {
//       tmp = tmp.substr(tmp.indexOf(word) + 1);
//     }
//   }
//   return true;
// };

// const solution = line => {
//   const [s, t] = line.split(" ");

//   // 부분 문자열이라면
//   if (t.includes(s)) {
//     return "Yes \n";
//   } else {
//     // 하나씩 검사
//     const words = s.split("");
//     return isValidate(words, t) ? "Yes \n" : "No \n";
//   }
// };
