const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = +fs.readFileSync(root, "utf8").toString().trim();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
}

function solution(input) {
  const queue = new Queue();
  for (let i = 1; input >= i; i++) {
    queue.push(i);
  }

  while (queue.size > 1) {
    queue.dequeue();
    let a = queue.first.value;
    queue.dequeue();
    queue.push(a);
  }

  return queue.first.value;
}
console.log(solution(input));
