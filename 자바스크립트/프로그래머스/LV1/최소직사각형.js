function solution(sizes) {
  let answer = 0;
  let MAX = [];
  let MIN = [];

  sizes.map((card, index) => {
    let [w, h] = card;
    if (w > h) {
      MAX.push(w);
      MIN.push(h);
    } else {
      MAX.push(h);
      MIN.push(w);
    }
  });

  return Math.max(...MAX) * Math.max(...MIN);
}
