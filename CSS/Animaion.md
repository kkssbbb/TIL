## Animation
조건없이 그냥 애니메이션처럼 보여주는 css 속성

## Animation 속성

- name : 임의로 설정할수있는 네임
- duration : 지속시간
- timing-function : 보여지는 속도
- delay : 효과 딜레이 시간
- iteration-count : 애니메이션 반복 횟수
- direction : 애니메이션 진행 방향
    - alternate: from -> to -> from
    - normal: from -> to,from -> to
    - reverse: to -> from,to -> from

~~~css
animation-name: Aname;
animation-duration: 3s;
animation-timing-function: linear;
animation-delay: 1s;
animation-iteration-count 6;
animation-direction: alternate;

@keyframes Aname{
    for{width: 300px;}
    to{width: 300px;}
}
~~~