function insertionSort (array){
    for (let i = 1; i < array.length; i++){
        let currentValue = array[i];
        for(var j = i - 1; j >= 0 && array[j] > currentValue; j--){
            array[j+1] = array[j];
        }
        array[j+1] = currentValue;
    }
    return array;
}

insertionSort([2,1,9,76,4]);

//시간복잡도
//최적 : O(n)
//평균 : O(n^2)
//최악 : O(n^2)

//공간복잡도
//O(1)