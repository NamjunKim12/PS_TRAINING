const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim().split('\n').map(Number);

const prime = Array(10001).fill(true);
prime[0] = false;
prime[1] = false;

for (let i = 2; i <= 100; i++) {
  for (let j = i * 2; j <= 10000; j += i) {
    prime[j] = false;
  }
}

const output = [];
for (let i = 1; i < input.length; i++) {
  const n = input[i];
  let left = right = n / 2;
  while (!prime[left] || !prime[right]) {
    left -= 1;
    right += 1;
  }
  output.push(`${left} ${right}`);
}

console.log(output.join('\n'));