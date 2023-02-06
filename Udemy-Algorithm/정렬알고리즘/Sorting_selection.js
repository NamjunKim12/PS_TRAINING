function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let lowest = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[lowest] > arr[j]){
                lowest = j;
            }
        }
        if(i !== lowest){
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }

    
    return arr;
}

//시간복잡도
//최적 : O(n^2)
//평균 : O(n^2)
//최악 : O(n^2)

//공간복잡도
//O(1)
