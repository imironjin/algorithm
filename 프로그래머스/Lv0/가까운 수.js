// [문제] https://school.programmers.co.kr/learn/courses/30/lessons/120890

// [나의 풀이]
// 시간 복잡도 : O(N log N)
function solution(array, n) {
  let arr = [];
  array = array.sort();
  for (let i = 0; i < array.length; i++) {
    arr.push(Math.abs(array[i] - n));
  }

  return array[arr.indexOf(Math.min(...arr))];
}
