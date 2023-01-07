const fs = require('fs');
let input = fs.readFileSync('BaekJoon/반복문/10952_A+b-5/input.txt').toString().split('\n');

let answer = 0;
for(let i = 0; i<input.length-1; i++){
   let [a,b] = input[i].split(' ');

   answer = (+a)+(+b);

   if(answer === 0){
    break;
   }else{
    console.log(answer);
    
   }

}




