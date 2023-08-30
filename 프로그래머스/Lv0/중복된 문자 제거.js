// [문제] https://school.programmers.co.kr/learn/courses/30/lessons/120888

// [나의 풀이]
// 시간 복잡도 : O(N^2)
function solution(my_string) {
  let arr = [];

  for (let i = 0; i < my_string.length; i++) {
    if (!arr.includes(my_string[i])) {
      arr.push(my_string[i]);
    }
  }

  return arr.join("");
}

// [다른 풀이]
// 시간 복잡도 : O(N)
// JS의 중복이 없는 Set을 활용할 수 있다.
// 기존의 시간 복잡도를 O(N^2) 에서 O(N) 으로 줄일 수 있다.
function solution(my_string) {
  return [...new Set(my_string)].join("");
}
