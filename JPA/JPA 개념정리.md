# JPA란?

## 1. JPA는 Java Persistence API다.
Persistence(영속성)은 데이터를 프로그램의 실행이 종료되더라도 사라지지 않는 데이터의 특성을 의미한다.

## API란
A = application ,  P = programming ,I = interface으로 인터페이스로 프로그래밍을한 프로그램을 말한다.,<br>
에플리케이션을 프로그래밍하기위해 사용할 **인터페이스의 데이터를 사용하기 위해서는  상하관계가 존재하는 약속(조건)이있는데 이조건을 지켜야한다**.

### 즉,  JPA는<br>
- *J* ava <br>
*P* ersistence<br>
*A* pplicatrion programing interface<br>
이며 *자바프로그패밍을 할때 영구적으로 데이터를 저장하기위해 필요한 인터페이스를 JPA라고한다.*

## JPA는 ORM 기술이다.
ORM은 Object Relation Mapping 객체가 쓰이는 데이터인 테이블을 맵핑으로 연결하는 것을 의미한다.
ORM을 사용하면 따로 SQL문을 짤 필요없이 객체를 통해서 자동으로 테이블을 작성해 준다.

## JPA는 영속성 컨텍스트를 가지고 있다.
### 컨텍스트(context) 
- 대상의 모든 정보를 말한다.
 > ex) 나는 수능시험의 "*컨텍스트*"를 알고 이 "*컨텍스트*"를 너에게 전부 주겠다 라는 말은<br>
 >     나는 수승시험의 "*모든정보*"를 알고  이 "*모든정보*"를 너에게 준다는 말이다. <br>

 ### 영속성컨텍스트(PersistenceContext)
 - 데이터를 만들었을떼 이 데이터를 다이렉트로 저장하는것이 아니라 영속성컨텍스트(JPA)가 중간에서 자동으로 Select,Update,Delete,Create 등을 DB에 한다.

![영속성컨텍스트](https://t1.daumcdn.net/cfile/tistory/24824933598030F436)


### JPA는 DB와 OOP의 불일치성을 해결하기 위한 방법론을 제공한다.(DB는 객체저장 불가능)


### OOP관점에서 모델링을 할 수 있게 해준다.(상속, 콤포지션, 연관관계)

### 방언 처리가 용이하여 Migration하기 좋다. 유지보수에도 좋음.
- JPA에 추상화 객체를 두어 추상화객체에 오라클이나 Mysql등등을 많은 코드변경없이 사용할 수 있다.

