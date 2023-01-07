const fs = require('fs');
let input = fs.readFileSync('BaekJoon/15552_빠른 A+B/input.txt').toString().split('\n');

let testNum = +input[0];
let answer = '';

for(let i= 1; i<=testNum; i++){
    let [a,b] = input[i].split(" ");
    
    answer += (+a)+(+b)+"\n";
    

}


console.log(answer);
