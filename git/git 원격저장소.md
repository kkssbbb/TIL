# 원격 저장소란?
- 인터넷이나 네트워크 어딘가에 있는 저장소
>ex)  github or gitlab

<br>
<br>
<br>

# git 원격 저장소 받아오기

- git clone 을 이용해서 기존의 깃레포짓토리를 복사한다.

### 원격 저장소 url로 받아오기
- 깃랩또는 깃허브에서 원하는 프로젝트에서 clone버튼일 누른다.

<img width="533" alt="스크린샷 2022-09-17 오후 6 32 46" src="https://user-images.githubusercontent.com/89888075/190850320-aa6551d5-0fa2-4eb2-80bf-b46239684b98.png">



- 주소를 복사하여 git clone뒤에 주소를 넣어준다.
<br>
<br>

~~~
$ git clone https://github.com/kkssbbb/TIL.git
~~~

### 원격 저장소는 아래의 명령어로 연결
~~~
$ git remote add origin https://github.com/kkssbbb/TIL.git
~~~

### 연결된 원격 저장소 확인 방법
~~~
$ git remote 
~~~
### 연결된 원격 저장소 다 보는 법
~~~
$ git remote show origin
~~~

###  기존 원격 저장소 이름 변경하는 법
- origin 에서 git_test로 변경
~~~
$ git remote rename origin git_test
~~~

###  원격 저장소 삭제
- 주소가 변경되거나 필요없어진 저장소 삭제 할 수 있다.
~~~
$ git remote rm git_test
~~~





<br>
<br>
<br>

# 원격 저장소 동기화

pull
- 원격 저장소에서 데이터 가져오기 +로컬데이터와 병합(merge)

fetch
- 원격 저장소에서 데이터 가져오기
- fetch 사용시 git merge origin/master로 병합을 완료해준다.

### 반대로 로컬저장소에서 원격저장소에 변경사항 전달 하는 법

push
- git push origin master 를 이용하여 변경된 사항을 원격저장소에 전달 한다. 




<br>
<br>
<br>


# Origin이란?