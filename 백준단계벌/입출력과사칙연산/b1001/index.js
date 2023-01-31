const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const file = fs.readFileSync(root, 'utf8').toString().trim().split(' ').map( a => +a );

// 문제
// 두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.
// 입력
// 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
// 출력
// 첫째 줄에 A-B를 출력한다.

const [a, b] = file;

console.log(a - b);