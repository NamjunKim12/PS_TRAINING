const fs = require("fs");
const root = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a, b] = fs.readFileSync(root, "utf8").toString().split(" ");

const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const date = new Date(`2007-${a}-${b}`).getDay();

console.log(week[date]);
