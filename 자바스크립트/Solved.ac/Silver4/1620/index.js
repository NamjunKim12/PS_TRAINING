const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim().split('\n');

console.log(solution(input));

function solution(input) {
    const [N, M] = input[0].split(' ').map(a=> +a);
    const pokemonList = input.slice(1, N+1);
    const questions = input.slice(N+1);
    const answer = [];
    const pokemonMap = new Map(pokemonList.map((pokemon, index) => [pokemon, index+1]));
    questions.forEach(question => {
        if (isNaN(+question)) answer.push(pokemonMap.get(question));
        else answer.push(pokemonList[+question-1]);
    });
    return answer.join('\n'); 
};