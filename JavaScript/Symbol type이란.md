# 심볼 타입 이해하기

- 심볼(Symbol)은 js의 6개의 원시 타입중 하나이다
- ES6버전에서 추가되었다.
- 객체의 키를 유일성 보장 해준다.

## 어디서 사용할까?
 - 일반적으로 심볼 타입은 객체의 프로퍼티 키를 하나의 심볼만 보장받을수 있도록 해서 같은이름의 키로 충돌 위험이을 방지하기위해 사용된다.

 ## 심볼 생성 문법
 ~~~javascript
 const keyName = Symbol("keyName"); 
const keyName2 = Symbol("keyName2"); 
 ~~~
 - 주의 할 점은 new연산자를 사용하지 않는다.

 ## 오브젝트 메서드는 심볼형키를 건너뛴다.

~~~javascript
Object.keys(keyName);
Object.values(keyName);
Object.entries(keyName); 
 ~~~
- 위 오브젝트 메서드 들은 심볼타입의 키를 건너뛰고 반환한다.