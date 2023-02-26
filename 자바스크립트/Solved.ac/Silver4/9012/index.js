const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [count, ...target] = fs.readFileSync(root, 'utf8').toString().trim().split('\n');

const result = target.map((v) => {
    const stack = [];
    for (let i = 0; i < v.length; i++) {
        if (v[i] === '(') {
        stack.push(v[i]);
        } else {
        if (stack.length === 0) {
            stack.push(v[i]);
            break;
        }
        stack.pop();
        }
    }
    return stack.length === 0 ? 'YES' : 'NO';
    });

console.log(result.join('\n'));