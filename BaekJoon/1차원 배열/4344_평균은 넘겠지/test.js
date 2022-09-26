const fs = require('fs');
let input = fs.readFileSync('BaekJoon/1차원 배열/4344_평균은 넘겠지/input.text').toString().split('\n');


// 테스트 케이스 개수
let num =  +input[0];


for(let i = 1; i<=num; i++){
    let score = input[i].split(' '); //점수
    let num2 = +score.shift() //시험본 학생 수
    //console.log(score, num2);
    score = score.map(num=>+num);
    //console.log(score);
    
    let avg = score.reduce((acc,cV,idx)=>{ return acc += cV *1},0);

        avg /=num2;

    
      console.log(avg);
      
}
