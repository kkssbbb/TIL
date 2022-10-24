## mongoose ODM ?

Object Data Modeling

MongoDB의 Collection에 집중하여 관리 하도록 도와주는 "패키지"

Collection을 "모델화"하여,  _관련기능들을 쉽게 사용 할 수 있도록 도와줌_

## mongoose 사용하는 이유

### 연결관리

Mongoose 를 이용하면 간단하게 데이터베이스와의 연결상태를 관리해줌

### 스키마관리

Mongoose는 Code-Level에서 스키마를 정의 하고 관리할 수 있게해줌

### Populate

MongoDB는 기본적으로 join을 제공하지 않음

Join과 유사한 기능을 사용하기 위해선 aggregate 라는 복잡한 쿼리를 이용해야하지만,

Mongoose는 populate를 사용하여 간단하게 구현 가능하다.