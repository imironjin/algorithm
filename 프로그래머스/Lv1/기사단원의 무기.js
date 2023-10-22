// [문제] https://school.programmers.co.kr/learn/courses/30/lessons/136798

// [나의 풀이]
// 시간 복잡도 : O(N^2)

function solution(number, limit, power) {
  var answer = 0;
  const divisor = new Array(number + 1).fill(0);
  let member = [];
  for (let i = 1; i <= number; i++) {
    for (let j = i; j <= number; j += i) {
      divisor[j]++;
    }
  }
  member = divisor.splice(1);
  for (let i = 0; i < member.length; i++) {
    if (member[i] > limit) {
      answer += power;
    } else {
      answer += member[i];
    }
  }
  return answer;
}
