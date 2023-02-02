//n개의집 빨강 초록 파랑 중 하나로 색칠 해야함
//dp[n] = dp[]
const e = require("cors");
const fs = require("fs");
const input = fs
  .readFileSync("CodingTest/BaekJoon/알고리즘_기초1/RGB거리/input.text")
  .toString()
  .trim()
  .split(`\n`);

let caseNum = input.shift() * 1;

const m = input.map((el) => el.trim().split(" ").map(Number));
console.log('m : ',m);

function solution() {
  let answer = 0;
  const dp = Array.from(Array(caseNum), () => Array(3).fill(0));
  //[ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ]
  dp[0][0] = m[0][0];
  dp[0][1] = m[0][1];
  dp[0][2] = m[0][2];
  // [ [ 26, 40, 83 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]
  for (let i = 1; i < caseNum; i++) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + m[i][0]; //r
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + m[i][1]; //g
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + m[i][2]; //b
    
  }
  console.log('for : ',dp);
  
 answer =Math.min(...dp[caseNum-1])
 return answer
}
console.log(solution());

//집의 수 만큼 반복문 둘린다
//집의
