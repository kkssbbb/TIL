const fs = require('fs');
let input = fs.readFileSync("BaekJoon/반복문/10871_x보다 작은 수/input.txt").toString().split('\n');

let a = input[0].split(' ');

let testNum = a[0]; /* 10 */
let x = a[1]; /* 5 */

let N = input[1].split(' ').map(Number);

let answer="";

for(let i = 0; i<testNum; i++){
    if(x>N[i]){
        
        answer += N[i]+" ";
    }

}


