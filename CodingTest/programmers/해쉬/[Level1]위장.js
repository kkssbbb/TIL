// 의상 종류 수* 종류 개수 -1 === 스파이가 옷입는 경우의수(아무것도 안입을경우 제외하기위해 -1)
//맵 객체 생성 === map[의상 종류 이름 : 의상종류개수 + 1 ] (+1안입을 경우 추가)
//return cnt -1 === -1 다 안입을 경우 제외 

function solution(clothes) {
    
    const map = new Map();
    let cnt = 1;
    for(i of clothes){
        const a = i[1]
   
      map.set(a,(map.get(a)||0)+1); //{ 'headgear' => 2, 'eyewear' => 1 }
        
    }
    
    for(let n of map.values()){
      cnt *= (n+1)
    }
        return cnt-1;
    
}