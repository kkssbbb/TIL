const fs = require('fs');
let input = fs.readFileSync('BaekJoon/반복문/11021_A+B-7/input.txt').toString().split("\n");


let testNum = input[0];
let answer = 0;

for(let i=1; i<=testNum; i++){
    let [x , y] = input[i].split(" ");
    answer = (+x)+(+y);
    console.log(`Case #${i}: ${answer}`);
    
}



