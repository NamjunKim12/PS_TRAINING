const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, m] = fs.readFileSync(root, 'utf8').toString().trim().split(' ').map(a=> +a);

const prime = { 1: true };

for (let i = 2; i <= Math.ceil(Math.sqrt(m)); i++) {
   if (prime[i]) continue;

   for (let j = i ** 2; j <= m; j += i) {      
      prime[j] = true;
   }
}

const results = [];

for (let i = n; i <= m; i++) {
    if (!prime[i]) results.push(i);
    
}

console.log(results.join("\n"));