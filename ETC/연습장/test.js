// 배열 누적합 구하기

let arr = [1,2,3,4,5]


/* let result =0;
arr.forEach(num=>{
  result += num;
}); */

let result = arr.reduce((arr,crr)=>{
  return arr+crr;
},0);

console.log(result);
