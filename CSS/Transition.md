
## Transition
변화하는 과정을 보여주고 싶을 떄 사용하는 css 속성이다.



## Transition 속성
- property : 효과를 주고자하는 css 속성
- duration : 효과가 나타난느데 걸리는 시간
- timing-function : 효과의 속도
- delay : 효과가 나타나는데 걸리는 시간 

```css
transition-property: width;
transition-duration: 2s;
transition-timing-function: linear;
transition-delay: 2s; 
```

## Transition 가상 선택자
- hover : 마우스를 올렸을 때
```css
.classname: hover{width: 30px;} /*classname 영역에 마우스를 올릴시 넓이가 30px로 변경 된다.  */
```

## Transition 한 줄 규칙

트랜지션을 한줄로 쓸경우 첫번째 숫자는 무조건 duration이라는 규칙이있다.
```css
transition: width 2s linear 2s; /* 첫번채는 duration */
```