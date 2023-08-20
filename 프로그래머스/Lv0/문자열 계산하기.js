// [문제] https://school.programmers.co.kr/learn/courses/30/lessons/120902

// [나의 풀이]
// 시간 복잡도 : O(N)
function solution(my_string) {
  let answer = 0;
  let arr = my_string.split(" ");

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      answer += Number(arr[i]);
    } else {
      if (arr[i] === "-") {
        answer -= Number(arr[i + 1]);
        i++;
      } else {
        answer += Number(arr[i + 1]);
        i++;
      }
    }
  }
  return answer;
}
