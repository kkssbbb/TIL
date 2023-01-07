const fs = require('fs');
let input = fs.readFileSync('BaekJoon/조건문/1330_두 수 비교하기/14681_사분면 고르기/input.txt').toString().split('\n');
console.log(input);

const x = input[0];
const y = input[1];
 
if(x>0 && y>0){
    console.log(1);
    
}else if(x<0 && y>0){
    console.log(2);
    
}else if(x<0 && y<0){
    console.log(3);
    
}else if(x>0 && y<0){
    console.log(4);
    
}