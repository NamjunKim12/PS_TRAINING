const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [key, cipher] = fs
  .readFileSync(root, "utf8")
  .toString()
  .trim()
  .split("\n");

//시간복잡도 초과 다시풀어야함

solution(key, cipher);

function solution(key, cipher) {
  const n = key.length;
  const rows = Math.floor(cipher.length / n);
  const cols = n;
  const temp = [];
  const ThirdTemp = [];
  let answer = "";
  const enCryptKey = key.split("").sort();

  for (let i = 0; i < cipher.length; i += rows) {
    temp.push(cipher.slice(0 + i, rows + i));
  }
  let num = 0;
  let target = temp.map((item, index) => enCryptKey[index] + item);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < cols; j++) {
      if (key[i] === target[j][0]) {
        ThirdTemp.push(target[j]);
        num = j;
        break;
      }
    }
    target = target.filter(temp => temp !== target[num]);
  }

  for (let i = 1; i <= rows; i++) {
    for (let j = 0; j < cols; j++) {
      answer += ThirdTemp[j][i];
    }
  }

  console.log(answer);
}
