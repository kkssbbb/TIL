const fs = require('fs');
let input = fs.readFileSync('BaekJoon/1차원 배열/2526_최대값/input.text').toString().split('\n');

//최대값 구하고
//인덱스번호 +1 출력

let arr  = input.map(num => +num);



let max = Math.max(...arr);
let indexNum = arr.indexOf(max)+1;

console.log(max);
console.log(indexNum);

