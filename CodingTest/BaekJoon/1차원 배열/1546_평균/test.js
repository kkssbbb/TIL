const fs = require('fs');

let input = fs.readFileSync('BaekJoon/1차원 배열/1546_평균/input.text').toString().trim().split('\n');


console.log(input);

let n = +input[0] //과목 개수

let 과목합 = 0;

let average =0;

let subject =  input[1].split(' ');
subject = subject.map(num => +num); 

console.log(n,subject);

// 자기 점수 중에 최댓값을 골랐다. 이 값을 M
let m = Math.max.apply(null,subject); 


console.log(m);
//  모든 점수를 점수/M*100

subject =  subject.map(num => num/m*100);

console.log(subject);

//가짜 평균 구하기
for(let i= 0; i<subject.length; i++){

    과목합 += subject[i];
   
}
average = 과목합/subject.length ;
console.log(average);
