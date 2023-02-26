function d(num){
    let numArr = (""+num).split('');
    let sum = num;
    for (let i = 0; i < numArr.length; i++){
        sum += +numArr[i];
    }
    return sum;
};

function sol(N){
    let number = [0, 0];
    let result = '';

    for(let i=1; i <= N; i++){
        number[d(i)] = 1;
        if(number[i] !== 1){
            result += i + '\n';
        }
    }

    console.log(result);
}

sol(10000);