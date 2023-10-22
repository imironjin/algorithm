// [문제] https://school.programmers.co.kr/learn/courses/30/lessons/135808

// [나의 풀이]
// 시간 복잡도 : O(N log N)

function solution(k, m, score) {
  var answer = 0;
  let appleBox = [];
  // score를 오름차순으로 정렬
  let ascScore = score.sort((a, b) => b - a);
  // m개 만큼 박스에 추가
  for (let i = 0; i < score.length; i += m) {
    appleBox.push(ascScore.slice(i, i + m));
  }
  // 남는 사과 버리기
  if (appleBox[appleBox.length - 1].length < m) {
    appleBox.pop();
  }
  // 사과 박스에서 가장 낮은 점수의 사과로 계산
  for (let i = 0; i < appleBox.length; i++) {
    answer += Math.min(...appleBox[i]) * m;
  }
  return answer;
}
