const fs =  require('fs');
let input = fs.readFileSync('Study/elice-study/js100/37/input.txt').toString().split(' ');



let list = input.reduce((accu, curr) => { 
    accu[curr] = (accu[curr] || 0)+1; 
    return accu;
  }, {});
//console.log(list);


let keys = Object.keys(list);
//console.log(keys);


const listArr = Object.entries(list);


let topMember;
for(let i = 0; i<listArr.length-1; i++){
  
    if(listArr[i][1] > listArr[i+1][1]){
        topMember = listArr[i]; 
        topMember = topMember[0];
        votes = listArr[i][1];
    }
    
}
console.log(`${topMember}(이)가 총 ${votes}표로 반장이 되었습니다.`);


