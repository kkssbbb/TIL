const fs = require('fs');
const input = fs.readFileSync('CodingTest/BaekJoon/알고리즘_기초1/1,2,3 더하기 3/input.text').toString().split(`\n`);

const inputArr = []
for(inputNum of input){
    inputArr.push(inputNum *1);
}

const caseNum = inputArr.shift(); //3
const inputMaxNum = Math.max(...inputArr) //10

//dp(n) = dp(n-1)+dp(n-1)+dp(n-1);

const arr = [0,1,2,4];// 0123 경우의 수

for(let i =4; i<=inputMaxNum; i++){
    arr[i] = arr[i-1]+arr[i-2]+arr[i-3] %1000000009;
}
for(i of inputArr){
    console.log(arr[i]);
}
