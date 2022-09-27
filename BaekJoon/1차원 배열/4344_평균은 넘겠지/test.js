const fs = require('fs');
let input = fs.readFileSync('BaekJoon/1차원 배열/4344_평균은 넘겠지/input.text').toString().split('\n');



//테스트 케이스 수
let testNum = +input[0];


//학생 수 , 점수 분리
for(let i = 1; i<=testNum; i++){
  
     let score = input[i].split(' ');  //
     let snum = score.shift()*1;//각 줄 학생 수
     let count = 0;
     score =  score.map(num=>+num);
    // console.log(score);

     //평균 구하기
     let avg  = score.reduce((acc,cv)=>{ return acc += cv; },0)  
     avg /= snum;
    // console.log(avg);
     
     //한 반에 몇 명이 평균 넘는지 카운트 하기
     for(let j = 0; j<score.length; j++){
        if(score[j]>avg){
            count++;
        }
     }

     //한 반에 평균을 넘는 비율 구하기
     let answer = ((count/snum)*100).toFixed(3);
   
     console.log(answer+'%');

}





