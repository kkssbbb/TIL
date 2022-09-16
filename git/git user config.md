
# 유저 설정
- 프로젝트시 여러명이 동시에 작업을 하면 코드를 누가 반영한 것인지 알 수 있어야 한다.
- 작업전 깃 유저네임과 유저 이메일을 설정하여 누가 코드를 누가 반영한 것 인지 알 수 있도록 하자.

## 유저네임 설정
~~~
git config --global user.name 'myname';
~~~
## 유저이메일 설정
~~~
git config --global user.email 'myemail';
~~~
## 유저설정 정보보기
~~~
git config --list
~~~

--global 을 제외하고 명령어를 사용시 지정한 깃저장소에서 사용하는 유저 설정 이다. 
~~~
git config user.name 'myname';
~~~
