// [문제] https://school.programmers.co.kr/learn/courses/30/lessons/120904

// [나의 풀이]
// 시간 복잡도 : O(N)
function solution(num, k) {
  const str = String(num);
  let arr = [...str];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === String(k)) {
      return i + 1;
    }
  }
  return -1;
}
