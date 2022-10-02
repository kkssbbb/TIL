//d 함수구현 - 생성자를 갖는 숫자들
function d(num){
    let sum = 0;
    let strnum = String(num);

    for(let i =0; i<strnum.length; i++){
        sum += +strnum[i];
    }
    return num + sum;
}

//셀프넘버 판별 함수
function answer(){

    let arr = Array(10001).fill(0);

    for(let i=0; i<10000; i++){
        
         let dnum = d(i);
         if(dnum <= 10000){
            arr[dnum]++;
         }
    }
    for(let i=0; i<10000; i++){

         if(arr[i] === 0){
            console.log(i);
            
         }
    }

}
