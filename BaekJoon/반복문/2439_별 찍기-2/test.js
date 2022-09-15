const fs = require('fs');
let input = fs.readFileSync('BaekJoon/반복문/2439_별 찍기-2/input.txt').toString();

let num = +input[0];


for (let i = 1; i <= num; i++) {
    console.log('*'.repeat(i));
    
}


/*  
1 
3
5
7
9
*/
