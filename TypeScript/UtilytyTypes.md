# 유틸리티 타입

## Partial< T >
파셜타입은 인터페이스 객체의 프로퍼티를 다 쓰지않고 선택해서 사용할 수 있다.
```ts
interface Human{
    tall: number;
    name: string;
    gender: string;
}
// 위 코드는 아래와 같다고 볼 수 있다.
// interface Human{
//     tall?: number;
//     name?: string;
//     gender?: string;
// }

let hong:  Partial<Human> = {
    tall: 184,

}

console.log(hong)
/* {
  "tall": 184
}  */
```

## Omit<T,k>
특정 프로퍼티를 생략하고 사용할 수 있다.
k는 제거할 프로퍼티를 정해주는 자리이다..
```ts
interface Human{
    tall: number;
    name: string;
    gender: string;
}


let hong:  Omit<Human,"name"|'gender'> = {
    tall: 184,

}

console.log(hong)

name,gender프로퍼티를 제외하고 사용할 수있다.

console.log(hong)
/* {
  "tall": 184
}  */
```


## Pick<T,k>
T = 타입을 지정해준다. <br>
K = 지정된 타입객체에 원하는 프로퍼티를 골라 타입을 구성해준다.
```ts
interface Human{
    tall: number;
    name: string;
    gender: string;
}


let hong:  Pick<Human,"tall'> = {
    tall: 184,
}

console.log(hong)


console.log(hong)
/* {
  "tall": 184
}  */
```

