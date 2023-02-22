function solution(answers) {
  const First = [1, 2, 3, 4, 5];
  const Second = [2, 1, 2, 3, 2, 4, 2, 5];
  const Third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let answerA = [1, 0];
  let answerB = [2, 0];
  let answerC = [3, 0];

  for (let i = 0; answers.length > i; i++) {
    const tempA = First[i % 5];
    const tempB = Second[i % 8];
    const tempC = Third[i % 10];

    if (answers[i] === tempA) answerA[1] += 1;
    if (answers[i] === tempB) answerB[1] += 1;
    if (answers[i] === tempC) answerC[1] += 1;
  }

  return [answerA, answerB, answerC]
    .filter(
      (item, index) => item[1] === Math.max(answerA[1], answerB[1], answerC[1])
    )
    .map(a => a[0])
    .sort((a, b) => a - b);
}
