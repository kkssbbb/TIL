const fs = require('fs');
let input = fs
    .readFileSync('BaekJoon/1차원 배열/3052_나머지/input.text')
    .toString()
    .split('\n');

input = input.map(num => +num);

console.log(input);
let arr = input.map(num => num % 42);



let a = new Set(arr);
let count = a.size
console.log(count);
