const { Cipher } = require('crypto');
const fs = require('fs');

let input = fs.readFileSync('BaekJoon/1차원 배열/8985_ox퀴즈/input.text').toString().trim().split('\n');

let num = Number(input[0]);

for(let i = 1; i<=num; i++){
    let count = 0;
    let sum =0
   
    for(let j = 0; j<input[i].length; j++){

       if(input[i][j] == 'O'){
        count++;
       }else{
        count=0;
       }
       sum += count;
    }

    console.log(sum);
}

