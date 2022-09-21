# 내비게이션 스크롤 기능 구현
## 사용된 메서드

e.preventDefault();
- 특정 기능 정지 메서드

xxx.querySelector("#intro");
- 1개의 태그를 css 선택자 기반으로 가젼온다.

xxx.querySelectorAll('a');
- 여러 개의 태그를 css선택자 기반으로 가져온다.

xxx.getAttribute('href');
- 특정 태그가 갖고 있는 속서으이 속성값을 가져온다.

~~~javaScript
window.scrollTo({  //특정 지점으로 스크롤
    'bebavior': 'smooth', //부드럽게 이동
    'top' : xxx.offsetTop //스크롤이 끝났을때 화면위에 나타나는 자표값
});
~~~

offsetTop
- 선택된 영역의 상단까지의 거리를 절대좌료로 반환한다.

# 스크롤 기능 구현
~~~javascript
// 1) Scroll Navigation
var aTags = document.querySelectorAll('header a');

for (var i = 0; i < aTags.length; i++) {
  aTags[i].onclick = function (e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    //이벤트가 발생할떄 이벤트를 발생시키 오브젝트를 가르킨다.
    window.scrollTo({
      behavior: 'smooth',
      top: target.offsetTop,
    });
  };
}

~~~