# 에러발생
## 테스트코드 404에러 <br>
간단한 테스트 코드를 작성하고 테스트코드를 실행하였는데 아래와 같은
에러가 났다.
![테스트코드 404에러](https://user-images.githubusercontent.com/89888075/152490038-e619137a-f1c1-4682-8558-025be673b0ee.PNG)

404에러는 테스트 코드의 문제보다는
url쪽 에러라고 해서 먼저 맵핑이 잘안되었나하고 확인했는데 문제 가없었다.

```java
@Test
	```public void hello가_리턴된다() throws Exception{
		String hello ="hello";

		mvc.perform(get("/test"))
				.andExpect(status().isOk())
				.andExpect(content().string(hello));
  }
}
```
```java
@GetMapping("/test") 
    public String hello(){
        return "hello";
```


# 원인
![테스트코드 디렉토리](https://user-images.githubusercontent.com/89888075/152491913-f6b18099-9014-44c6-a861-4675df980c6f.PNG)

원인은 ..테스트코드나 맵핑의 문제가아닌 디렉토리주소가 잘못되었다...<br>
FirstwebserviceApplication클래스는 메인클레스여서 @SpringBootApplication 어노테이션을<br>
작성하였는데 이 어노테이션을 작성하면<br>
@SpringBootApplication이 있는 위치부터 설정을 읽어가기 때문에  이 클래스는 항상 프로젝트 <br>최상단에 위치해야 됐다. ~~(그래서 아마 localhost:8080에 접속에도 404에러가 떴을꺼다)~~<br>
그래서 web 패키지가 com.firstwebservice.firstwebservice 패키지 안에 있어야했었다.

<br>
<br>

# 문재해결
![테스트코드 디렉토리2](https://user-images.githubusercontent.com/89888075/152492962-b284d66a-caaa-4579-905d-4bf279649379.PNG)<br>
web패키지를 com.firstwebservice.firstwebservice 패키지 안에 넣어주어 에러를 해결했다.
<br>
<br>
# 배운점
@SpringBootApplication 의 클래스는 항상 프로젝트의 최상단에 위치해야한다.<br>
에러가났을때 코드에서만 에러를 찾지말고 그외적인것도 고려해 보자