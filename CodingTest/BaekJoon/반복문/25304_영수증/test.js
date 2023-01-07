const fs = require('fs');
let input = fs.readFileSync('BaekJoon/반복문/25304_영수증/input.txt').toString().split('\n');


//총금액
let x = +input[0];

console.log(x);
//물건 종류수
let n = +input[1];
console.log(n);

//가격 a ,개수 b

let check =0;

for(let i = 2; i<n+2; i++){
    let [price, num] = input[i].split(' ');
    check += +price * +num;
}
console.log(check);

if(check === x){
    console.log("Yes");
}else{
    console.log("No");

    
}

