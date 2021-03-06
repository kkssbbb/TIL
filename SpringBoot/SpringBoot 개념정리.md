
>이 정리는 유튜브 메타코딩님의 강의를 정리한 것입니다.

<br>
<br>
<br>

# 스프링이란 ?

## 1. 스프링은 프레임워크(FramWork)다.
-  프레임워크는 말 그대로 만들어논 틀 안에서 동작하기 위해 만들어진 프로그램이다. 
<br>
<br>
<br>

## 2. 스프링은 오픈소스다.
- 오픈소스 라는건 소스코드가 공개 되어있다는 말이며 **코드의 내부를 수정할 수   있다**.
<br>
<br>
<br>

## 3. 스프링은 IoC 컨테이너를 갖는다.
   
   - IoC(Inversion of control)는 제어의 역전이란 뜻이며(대신해준다.) **메소드나 객체의 호출을 개발자가 정하지 않고, 외부에서 결정한다.**
   - 기존에는 객체나 메소드를 만들고 다른 클래스에서 사용할려면  New라는 생성자로 객체를 생성하여
    호출하여 사용했지만, 스프링은 IoC컨테이너를 갖고 있어 스프링이 따로 만들어놓은 객체를 주입해
  객체를 호출한다.
  <br>
    **즉, 제어의 흐름을 사용자가 컨트롤 하는 것이 아니라 스프링에게 직접 맡겨 처리해 역전의 제어(IoC) 라고이름을 붙인거같다.**
<br>
<br>
<br>

 ## 4. 스프링은 DI를 지원한다.
- **DI(Dependency Injection) 의존성을 주입한다는 의미=(대신넣어준다)**로
    예전에는 New로 객체의 주소를 개발자가 직접관리했다면,스프링에서는
    Ioc컨테이너로 스프링에서 따로 객체를 관리해서 개발자가 필요로 하는 객체를 모든 클래스의 메서드 에서 객체를 가져와서 사용(주입)할수있다.
    이렇게 **의존성을 주입해서 객체를 사용하는걸 DI라고 한다.**

+ 추가로 스프링에서는 객체를 **"Bean"** 이라고 부르고
      객체가 생성되는 곳을 스프링에서는 **"Bean컨테이너"** 라고 부른다.
<br>
<br>
<br>

## 5. 스프링은 많은 필터를 갖고 있다.
- 스프링에서 필터는 인터셉터(AOP)라 불리며 인터셉터가 들어갈 권한이 있는 것과 없는것을 나눠서     스프링컨테이너에 들어갈 수 있게 해준다.
<br>
<br>
<br>

## 6. 스프링은 많은 양의 어노테이션을 갖고있다.(리플렉션, 컴파일체킹)
@component - 클래스 메모리에 로딩<br>
@Autowired - 로딩된 객체 해당 변수에 집어 넣음<br>
- 리플렉션 :  B라는 클래스가 있을때 B클래스의 내부를 **스프링이 스캔(분석)하는 기법을 리플렉션** 이라 한다. <br>
그리고 스프링이**리플렉션을 할때 어떤 클래스안에 어떤 메서드, 필드, 어노테이션이 있는지 체크** 할 수 있다.<br>
**리플렉션은 런타임시 분석한다.**
- 컴파일체킹
<br>
<br>
<br>

## 7. 스프링은 MessageConverter를 가지고 있다. 기본값은 현재 Json 이다.
- MessageConverter는 자바의 프로그램을 다른 언어의 프로그램에 요청하거나 응답 받을때 중간에서 데이터를 그 프로그램이 이해 할 수 있게 데이터를 바꿔주는 역할을 한다.
<br>
<br>
<br>

## 8. 스프링은 BufferedReader와 BufferedWriter를 쉽게 사용할 수 있다.
- 데이터 요청 BufferedReder<br>
 데이터 응답 Bufferedwirter <br>
  - 자바에서는 보통 내려쓰기가 가능한 printwrtiter를 사용한다.
    스프링에서는 데이터 요청과 데이터 응답의 기능을 직접 구현할 필요없이 어노테이션으로 데이터 응답,요청 기능을 사용할 수 있다.<br>
 - @ResponseBody =  Bufferedwirter 동작<br>
   @RequestBody  = BufferedReder  동작
<br>
<br>
<br>

## 9. 스프링은 계속 발전중이다.



