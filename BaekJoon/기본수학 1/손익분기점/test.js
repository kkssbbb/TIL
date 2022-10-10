const fs = require('fs');
let input = fs.readFileSync('BaekJoon/기본수학 1/손익분기점/input.txt').toString().split(' ')



let 가변비용 = +input[1];
let 책정금액 = +input[2];
let sum = 0;
let 책정금액sum = 0
let answer = 0


let n = 1;
do{
    const 고정비용 = +input[0];
    n++
    sum = 고정비용+(가변비용*n)
    책정금액sum = 책정금액*n

}
while(sum != 책정금액sum){
    
    answer = n+1
    console.log(answer>2100000001? -1 : answer);
}

