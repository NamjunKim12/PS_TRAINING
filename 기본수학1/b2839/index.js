const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim();

console.log(solution(input));

function solution(n) {
	let ans = 0;
	while (n > 0) {
		if (n % 5 === 0) return ans + n / 5;
		n -= 3;
		ans++;
		if (n === 0) return ans;
	}
	return -1;
};
