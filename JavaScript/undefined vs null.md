# 데이터 타입

# 🤼 undefined vs null

변수의 값이 둘 다 비어있다는 뜻인데 왜 두가지 타입으로 나눠 놨을 까?유  
  
  
  

## 🫵 결론부터

**_undefined_**는 변수는 선언되어있지만 자료형이 결정되지 않은 변수(자스는 동적할당)  
  
**_null_**은 자료형은 객체이며 값이 비어있는 변수이다.  
즉, 변수가 아무런 객체를 참조하지 않음을 명시적 표현  
  
위 두가지의 차이로 값이 비어있다는 같은 의미를 두 가지의 타입으로 나눔  
  
  

## 👀 좀 더 자세히

## 📌undefined

-   값을 할당하지 않은 변수를 undefined type이라고한다.
-   undefined는 개발자가 할당한 값이아니라 자바스크립트엔진이 undefined로 초기화한다.  
    따라서  
    이제 우리는 알 수 있다. 콘솔에 언디파인드가 뜬다. =  
    변수에 값을 할당해 주지않았구나 하고 변부의 값을 할당하지 않았다는걸 바로 알 수 있다. 👏👏

즉 변수를 선언만하고 할당하지 않음(선언하지 않은 변수도 콘솔에 undefined라고 뜨지만 값이 undefined 인건아님.)

```
var a;
console.log(a); // undefined
```

```
function test() {
  //var 의 함수레벨 스코프 응용예
  var a = 10;
}
```

```
console.log(typeof a); //undefined
console.log(typeof a === "undefined"); //true
```

## 📌null

-   null은 js에서 원시값중 하나로, 어떤값이 의도적으로 비어있음을 표현한다.  
    즉 변수가 아무런 객체를 참조하지 않다를 명시적으로 의미
-   타입을 나타내는 문자열을 반환하는 typeof 연산자로 null 값을 연산해 보면 null이 아닌 object가 나온다. 이는 자바스크립트의 설계상의 오류라고하네요

```
var foo = null;
console.log(typeof foo); // object
```

```
console.log(undefined == null); // true  : == 은 자동형변환 비교연산자 이므로 피연산자 자료형에 맞춰 비교함으로 자료형은 다르지만 값이 같으므로 true
console.log(undefined === null); //false : 자료형비교는 각각ㅁ undefined , object 로 false
```

### ref

-   [mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)
-   [참고 블로그](https://enarastudent.tistory.com/entry/null%EA%B3%BC-undefined%EC%9D%98-%EC%B0%A8%EC%9D%B4)
-   \-[참고](https://poiemaweb.com/js-data-type-variable)\-