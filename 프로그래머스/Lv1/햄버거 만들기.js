// [문제] https://school.programmers.co.kr/learn/courses/30/lessons/133502

// [나의 풀이]
// 초기 풀이
// 시간 복잡도 : O(N^2)

function solution1(ingredient) {
  let answer = 0;
  // 조금이라도 오버헤드를 줄이기 위해서 length를 가변적으로 조절하였음
  let length = ingredient.length;
  for (let i = 0; i < length; i++) {
    if (
      ingredient[i] === 1 &&
      ingredient[i + 1] === 2 &&
      ingredient[i + 2] === 3 &&
      ingredient[i + 3] === 1
    ) {
      answer += 1;
      // 찾은 패턴 1231은 배열에서 삭제
      ingredient.splice(i, 4);
      // 찾은 패턴의 길이만큼 index 감소
      i -= 4;
      length -= 4;
    }
  }
  return answer;
}

// [나의 풀이]
// 수정한 풀이
// 시간 복잡도 : O(N)

function solution2(ingredient) {
  let count = 0;
  const stack = []; // 재료를 저장할 스택
  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]); // 스택에 현재 재료 추가

    if (
      stack[stack.length - 4] === 1 &&
      stack[stack.length - 3] === 2 &&
      stack[stack.length - 2] === 3 &&
      stack[stack.length - 1] === 1
    ) {
      count++;
      for (let i = 0; i < 4; i++) {
        stack.pop();
      }
    }
  }
  return count;
}
