//맵 객체 생성
//포문 participant크기만큼
//포문안에서 map.set participant+1 , completion-1

//포문 map 크기만큼
//포문안에서 조건 kv v값이 0이상 리턴(answer) 
function solution(participant, completion) {
    const map = new Map();
    
    for(let i=0; i<participant.length; i++){
        const a = participant[i], b=completion[i];
        
        map.set(a,(map.get(a)||0)+1);
        map.set(b,(map.get(b)||0)-1);
        
    }
    
    for(a of map){

        if( a[1]>0){
            return a[0];
        }
    }
    var answer = '다 완주';
    return answer;
}