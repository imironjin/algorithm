// [문제] https://school.programmers.co.kr/learn/courses/30/lessons/120883

// [나의 풀이]
// 시간 복잡도 : O(N)
function solution(id_pw, db) {
  for (let i = 0; i < db.length; i++) {
    if (JSON.stringify(id_pw) === JSON.stringify(db[i])) {
      return "login";
    } else if (id_pw[0] === db[i][0]) {
      return "wrong pw";
    }
  }

  return "fail";
}
