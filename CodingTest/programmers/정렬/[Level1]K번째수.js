function solution(array, commands) {
    //arr 을 매개변수로 받는다.
    //commands 를 i,j,k 로 구조분해할당 해서 -1 한다.
    // arr에서 i부터 , J 까지 자른다.
    // 내림차순으로 arr을 정렬한다.
    // arr에서 k번째의 숫자를 answer[] 에 푸쉬 한다.
    // answer를 리턴한다.
    var answer = [];

    
    for(let c = 0; c<commands.length; c++){
        let [i,j,k] = commands[c]; //2 5 3
        i = i-1;
        j = j;
        k = k-1;
        
        array2 = array.slice(i,j);
        
        // 숫자 정렬
        array2.sort(function(a,b){
            return a-b; //[ 2, 3, 5, 6 ]
        })
        
        answer.push(array2[k])
    }
    
    return answer;
}
