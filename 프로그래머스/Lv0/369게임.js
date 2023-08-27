// [문제] https://school.programmers.co.kr/learn/courses/30/lessons/120891

// [나의 풀이]
// 시간 복잡도 : O(N)
function solution(order) {
  let reg = /3|6|9/g;
  return [...order.toString().matchAll(reg)].length;
}
