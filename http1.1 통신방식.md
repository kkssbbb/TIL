# http1.1 요청방식

![요청방식](https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fu8FfJ%2FbtqDXD0YPaX%2FSFn1kLcyz76hA30Z7z7Khk%2Fimg.png)

클라이언트가 서버에 데이터를 요청 할때 여러가지의 요청중에서 대표적으로 4가지의 방법중 하나로 서버에 데이터를 요청을한다.

## http 통신방법 4가지
 - **GET** : 데이터를 달라는 GET은 일반적으로 가장 단순한 방식으로 서베에 요청을 할때 사용되며 전송하는 길이에 제한이있다. **주로 서버를 조회하기위해 설계된메소드 URL에 데이터를 포함시켜 요청해서 보안에 취약하다.** 그리고 DB에 select를 맵핑해 데이터를 응답한다.
 - **POST** : **데이터를 추가**해줘라는 의미고 DB에 맵핑시키면 INSERT를 맵핑한다.(URL에 데이터를 노출하지 않고 요청한다.)
 - **PUT** :**데이터를 수정**해달라는 의미 DB는 UPDATE를 한다.
 - **DELETE** : **데이터를 삭제**해달라는 의미 DB는 DELETE 한다.

 # stateless란?
  요청시마다 스트림을 연결해서 Data를 주고 받는 방식.
 # stateful이란?
 서버와 연결이 지속되어있다.
 채팅처럼 서버와 연결이 지속되어야하는경우사용한다.

 # MIME란? (Multipurpose Internet Mail Extensions) 
MIME란? Multipurpose Internet Mail Extensions
- 클라언트가 서버에 전송하는데이터는 텍스트,동영상,이미지등 다양하기 때문에 헤더에 어떤데이터타입인지 적어주는데 이를 MIME타입이라고 한다.
- 문법 
   >파일의 종류/확장자명 <br>
 
     으로 예를 들어 GIF확장자의 이미지를 보낼때는<br>
  
    > image/gif<br>

     라고 타입을 작성해 주면 된다.