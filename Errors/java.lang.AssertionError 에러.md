# java.lang.AssertionError: 에러

## **에러발생** <br>
![자바 문자열 오타 에러](https://user-images.githubusercontent.com/89888075/152742029-1c829627-3c82-4074-a145-03ee2de9b92c.PNG)

<br>

## **원인**<br>
index.mustache 파일의 문자열과 IndexcontrollerTest 의 문자열이 틀려서 에러 발생 <br>
즉, index.mustache 파일에 "스프링부트로 시작하는 웹서비스" 라는 문자열이 존자하지않아 에러가 발생하였다.

![인덱스머스테치](https://user-images.githubusercontent.com/89888075/152743113-bc2d8878-1640-44d2-a1c8-cd7f313431fd.PNG)

![머스테치테스트코드](https://user-images.githubusercontent.com/89888075/152743151-c97c0477-89c4-4d00-be63-26fd870d9887.PNG)

<br>
<br>

## **해결**<br>
테스트코드의 문자열을 index.mustahe 파일의 문자열과 동일하게 "First Spring Web Service" 로 문자열을 같게 바꾸어 테스트트에러를 해결하였다.

![마스테치 테스트 코드](https://user-images.githubusercontent.com/89888075/152743943-75416b7f-448d-4f4b-bae4-58d9f84adbf0.PNG)

<br>

![마스테치 테스트 통과](https://user-images.githubusercontent.com/89888075/152743689-1c361eec-d067-44aa-b9c6-f12ee1973e81.PNG)