const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(root, "utf8")
  .toString()
  .trim()
  .split("\n");
const [N, M, V] = input.shift().split(" ").map(Number);
const edges = input.map(v => v.split(" ").map(Number));
const graph = [...Array(N + 1)].map(() => []);
edges.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

console.log(graph);

//푸는중
