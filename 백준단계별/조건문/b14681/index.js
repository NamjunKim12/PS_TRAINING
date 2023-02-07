const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const [X, Y] = input;
    if(X > 0){
        Y > 0 ? console.log(1) : console.log(4);
    }
    if(X < 0){
        Y > 0 ? console.log(2) : console.log(3);
    }
    process.exit();
});