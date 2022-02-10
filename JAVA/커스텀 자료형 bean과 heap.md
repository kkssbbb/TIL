
# Bean

## 자료형 8가지
![자료형](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCkbyhljIrQ6X62ukyXpuMSzBpJLKKB_IrVw&usqp=CAU)

자바는 저장하고싶은 데이터값에따라 데이터에 맞는 자료형과
변수를 선언해서 메모리에 데이터를 저장한다.<br>
하지만  한가지의 타입에는 한가지의 타입만 저장이가능하고
다른 타입을 같이 저장할 수 있는 타입은 없다.<br>


 ~~~java
  Type  = (1 , 'a');
          int  char
 ~~~

따라서 아래처럼 Num이라는 클래스 자료형에 여러가지 데이터가 있는 클래스를(개발자가 만드는 커스텀 자료형)
정확한 용어로 **Beans**라고 부르고 Beans를 통해서 여러가지 데이터값이 있는 커스텀 자료형을 만들 수 있다.
<br>
<br>

~~~java
class Num{  //Num클래스는 2가지의 int형을 갖고있는 Beans(개발자가 만든 커스텀 자료형)이 된다.
    static int n = 4;
    static int c= 5;

}

public class Test {
    public static void main(String[] args){

        System.out.println (Num.n + Num.c);
    }

}

//console = 9
~~~

그리고 위 코드처럼 데이터에 다 static을 붙여주면 변수 n과c는 메모리 static이란 공간에 프로그램의 처음부터 끝까지남아 있는다. <br>
하지만 사실 static이란 공간을 계속 사용하는건 비효율적이고 저 데이터를 사용하고 싶을때만 메모리에 뜰수 있게 하는 방법이 있는데<br>
그것은생성자를 이용해서 데이터를 heap이란 공간에 넣어주어 데이터가 필요할때만 꺼내 쓸수있고 필요없으면 메모리에서 사라지기때문에<br>
 값이 프로그래밍이 시작할때 부터 끝 닐때까지 필요한 값이 아니면 heap이란 메모리공간을 사용하는게 효훌적인 방법이다.<br>

<br>
<br>

# heap
메모리 heap공간을 사용하는 방법은 생성자*new**라는 키워드를 사용해서 데이터가 필요할때만 꺼내쓸 수 있다.

> 사용할 클래스이름 변수명 = **new** 사용할클래스명();

위처럼 사용하고싶은 데이터를 갖고있는 클래스를  다른 클래스 내부에 선언해 다른클래스의 데이터를 heap 이란 메모리공간을 이용해서 <br>
사용하고 싶을때만 사용할 수 있다.<br>

~~~java
class Num{  // Beans
   int n = 4;
    int c= 5;

}

public class Test {
    public static void main(String[] args){
        Num num = new Num(); 

        System.out.println (num.n + num.c);
    }

}

//console = 9
~~~
