# Props vs State
Props는 부모 컴포넌트에서 자식 컴포넌트로 전달하는 값으로 자식 컴포넌트에서는 Props를 직접 수정할 수 없다.

State는 컴포넌트 내부에서 선언하며 내부에서 관리되는 값으로 값을 변경할 수 있다는 점이 차이이다.

Props는 읽기 전용, 수정 불가.(서버에서 데이터를 받아올떄 사용하지 않을까?)
State는 동적으로 값을 변경해줄 수 있다.