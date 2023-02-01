function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// 시간복잡도
// 최적 : O(1)
// 평균 : O(n)
// 최악 : O(n)

