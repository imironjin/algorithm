// [문제] https://school.programmers.co.kr/learn/courses/30/lessons/133502

// [나의 풀이]
// 시간 복잡도 : O(N)

function solution(food) {
  var answer = "";
  let temp = [];
  for (let i = 1; i < food.length; i++) {
    if (food[i] < 2) continue;
    else {
      temp.push(i.toString().repeat(parseInt(food[i] / 2)));
    }
  }
  answer = temp.join("") + "0" + temp.reverse().join("");

  return answer;
}
