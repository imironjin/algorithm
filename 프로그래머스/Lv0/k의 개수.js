// [문제] https://school.programmers.co.kr/learn/courses/30/lessons/120887

// [나의 풀이]
// 시간 복잡도 : O(j-i+1+N)
function solution(i, j, k) {
  let str = "";
  let reg = new RegExp(k, "g");

  for (i; i <= j; i++) {
    str += i;
  }

  return str.match(reg) ? str.match(reg).length : 0;
}
