const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [password, N, ...words] = fs
  .readFileSync(root, "utf8")
  .toString()
  .trim()
  .split("\n");

console.log(solution(password));

function solution(password) {
  const target = [];
  let answer = "";

  for (let i = 1; i <= 26; i++) {
    let temp = "";
    for (let j = 0; j < password.length; j++) {
      let sASCII = password.charCodeAt(j);
      sASCII += i;
      if (sASCII > 122) sASCII -= 26;
      temp += String.fromCharCode(sASCII);
    }
    target.push(temp);
  }

  for (let i = 0; i < N; i++) {
    const a = [...target];
    if (a.filter(word => word.includes(words[i])).length === 1) {
      answer = a.filter(word => word.includes(words[i]))[0];
    }
  }

  return answer;
}
