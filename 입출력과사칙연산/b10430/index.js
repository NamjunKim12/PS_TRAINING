const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const file = fs.readFileSync(root, 'utf8').toString().trim().split(' ').map( a => +a );

//문제
// (A+B)%C는 ((A%C) + (B%C))%C 와 같을까?
// (A×B)%C는 ((A%C) × (B%C))%C 와 같을까?
// 세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.

//입력
//첫째 줄에 A, B, C가 순서대로 주어진다. (2 ≤ A, B, C ≤ 10000)

//출력
// 첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.

const [A, B, C] = file

function solution(A, B, C) {
    return `${(A+B)%C}\n${((A%C) + (B%C))%C}\n${(A*B)%C}\n${((A%C) * (B%C))%C}`
}
    

console.log(solution(A, B, C));