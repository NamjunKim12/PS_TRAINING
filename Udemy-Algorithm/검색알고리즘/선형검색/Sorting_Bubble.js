function bubbleSort(arr){
    const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }
}

//Optimized Bubble Sort
function bubbleSort(arr){
    const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
    for(let i = arr.length; i > 0; i--){
        let noSwap = true;
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1);
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return arr;
}