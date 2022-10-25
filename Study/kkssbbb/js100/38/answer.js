//입력 97 86 75 66 55 97 85 97 97 95

// new Set으로 중목제거
// Math.max 로 최대값 구한후 최대값은 배열에서 제거후 3번 반복
//원래 인붓이랑 비교하여 중복된값과 같이 count 구하기

const fs = require('fs');
const { compileFunction } = require('vm');
const input = fs.readFileSync('Study/elice-study/js100/38/input.txt').toString().split(' ');

//작은순으로 정렬
let arr = input.map(x => x*1);
console.log(arr.sort());

//중복제거
let reArr = [...new Set(arr)];
console.log(reArr);

//3위까지 구하기
let maxArr =[];
for(let i = 0; i<3; i++){
    
    maxArr.push(reArr.pop());
}
console.log(maxArr);

//3등 중복포함 인원수 체크
let count = 0;
for(let i = 0; i<maxArr.length; i++){
    for(let j =0; j<arr.length; j++){

        if(maxArr[i] === arr[j]){
            count++
        }
    }
}
console.log(count);



