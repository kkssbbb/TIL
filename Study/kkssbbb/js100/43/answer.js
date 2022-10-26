//**사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.**
const fs = require('fs');
const input = +fs.readFileSync('js100/43/input.txt').toString();

let answer;

function solution(num){

           answer =  num.toString(2);

    return answer;
}

console.log(solution(input));
 
