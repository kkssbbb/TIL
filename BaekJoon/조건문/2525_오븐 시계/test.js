const fs = require('fs');
let input = fs.readFileSync('BaekJoon/조건문/2525_오븐 시계/input.txt').toString().split('\n');
let arr = input[0].split(' ');

let h = +arr[0]; 
let m =  +arr[1];
let givenT = +input[1];


console.log(h,m,givenT);


solutoin(h,m,givenT);

function solutoin(h,m,givenT){

  m += givenT;
  
  if(m>=60){
    h += Math.floor(m/60);
    m %= 60;
  }
  if(h >= 24){
    h %= 24;
  }
  console.log(h,m);
  
}
 
