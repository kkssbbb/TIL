const fs  = require('fs');
let input = fs.readFileSync('BaekJoon/1차원 배열/10818_최소, 최대/input.text').toString().split('\n');

console.log(input);

let arr = input[1].split(' ');

arr = arr.map(number => +number);
console.log(arr);


const min = Math.min.apply(null,arr);
const max = Math.max(...arr);

console.log(min, max);
