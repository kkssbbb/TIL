# 함수 선언식 - Function Declearations
~~~javaScript
function 함수명(){
    로직
}
~~~
# 함수 표현식 - Function Expressions

~~~javaScript
let 함수명 = function (){
    로직
}
~~~

# 함수 선언식 vs 함수 표현식
함수 표현식은 호이스팅에 영향을 받지 않지만, 함수 선언식은 호이스팅에 영향을 받는다. <br>
그 이유는 자바스크립트는 초기화전 자바의 모든 함수선언문을 찾아서 생성해 둔다. 따라서 함수가 함수 선언문보다 위에 있어도 실행이 된다.

> 호이스팅(hoisting) : 함수를 사용할 수 있는 범위
## 함수 선언식
~~~javaScript
testFunction();

function testFunction(){
    console.log("함수 선언문")
}

// output : 함수 선언문
~~~
## 함수 표현식
~~~javaScript
testFunction();

let testFunction = function(){
    console.log("함수 표현식")
}

// output :ReferenceError: testFunction is not defined
~~~