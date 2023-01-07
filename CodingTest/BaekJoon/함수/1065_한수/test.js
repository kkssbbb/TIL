const { diffieHellman } = require('crypto');
const fs = require('fs');
const input = +fs.readFileSync('BaekJoon/함수/1065_한수/input.text').toString().trim();

console.log(input);


/* input 의 자리수를 구한다.
1의 자리 수는  다 한수
2의 자리 수도 다 한수
3의 자리수면 판별
4의 자리수도 판별
 */




//한수 판별 함수
function func(num){
    //1-99는 한수
    
    let strnum = String(num);
    if(num<100){
        return true;
    }
    
    const dif = +strnum[1] - +strnum[0];
    let befornum = +strnum[1];
    
    for(let i =2; i<strnum.length; i++){
        if(strnum[i] - befornum !== dif){
            return false
        }
        befornum = +strnum[i];
    }
    return true;
}


function answer(input){

    let count = 0 ;
    for (let i= 1; i<=input; i++){
        if(func(i)){
            count++;
        }
    }
    console.log(count);
    
}

answer(input)