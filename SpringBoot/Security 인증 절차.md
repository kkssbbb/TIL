# Spring Security 인증 절차
![시큐리티인증절차](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcs4tgw%2FbtqEIKq0DF4%2FFm93FYLNM8fZKmSwFrEchK%2Fimg.png)

1. 로그인 요청 ->AuthenticationFilter 작동<br>
2. UsernamePasswordAuthenticationToken 생성 //로그인요청시 body에 담겨있는 데이터(유저네임,패스워드)를 가지고 토큰 생성<br>
3. AuthenticationManager에서 위의 토큰을 가지고 Authentication객체 생성,패스워드 인코딩후 비교<br>
4. 이후 UserDetailService에서 유저네임만 받음<br>
5. UserDetailService -user아이디가 있는지 DB에 물어봄-> DB <br>
6. 있으면 UserDetailService가 AuthenticationManager에 있다고 응답<br>
7. AuthenticationManager가 패스워드까지 확인후 Authentication객체를 세션에 저장<br>