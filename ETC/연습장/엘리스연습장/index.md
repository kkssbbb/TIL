자바스크립트 제어흐름
이벤트루프
promise
async/await
http,rest API
Fetch API

# 자바스크립트 제어흐름
js 다른 멀티스레드(자바,c++..) 언어와 다른 방식으로 비동기 동작을 처리한다.
js의 내부 비동기 동작을 이해하기 위해서는 이벤트 루프등의 개념을 알아야한다.

### js 엔진
js 엔진은 하나의 메인스레드로 구성
메인 스레드는 코드를 읽어 한 줄 실행
브라우저 환경에서는 유저이벤트를 처리하고 화면을 그린다.

# 이벤트루프

js 엔진은 동기적으로 처리한다.
비동기 처리를 하기위해 함수를 이용한 api로 비동기처리를 할 수있다.


# promise
promise API는 비동기 API중 하나이다.
태스크 큐가아닌 잡큐 혹은 microtask queue를 사용한다.
잡 큐는 태스크 큐보다 우선순위가 높다.

비동기 작업을 표현하는 자바스크립트 객체
비동기 작업의 진행, 성공, 실패 상태를 표현한다.
비동기 처리의 순서를 표현할 수 있다.

~~~js
const pr = new Promise((resolve, reject)=>{});
~~~
promise는 위와같이 사용하며 콜백함수로 resolve, reject 를 사용한다.
> 콜백함수는 어떤일이 완료됐을떼 실행되는 함수를 말한다.

<img width="498" alt="image" src="https://user-images.githubusercontent.com/89888075/193502471-6c0a97ab-d7a6-43e2-9362-1c8bd24de340.png">


# async/await
# http,rest API
# Fetch API