# fetch() 함수를 알아보자

## fetch() 함수?
 - 클라이언트단에서 비동기로 네트워크를 통해 api를 호출해 리소스를 요청하고 응답받을 수 있다.
 - 예전엔 request,axios,jQuery같은 라이브러리를 이용해서 http를 요청하고 응답받았지만 요즘은 브라우저에서 기본으로 fetch()함수를 지원하기 때문에 상대적으로 더 좋은 대체제인 fetch()함수를 사용한다고 합니다.
 - 참고로 fetch는 브라우저에서 제공하는 window객체의 내장객체 이기 때문에 당연하게 node.js같은 환경에서는 사용이 불가하다.
 또 익스플로워 같은 구식 브라우저에서 동작하지않을 수 있다.
 
 <br>
 <br>

 ## 기본 문법
 ~~~js
 fetch ('api주소', {옵션 객체})
 //기본동작은 get방식으로 동작한다.
 ~~~
 - fetch()의 리턴값은 Promise이여서 응답객체에 접근할려면 .then을 이용한다.

 <br>
 <br>
 
 ## Get 방식 api호출
~~~js
fetch('https://jsonplaceholder.typicode.com/posts/1')
//then으로 객체에 접근하여 json()함수를 이용해 json 객체로 변경
  .then((response) => response.json())
  .then((json) => console.log(json));
~~~
👇 Output
~~~
{
  id: 1,
  title: '...',
  body: '...',
  userId: 1
}
~~~
- get방식 api호출은 요청body를 받지 않아 2번째 인자 옵션 없이 첫번쩨인자인 api주소만 넣어 사용 가능하다. 
[코드출처](https://jsonplaceholder.typicode.com/guide/)


 <br>
 <br>
 
 ## Post 방식 api호출
 ~~~js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
 ~~~
 👇 Output
 ~~~js
 {
  id: 101,
  title: 'foo',
  body: 'bar',
  userId: 1
}
 ~~~
- get 방식 이외에는 api호출을 위해서는 "method: 'POST'" 로 동작방식을 명시해준다.
- body는 문자열로 작성해주어야하기때문에 JSON.stringif() 함수를이용해서 문자열로 변환한다.
- headers: 속성으로 json으로 명시하여 전송코드가 json임을 서버에 알려주는 역할을 한다.

 [코드출처](https://jsonplaceholder.typicode.com/guide/)
