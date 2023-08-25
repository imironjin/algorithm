// [문제] https://school.programmers.co.kr/learn/courses/30/lessons/120895

// [나의 풀이]
// 시간 복잡도 : O(N)
function solution(my_string, num1, num2) {
  let arr = [...my_string];

  [arr[num1], arr[num2]] = [arr[num2], arr[num1]];

  return arr.join("");
}
