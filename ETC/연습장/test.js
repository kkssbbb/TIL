const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, cur, idx) => { return acc += cur; }, 0);
console.log(result);  // 15



//주어진 배열엔에 있는 양수,음수,0 의 개수를 각각 구하시요
const arr2 = [-1,-4.,2,5.0,-1];

  const answer = arr2.reduce(function(acc,cur,inx){

    if(cur>0){
      acc[0]++;
    }
    if(cur<0){
      acc[1]++;
    }
    if(cur === 0){
      acc[2]++;
    }
      return acc;
  }, [0,0,0])

  console.log(`
  양수갯수 : ${answer[0]}
  음수갯수 : ${answer[1]}
  0 갯수 : ${answer[2]}
  
  `);

  
