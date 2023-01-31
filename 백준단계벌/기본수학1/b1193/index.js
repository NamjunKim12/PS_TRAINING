const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +fs.readFileSync(root, 'utf8').toString().trim();

let number = Number(input);
let value = 1;
while (true) {
	number -= value;
	if (number <= 0) {
		number += value;
		break;
	}
	value++;
}

if (value % 2 === 1) {
	console.log(`${value - (number - 1)}/${1 + (number - 1)}`);
} else {
	console.log(`${1 + (number - 1)}/${value - (number - 1)}`);
}

//나중에 다시 풀어보기


