// [문제] https://school.programmers.co.kr/learn/courses/30/lessons/120894

// [나의 풀이]
// 시간 복잡도 : O(N)
function solution(numbers) {
  let numObj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let reg = /zero|one|two|three|four|five|six|seven|eight|nine/g;

  let num = numbers.replace(reg, (v) => {
    return numObj[v];
  });

  return Number(num);
}
