# http1.1 요청방식

![요청방식](https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fu8FfJ%2FbtqDXD0YPaX%2FSFn1kLcyz76hA30Z7z7Khk%2Fimg.png)

클라이언트가 서버에 데이터를 요청 할때 여러가지의 요청중에서 대표적으로 4가지의 방법중 하나로 서버에 데이터를 요청을한다.

## http 통신방법 4가지
 - **GET** : 데이터를 달라는 GET은 일반적으로 가장 단순한 방식으로 서베에 요청을 할때 사용되며 전송하는 길이에 제한이있다. **주로 서버를 조회하기위해 설계된메소드 URL에 데이터를 포함시켜 요청해서 보안에 취약하다.** 그리고 DB에 select를 맵핑해 데이터를 응답한다.
 - **POST** : **데이터를 추가**해줘라는 의미고 DB에 맵핑시키면 INSERT를 맵핑한다.(URL에 데이터를 노출하지 않고 요청한다.)
 - **PUT** :**데이터를 수정**해달라는 의미 DB는 UPDATE를 한다.
 - **DELETE** : 데이터를 삭제해달라는 의미 DB는 DELETE 한다.