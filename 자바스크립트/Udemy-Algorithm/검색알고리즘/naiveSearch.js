function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

naiveSearch("lorie loled", "lol");

// 해당하는 문자열이 있는지 판별하는 알고리즘
// 시간복잡도
// 최적 : O(n)
// 평균 : O(n^2)
// 최악 : O(n^2)