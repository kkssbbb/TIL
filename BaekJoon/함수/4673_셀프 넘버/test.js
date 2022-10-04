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
        //d함수를 사용해서 1-10000까지의 수를 인자로 넣어주어 나온 값을 dnum변수에 담는다.
         let dnum = d(i);
         //10000이하까지의 수까지만 넣는다.
         if(dnum <= 10000){
            //생성해둔 arr배열에 dnum을 인덱스값으로넣어 1씩 증가시켜준다.
            arr[dnum]++;
         }
    }
    for(let i=0; i<10000; i++){
        //arr의 값이 0값을 갖는 인덱스는 셀프 넘버이기때문에 출력해준다.
         if(arr[i] === 0){
            console.log(i);
            
         }
    }

}
