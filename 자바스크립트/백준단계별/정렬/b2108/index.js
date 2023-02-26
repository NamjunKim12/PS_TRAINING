const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [count, ...input] = fs.readFileSync(root, 'utf8').toString().trim()
.split('\n').map(a => +a);

const counts = input.reduce((pv, cv)=>{
    pv[cv] = (pv[cv] || 0) + 1;
    return pv;
}, {});

const result = [];
for (let key in counts) {
    result.push([key, counts[key]]);
}

result.sort((first, second) => {
    return +second[1] - +first[1];
});

const modeKeyValue = result[0][1]

const c = result.filter(a=> a[1] === modeKeyValue).sort((a,b)=> +a[0] - +b[0]);

const a = Math.round(input.reduce((acc, curr)=> acc + curr) / count)

if(count === 1){
    console.log(input[0]);
    console.log(input[0]);
    console.log(input[0]);
    console.log(0);
}

if(count !== 1){
    console.log( a === -0 ? 0 : a);
    console.log(input.sort((a,b)=>a-b)[Math.floor(count/2)]);
    console.log(c.length === 1 ? +c[0][0] : +c[1][0])
    console.log(Math.max(...input) - Math.min(...input));
}

