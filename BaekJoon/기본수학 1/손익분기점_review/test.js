const fs =  require('fs');

const input =  fs.readFileSync('/Users/mac/Desktop/DV/TIL/BaekJoon/기본수학 1/손익분기점_review/input.text').toString().split(' ')
//[ '1000', '70', '170' ]
const num = input.map(num => +num);

const [a,b,c] = num; 


// 손익분기점 공식 = 고정비용/(책정금액-가변비용)
// 가변비용>=책정금액 손익분기점 없음
if(b>=c){
    return console.log(-1);
}

if(b<c){
    const breackEvenPoint = Math.floor(a/(c-b)+1); 
    return console.log(breackEvenPoint);   
}
