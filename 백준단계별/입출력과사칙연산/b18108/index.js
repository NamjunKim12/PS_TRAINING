const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const file = +fs.readFileSync(root, 'utf8').toString().trim();

// 문제
// 불교 국가인 태국은 불멸기원(佛滅紀元), 즉 석가모니가 열반한 해를 기준으로 연도를 세는 불기를 사용한다. 
// 반면, 우리나라는 서기 연도를 사용하고 있다. 불기 연도가 주어질 때 이를 서기 연도로 바꿔 주는 프로그램을 작성하시오.

// 입력
// 서기 연도를 알아보고 싶은 불기 연도 y가 주어진다.(1000 ≤ y ≤ 3000)

// 출력
// 불기 연도를 서기 연도로 변환한 결과를 출력한다.

console.log(file - 543);