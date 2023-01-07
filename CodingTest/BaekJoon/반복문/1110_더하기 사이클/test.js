const fs = require("fs");
let input = fs
    .readFileSync('BaekJoon/반복문/1110_더하기 사이클/input.txt')
    .toString();

let n = +input;
let sum;
let count = 0;

while (true) {
    count++;
    // 10의자리 + 1의자리
    sum = Math.floor(n / 10) + (n % 10);;
    //1의자리 + sum
    n = (n % 10) * 10 + sum % 10;

    if (n == input) {
        break;
    }
}

console.log(count);
