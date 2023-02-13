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
  const deque = [];
  let answer = "";

  for (let i = 0; i < count; i++) {
    const [command, item] = input[i];
    switch (command) {
      case "push_front":
        deque.unshift(item);
        break;
      case "push_back":
        deque.push(item);
        break;

      case "pop_front":
        answer += deque.length !== 0 ? deque.shift() : -1;
        answer += " ";

        break;

      case "pop_back":
        answer += deque.length !== 0 ? deque.pop() : -1;
        answer += " ";

        break;

      case "size":
        answer += deque.length;
        answer += " ";

        break;

      case "empty":
        answer += deque.length === 0 ? 1 : 0;
        answer += " ";

        break;

      case "back":
        answer += deque.length === 0 ? -1 : deque[deque.length - 1];
        answer += " ";

        break;

      case "front":
        answer += deque.length === 0 ? -1 : deque[0];
        answer += " ";
        break;
      default:
        break;
    }
  }

  console.log(answer.split(" ").join("\n"));
}
