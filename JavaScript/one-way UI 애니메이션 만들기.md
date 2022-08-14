>애플코딩님의 js강의를 정리한 내용입니다.

one-way UI 애니메이션을 만들기 위해 아래와 같은 순서로 만들자.
1. 시작스타일
2. 최종스타일
3. 원할 때 최종 스타일로 변하라고 js코드 작성
4. transition 추가

# EX
## html
~~~html
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
   <link rel="stylesheet" href="test.css">
   <script src="main.js"></script>
</head>
<body>
   
   <div class="black-bg" id="blackId">
      <div class="white-bg">
        <h4>로그인하세요</h4>
        <button class="btn btn-danger" id="close">닫기</button>
      </div>
    </div> 

    <div>
    <button id="btnId">버튼</button>
   </div>

   <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
</body>
</html>
~~~

## 1. 시작스타일
- 애니메이션 동작 전 스타일과 동작 후 스타일의 결과를 클래스로 2개 만들어논다
~~~css
.black-bg {
    width : 100%;
    height : 100%;
    position : fixed;
    background : rgba(0,0,0,0.5);
    z-index : 5;
    padding: 30px;
    visibility: hidden;
    opacity: 0;
        /* transition: all 1s; */
  }
~~~
## 2. 최종스타일
~~~css
.show-modal{
    visibility: visible;
    opacity: 1;
}
~~~
## 3. 원할 때 최종 스타일로 변하라고 js코드 작성
~~~javascript
//버튼 누르면 모달 창 뜸 jquery사용
window.onload = function(){

    $('#btnId').on('click', function(){
        $('.black-bg').addClass('show-modal');
    });
    

}

// 바닐라js
// window.onload = function(){

//     document.getElementById('btnId').addEventListener('click',function(){
//         document.getElementById('blackId').style.display='block';
//     })

// }
~~~
## 4. transition 추가
~~~css
.black-bg {
    width : 100%;
    height : 100%;
    position : fixed;
    background : rgba(0,0,0,0.5);
    z-index : 5;
    padding: 30px;
    visibility: hidden;
    opacity: 0;
    transition: all 1s; /* transition 추가*/
  }
~~~