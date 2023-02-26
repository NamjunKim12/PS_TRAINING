const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [count, ...input] = fs
  .readFileSync(root, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map(a => a.split(" ").map(a => (!isNaN(+a) ? +a : a)));

solution(input);

function solution(input) {
  const queue = [];
  let answer = "";

  for (let i = 0; i < count; i++) {
    const [command, item] = input[i];
    switch (command) {
      case "push":
        queue.push(item);
        break;

      case "pop":
        answer += queue.length !== 0 ? queue.shift() : -1;
        answer += " ";

        break;

      case "size":
        answer += queue.length;
        answer += " ";

        break;

      case "empty":
        answer += queue.length === 0 ? 1 : 0;
        answer += " ";

        break;

      case "back":
        answer += queue.length === 0 ? -1 : queue[queue.length - 1];
        answer += " ";

        break;

      case "front":
        answer += queue.length === 0 ? -1 : queue[0];
        answer += " ";
        break;
      default:
        break;
    }
  }

  console.log(answer.split(" ").join("\n"));
}
