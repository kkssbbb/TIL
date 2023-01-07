const fs = require('fs');
let input = fs.readFileSync('BaekJoon/조건문/2480_주사위 세개/input.txt').toString().split(' ');



let dice1 = +input[0];
let dice2 = +input[1];
let dice3 = +input[2];




/* 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다. 
같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다. 
모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.   */

let answer = 0;

solution(dice1,dice2,dice3);

function solution(d1,d2,d3){

    if(d1 === d2&&d2 === d3 && d1===d3){
        answer = 10000+d1*1000
        return console.log(answer);

    }else if(d1 ==d2 ||d2==d3){
        return console.log(1000+d2*100);
        
   }else if(d1==d3){
     return console.log(1000+d1*100);
   }else{
        answer = Math.max(d1,d2,d3)*100;
        return  console.log(answer);
    }

}

