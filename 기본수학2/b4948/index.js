const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim().split('\n').map(a=>+a);

const prime = { 1: true };
const max = Math.max(...input) * 2;


for (let i = 2; i <= Math.ceil(Math.sqrt(max)); i++) {
   if (prime[i]) continue;

   for (let j = i ** 2; j <= max; j += i) {      
      prime[j] = true;
   }
}

input.forEach(min => {
    const max = min * 2;
    
    if(min > 0){
        let count = 0;
        for(let i = min + 1; i <= max; i++){
            if(prime[i] !== true){
                count += 1; 
            }
        }
    console.log(count);

    }
} 
    )

    //에라토스테네스의 체 