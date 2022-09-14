const fs = require('fs');
let input = fs.readFileSync('BaekJoon/반복문/11022_A+B-8/input.txt').toString().split('\n');

let testNum = input[0];
let answer = 0;
/* console.log(input); */


for(let i=1; i<=testNum; i++){
    
    let [a, b] = input[i].split(" ");
    answer = (+a)+(+b)
    console.log(`Case #${i}: ${a} + ${b} = ${answer}`);
    

}

