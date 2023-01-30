function solution(N, number) {
   
    const memo = [new Set()];
    
    for(let i = 1; i<=8; i++){
        memo.push(new Set([new Array(i).fill(N).join('')*1]))
        for(let j=1; j<=i; j++){
            for(const x of [...memo[j]]){
                for(const y of [...memo[i-j]]){
                    memo[i].add(x+y)
                    memo[i].add(x-y)
                    memo[i].add(x*y)
                    memo[i].add(Math.floor(x/y))
                }
            }
        }
         if(memo[i].has(number)) return i;
    }
    return -1
    
}