// [문제] https://school.programmers.co.kr/learn/courses/30/lessons/120905

// [나의 풀이]
// 시간 복잡도 : O(N)
function solution(n, numlist) {
  var answer = [];
  for (let i = 0; i < numlist.length; i++) {
    if (numlist[i] % n === 0) answer.push(numlist[i]);
  }
  return answer;
}

// [다른 풀이]
// 시간 복잡도 : O(N)
// JS의 메소드인 filter을 사용해서도 문제를 풀 수 있다.
function solution(n, numlist) {
  return numlist.filter((num) => num % n === 0);
}
