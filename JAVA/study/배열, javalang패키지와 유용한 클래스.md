# 배열
- 배열(array)이란?
- 배열의 선언과 생성
- 배열의 초기화
- 배열의 활용
- 배열의 활용 예제
- 다차원 배열의 선언과 생성
- 가변배열
- 배열의 복사
- 사용자 입력받기 -커맨드라인
- 사용자 입력받기 - 입력창(InputDialog)

<br>

## 배열(array)이란?
배열은 **같은타입**의 여러변수를 하나의 묶음으로 다루는 것을 말한다. 

<br>

## 배열의 선언과 생성
변수 선언 = 메모리 공간 할당 <br>
배열 선언 = 배열을 다루기 위한 참조변수 선언

<br>

### 배열을 선언
- 배열을 다루기 위한 참조변수 선언
~~~java
//1
타입[] 변수이름; // int[] ex; 
//2
타입 변수이름[];  // int ex[];
~~~
<br>

### 배열 생성
- 실제 저장공간 생성
~~~java
변수이름 = new 타입[길이]
// 선언과 생성
타입[] 변수이름 = new 타입[길이]
~~~

~~~java
int[] ex = new int[5];
ex[3] = 10; 
~~~

![인덱스 그림](https://user-images.githubusercontent.com/89888075/164150631-e5666b7c-78be-4bc8-bb97-8206be8e24f3.png)

## 배열의 길이
- 배열이름.length 를 통해 배열의 길이를 구할 수 있다.
- 배열은 한번 생성하면 (실행하는 동안)그 길이를 바꿀 수 없다.
- 배열은 실행하는동안 정해진 크기를 바꿀 수 없기 때문에 크기를 변경하고 싶으면 크기를 다시 변경하고 배열의 크기를 다시 정한 후 배열의 내용을 복사 해야한다.

## 배열 출력
- Arrays클래스 활용
~~~java

import java.util.Arrays;

public class main
{
    public static void main(String[] args)
    {
     int[] ex = {0,1,2,3,4,5};
     System.out.println(ex); //메모리 주소값 출력 = [I@30f39991

    System.out.println(Arrays.toString(ex)); //[0, 1, 2, 3, 4, 5]
    
    }
}
~~~

## 다차원 배열
- 다 차원 배열이란 2차원 이상의 배열을 의미한다.
### 2차원 배열
- 2차원 배열은 1차원 배열을 갖는 배열이다.
~~~java
//문법
 타입[][] 배열이름;
 타입 배열이름[][];
 타입[] 배열이름[];
//예제
int[][] ex = new int[3][3] //[행]x[열] 배열생성
//또는
int[][] ex = {
    {1,2,3},
    {4,5,6},
    {7,8,9}
};
~~~
![2차원배열](https://user-images.githubusercontent.com/89888075/164198445-a97368b4-a507-4d0a-8517-caaead74bf9d.png)


### 3차원 배열
- 3차원 배열은 2차원 배열을 갖는 배열이다.
- 입체보다는 면으로 이해하는게 개인적으로 편함.
~~~
int[][][] ex = new int[3][3][3] //[면][행][열] 3면(장)3행3열인 27크기의 배열생성

~~~

![3차원](https://user-images.githubusercontent.com/89888075/164202330-997eb5fa-e688-436e-8ba5-4bd65c62fdea.png)





# javalang패키지와 유용한 클래스
 javalang 패키지는 자바프로그래밍에 가장 기본이 되는 클래스를 포함하고 Object(자바 최고 조상))클래스 이기때문에 import문없이 바로 사용가능하다.

### equals()
- 매개변수로 객체의 참조변수를 받아서 비교하여 그 결과를 booleean값으로 알려준다.(서로 다른 두 객체이기 때문에 언제나 false 리턴)
- equals() 는 기본적으로 주소값을 비교하기때문에 객체안의 값을 비교하기 위해선 오버라이딩을 해야한다.
~~~java
public class EtcTest {
    public static void  main(String[] args) {

        Value v1 = new Value(10);
        Value v2 = new Value(10);

        System.out.println(v1.equals(v2));
    }
}

class Value{

    public Value(int i) {

    }
}
// false
~~~
### hashCode()
- 객체의 해시코드(hash code)를 반환하는 메서드
- object클래스의 hashCode()는 객체의 주소를 int로 변환해서 반환
- equals()를 오버라이딩 하면, hashcode()도 오버라이딩해야 한다. equals()의 결과가 true인 두 객체의 해시코드는 같아야 하기 떄문이다.

~~~java
public class EtcTest {
    public static void  main(String[] args) {

       String st1 = new String("asd");
       String st2 = new String("asd");


        System.out.println(st1.equals(st2)); //true
        System.out.println(st1.hashCode()); //96882
        System.out.println(st2.hashCode()); //96882

    }
    }


~~~

### toString()
- toString() 메서드는 해당 인스턴스에 대한 정보를 문자열로 반환한다.
- 클래스 이름과 함께"@"를 구분자뒤로 해쉬코드 인 객체의 주소가 따라온다.
~~~java

class A{

}

public class EtcTest {
    public static void  main(String[] args) {

        A a = new A();


        System.out.println(a.toString()); //A@60f82f98
    }
}

~~~
>ref
http://www.tcpschool.com/