// 1.
const fs = require("fs");
const [L, str] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = Array.from(str);

// 2.
const r = 31n;
const M = 1234567891n;

// 3.
let result = 0n;
let pow = BigInt(1);
for (let i = 0; i < L; i++) {
  result += BigInt(arr[i].charCodeAt(0) - 96) * pow;
  pow *= r;
}

// 4.
if (result >= M) result %= M;
console.log(Number(result));
