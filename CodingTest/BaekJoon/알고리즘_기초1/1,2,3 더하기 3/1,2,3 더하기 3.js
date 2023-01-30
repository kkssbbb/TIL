const fs = require("fs");
const input = fs
  .readFileSync("CodingTest/BaekJoon/알고리즘_기초1/1,2,3 더하기 3/input.text")
  .toString()
  .split(`\n`);
const inputArr = [];

for (num of input) {
  inputArr.push(num * 1);
}

//정수 n이 주어졌을때 n을 1,2,3의 합으로 나타내는 방법의 수를 구하는 프로그램 만들기

//solution function
function solution(inputArr) {
  const caseNum = inputArr.shift(); //3
  const arr = [0, 1, 2, 4]; //0~3 1,2,3으로 표현할 수 있는 경우의 수
  const maxNum = Math.max(...inputArr);
  const answerArr = [];
  for (let i = 4; i <=maxNum; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2] + arr[i - 3]) % 1000000009;
  }

  for (let i = 0; i < caseNum; i++) {

    answerArr.push(arr[inputArr[i]]);
  }
  return answerArr;
}
solution(inputArr);
