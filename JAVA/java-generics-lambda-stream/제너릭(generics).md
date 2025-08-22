# 클래스이름 옆 꺽쇠 <T>
클래스 선언부에서 꺽쇠(< >) 안에 타입 파라미터를 선언하면 제네릭 클래스를 정의하는 것이다.

이 경우 클래스 안에서 여러 메서드가 공통으로 그 타입 파라미터 T를 사용할 수 있다.

예를 들어:
```java
class Box<T> {
    private T item;

    public void set(T item) {
        this.item = item;
    }

    public T get() {
        return item;
    }
}
```
위처럼 Box 클래스가 T라는 타입 파라미터를 받아, 어떤 타입의 객체든 담을 수 있게 설계된다.

인스턴스를 만들 때는 구체적인 타입을 지정한다

```java
Box<String> stringBox = new Box<>();
stringBox.set("hello");
String s = stringBox.get();
```
즉, 클래스 전체에서 T를 타입 변수로 쓸 수 있다.
</br>
</br>

# 메소드 리턴형 앞 꺽쇠 <T>
```java
import java.util.*;
import java.lang.*;
import java.io.*;

class SmartPhone{
    public String toString(){
        return "스마트폰";
    }
}

class Earphone{
    public String toString(){
        return "이어폰";
    }
}

class Bag{
    public void put(SmartPhone e){
        System.out.println(e + "가방에 넣다");
    }

    public void put(Earphone e){
        System.out.println(e + "가방에 넣다");
    }
}

}

class Main {
    public static void main(String[] args) {
        Bag bag = new Bag();
        Earphone e = new Earphone();
        SmartPhone s = new SmartPhone();
        bag.put(e); // 이어폰가방에 넣다  
        bag.put(s); // 스마트폰가방에 넣다  
    }
}
```

### 메서드 앞에 제너릭을 붙이면 제너릭을 사용할 수 있다.
```java
class Bag{
    public <T> void put(T t){
        System.out.println(t + "가방에 넣다");
    }
```


### 메서드 타입에 제약을 줘야할때는 상속을 이용한다.
```java
import java.util.*;
import java.lang.*;
import java.io.*;

class Car{
    public String toString(){
        return "자동차는 가방에 들어갈 수 없음";
    }
}

class Item {
    public String toString(){
        return "물건";
    }
}

class SmartPhone extends Item{
    public String toString(){
        return "스마트폰";
    }
}

class Earphone extends Item{
    public String toString(){
        return "이어폰";
    }
}

class Bag{
    public <T extends Item> void put(T t){
        System.out.println(t + "가방에 넣다");
    }
}

class Main {
    public static void main(String[] args) {
        Bag bag = new Bag();
        Earphone e = new Earphone();
        SmartPhone s = new SmartPhone();
        Car c  = new Car();
        bag.put(e);
        bag.put(s);
        //bag.put(c) car는 Bag에 못들어가도록 방지 가능
    }
}
```
메서드안 제네릭 타입에 아무 타입이나 못들어오도록 제약을 두고 싶을때 상속을 이용해서 상속받은 클래스만 제네릭타입으로 사용할 수 있도록 할 수 있다.  
예를들어서 위 코드에서 Bag 클래스의 put 메서드는 Car 타입의 클래스가 사용하지 못하도록 Item을 상속받은 클래스만 사용할수 있도록 메서드에 제약을 두었다.

</br>
</br>
# 꺽쇠 안에 나타난 물음표 <?>
꺽쇠 안에 나타난 물음표 <?>
?는 와일드카드(wildcard)로 불리며, 어떤 타입도 될 수 있음을 의미한다.

즉, <?>는 "모든 타입의 객체를 허용하지만, 정확한 타입은 모름"이다.

보통 메서드 파라미터에서 "어떤 제네릭 타입이든 받아야 할 때" 다음과 같이 쓴다.

```java
void printList(List<?> list) {
    for (Object obj : list) {
        System.out.println(obj);
    }
}
```
예시: 와일드카드의 제한
와일드카드는 읽기에는 안전하지만, 그 타입에 값을 넣는 것은 제한된다.

```java
List<? extends Number> numbers = new ArrayList<Integer>();
Number n = numbers.get(0);  // 가능, Number로 안전하게 읽음
// numbers.add(10);  // 컴파일 오류! 정확한 타입 몰라서 쓰기 제한
```
이런 이유로 와일드카드는 주로 읽기 전용이나 불특정 구체 제네릭 타입에 대응할 때 사용된다.
