// 1) Scroll Navigation

var aTags = document.querySelectorAll('header a');
// a테그를  변수 aTags에저장

for (var i = 0; i < aTags.length; i++) {
    //aTags 크기(요소갯수)만큼 반복
  aTags[i].onclick = function (e) {
    e.preventDefault();
 //aTags i번쨰 요소를 클릭시 동작멈춤
 
    var target = document.querySelector(this.getAttribute('href'));
    //이벤트가 발생할떄 이벤트를 발생시키 오브젝트를 가르킨다.

    window.scrollTo({
      behavior: 'smooth',
      top: target.offsetTop,

    });

  };

}
