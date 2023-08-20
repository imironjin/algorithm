// [문제] https://school.programmers.co.kr/learn/courses/30/lessons/120896

// [나의 풀이]
// 시간 복잡도 : O(N)
function solution(s) {
  let stringCount = {};
  for (const string of s) {
    if (stringCount[string]) {
      stringCount[string]++;
    } else {
      stringCount[string] = 1;
    }
  }

  let answer = [];
  for (const string in stringCount) {
    if (stringCount[string] === 1) {
      answer.push(string);
    }
  }
  return answer.sort().join("");
}
