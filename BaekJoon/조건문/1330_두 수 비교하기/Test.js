const fs = require('fs');

let input = fs.readFileSync('BaekJoon/1330_두 수 비교하기/input.txt').toString().split(' ');
console.log(input);

let arr = [];
for(let i = 0; i<input.length; i++){
    arr.push(+input[i]);
   
}

console.log(arr);       

let a = arr[0];
let b = arr[1]; 

console.log(a,b);

if(a>b){
    console.log('>');    
}else if(a<b){
    console.log('<');
}else{
    console.log('=');
}



