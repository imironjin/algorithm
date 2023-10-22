// [문제] https://school.programmers.co.kr/learn/courses/30/lessons/133499

// [나의 풀이]
// 시간 복잡도 :  O(N * M) => for문: O(N) * replaceAll의 문자열 치환: O(M)

function solution(babbling) {
  var answer = 0;
  let temp = ""; // 빈 문자열로 초기화

  for (let i = 0; i < babbling.length; i++) {
    temp = babbling[i]
      .replaceAll("aya", "1")
      .replaceAll("ye", "2")
      .replaceAll("woo", "3")
      .replaceAll("ma", "4");
    if (
      !temp.includes("11") &&
      !temp.includes("22") &&
      !temp.includes("33") &&
      !temp.includes("44") &&
      !/[a-z]/.test(temp)
    ) {
      answer += 1;
    }
  }

  return answer;
}
