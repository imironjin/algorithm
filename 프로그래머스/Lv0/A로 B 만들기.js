// [문제] https://school.programmers.co.kr/learn/courses/30/lessons/120891

// [나의 풀이]
// 시간 복잡도 : O(N log N)
function solution(before, after) {
  return [...before].sort().join("") === [...after].sort().join("") ? 1 : 0;
}
