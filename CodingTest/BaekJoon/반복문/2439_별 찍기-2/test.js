const fs =  require('fs');
let input = +fs.readFileSync('BaekJoon/반복문/2439_별 찍기-2/input.txt').toString();

console.log(input);

let star = '';
let blank = '';

for(let i=0; i<input; i++){
    star += '*';
    for(let j = 0; j<input-(i+1); j++){
        blank += " ";
    }
    console.log(blank+star);
    blank ='';
    
    
    
}