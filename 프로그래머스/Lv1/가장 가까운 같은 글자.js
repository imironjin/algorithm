// [문제] https://school.programmers.co.kr/learn/courses/30/lessons/142086

// [나의 풀이]
// 시간 복잡도 : O(n^2)
function solution(s) {
  let answer = [];
  let temp = [];
  for (let i = 0; i < s.length; i++) {
    // 배열에 이미 있으면 길이 - 마지막인덱스
    if (temp.includes(s[i])) {
      answer.push(temp.length - temp.lastIndexOf(s[i]));
    } else {
      answer.push(-1);
    }
    // 배열에 글자 넣어주기
    temp.push(s[i]);
  }
  return answer;
}
