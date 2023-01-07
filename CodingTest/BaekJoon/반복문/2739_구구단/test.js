const fs = require('fs');
let input = +fs.readFileSync('BaekJoon/반복문/2739_구구단/input.txt');


solution(input);

function solution(n){

    for(let i = 1; i<=9; i++){
        let answer = n*i ;
        console.log(`${n} * ${i} = ${answer}`) 
    }

}
