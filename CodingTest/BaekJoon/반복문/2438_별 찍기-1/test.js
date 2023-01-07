const fs = require('fs');
let input = +fs.readFileSync('BaekJoon/반복문/2438_별 찍기-1/input.txt');


let star ='';

for(let i=0; i<input; i++){
    
    star +='*';
    console.log(star);
    
    

}