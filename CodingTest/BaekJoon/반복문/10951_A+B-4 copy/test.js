const fs = require("fs");
let input = fs.readFileSync('BaekJoon/반복문/10951_A+B-4/input.txt').toString().split('\n');


answer = 0;
for(let i= 0; i<input.length-1; i++){ //-1 을 하지않아도 출력이 같습니다.

let [a, b] = input[i].split(" ");

answer = (+a)+(+b);

console.log(answer);

}
