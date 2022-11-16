const fs = require('fs');
let input = fs.readFileSync('Study/elice-study/js100/40/input.txt').toString().split('\n');
//console.log(input);

//제한무게 50
const rimitWeigth = input.shift();
//인원 수 5
const rimitMember = input.shift();


// input =[ '20', '20', '20', '20', '20' ]
input = input.map(Number);
// input  = [ 20, 20, 20, 20, 20 ]
console.log(input);

let weigthSum = 0;
let count= 0
input.reduce((acc,cur)=>{
   weigthSum += cur;
 
    if(weigthSum<=rimitWeigth){
        count++
    }
},0)
console.log(count);
