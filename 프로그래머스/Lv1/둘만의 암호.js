// [문제] https://school.programmers.co.kr/learn/courses/30/lessons/155652

// [나의 풀이]
// 시간 복잡도 : O(n^2)

function solution(s, skip, index) {
  let answer = "";
  for (let str of s) {
    // 알파벳 코드번호
    let alphabet = str.charCodeAt();

    let i = index;
    while (i > 0) {
      // z: 122, a: 97
      alphabet = alphabet === 122 ? 97 : alphabet + 1;
      // skip에 포함되지 않았을 경우에 -1
      if (!skip.includes(String.fromCharCode(alphabet))) {
        i--;
      }
    }
    answer += String.fromCharCode(alphabet);
  }
  return answer;
}
