# 카카오 OAuth 동작 원리
![카카오 로그인OAUTH 간단정리](https://user-images.githubusercontent.com/89888075/161418420-c54ab1ff-c7d0-41d6-b8a1-20bec059739b.png)

## 1.
-  Resorce Owner 카카오로그인 요청 -> blogServer -> kakao API 카카오 로그인요청
## 2.
- blogServer  카카오로그인 (클릭)페이지 응답 -> Resorce Owner
## 3.
- 카카오로그인 클릭시 Resorce Owner-> kakao API 로그인 요청
## 4.
- kakao API 카카오 로그인 동의 페이지(로그인이 안되어있을시 카카오로그인페이지)응답 ->Resorce Owner 
## 5.
- ResourceOwner 카카오로그인 동의 클릭시 kakao API (Resource Owner)인증코드 응답 -> blogServer
## 6.
- blogServer가 응답받은 Resorce Owner인증코드로 kakaoAPI에 리소스오너 권한요청 kakaoAPI는 kakao resorce server에 있는 Resorce Owner 인증코드와 동일한지 확인후 동일하면 ->Resource Owner권한토큰(Access token 권한 부여)응답

>Access token(권한부여)으로 권한 부여를 받는 이유는 카카오 리소스 서버에 리소스오너의 개인정보의 권한을 응답 받기 위해서 이다.

<br>
<br>

## 정리 
위의 카카오 OAuth는 카카오의 API가 사용자의 인증 처리를 대신 해주며, 사용자의 인증코드, 권한부여를 받기위한 흐름이다.

