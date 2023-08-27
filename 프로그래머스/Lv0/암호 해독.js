// [문제] https://school.programmers.co.kr/learn/courses/30/lessons/120892

// [나의 풀이]
// 시간 복잡도 : O(N)
function solution(cipher, code) {
  var answer = "";

  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }

  return answer;
}
