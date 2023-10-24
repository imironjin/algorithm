// [문제] https://school.programmers.co.kr/learn/courses/30/lessons/138477

// [나의 풀이]
// 시간 복잡도 :  O(N^2 log N)

function solution(k, score) {
  var answer = [];
  // 명예의 전당
  let hall = [];
  for (let i = 0; i < score.length; i++) {
    hall.push(score[i]);
    // 오름차순 정렬
    hall.sort((a, b) => a - b);

    // i가 k보다 커질 때,
    if (i > k - 1) {
      // 오름차순으로 정렬한 hall[0] 값이 score[i] 크면 continue;
      if (hall[0] > score[i]) {
        continue;
      } else {
        // 맨 앞의 요소 제거
        hall.shift();
        answer.push(hall[0]);
      }
    } else {
      answer.push(hall[0]);
    }
  }
  return answer;
}
