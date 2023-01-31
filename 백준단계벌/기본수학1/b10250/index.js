const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [testCount, ...input] = fs.readFileSync(root, 'utf8').toString().trim().split('\n');

testCount = Number(testCount);

solution(testCount, input);

function solution(testCount, input) {
    for (let i = 0; i < testCount; i++) {
        let [height, width, people] = input[i].split(/\s/).map(v => +v);

        let floor = people % height === 0 ? height : people % height || 1;
        let room = Math.ceil(people / height) || 1;

        console.log(`${(floor = room.toString().length === 1 ? `${floor}0` : floor )}${room}`);
    }
};