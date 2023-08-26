// [문제] https://school.programmers.co.kr/learn/courses/30/lessons/120893

// [나의 풀이]
// 시간 복잡도 : O(N)

function solution(my_string) {
  let arr = [];
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === my_string[i].toLowerCase()) {
      arr.push(my_string[i].toUpperCase());
    } else {
      arr.push(my_string[i].toLowerCase());
    }
  }
  return arr.join("");
}
