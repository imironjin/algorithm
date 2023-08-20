// [문제] https://school.programmers.co.kr/learn/courses/30/lessons/120899

// [나의 풀이]
// 시간 복잡도 : O(N)
function solution(array) {
  let max = 0;
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      index = i;
    }
  }
  return [max, index];
}
