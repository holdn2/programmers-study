// 입출력이 필요하지 않은 경우

// 테스트할 파일
const solution = require("./lv0/io-test");

// 테스트 케이스 영역

// 테스트 케이스 solution의 parameter로 제공
const result = solution();
console.log(result);

// 테스트 케이스 여러 개일 경우 아래처럼. (추후 jest 사용)
// const tests = [
//   {
//     name: "case1",
//     input: [
//       [1, 2],
//       [3, 4],
//     ],
//     expected: 0,
//   },
//   {
//     name: "case2",
//     input: [
//       [0, 0],
//       [0, 0],
//     ],
//     expected: 1,
//   },
// ];

// for (const t of tests) {
//   const output = solution(t.input);
//   const ok = Object.is(output, t.expected);
//   console.log(`${t.name}: ${ok ? "✅" : "❌"}  output=${output} expected=${t.expected}`);
// }
