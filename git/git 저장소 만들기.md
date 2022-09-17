# git 저장소 만들기

~~~
git inti
~~~


# 깃 파일 생성

## 깃 파일 추가 및 커밋 사이클

![깃라이프사이클](https://images.velog.io/images/sza0203/post/90451771-1097-4222-ba54-6c034eb34030/%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%A7%E1%86%A8%E1%84%8B%E1%85%B4%20%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%91%E1%85%B3%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%B3%E1%86%AF.png)

![](https://t1.daumcdn.net/cfile/tistory/2447383557690E1003)

<br>


## git add = working directory-> stagin area

git add : 파일명.js

git add . : 현재 디렉토리 안 모든파일 추가

git status :  파일변경등의 파일상태 확인

<br>

## 깃 저장소 반영
## git commit -m = staging area -> git repository

git commit -m "커밋 메세지"

git commit --amend
- 앞 커밋 메세지 내용 변경

저장소 반영 내역 확인
git log

<br>
<br>
<br>


# 깃 관리 상태 확인

git status
- staging area 영역 상태 확인

git diff
- commit 된 파일 중 변경된 사항을 비교할 때

git log
- 저장소 반영 내역 확인
<Br>
<Br>

## log 옵션
git log -p -2
- -p.  --patch : 각 commit의 수정 결과를 보여주는 diff와 같은 역할을 수행한다.<br>
- -n : 상위  n개(두개)의 commit만 보여준다.

git log --stat
- --stat :  어떤 파일이 커밋에서 수정되고 변경되었는지, 파일 내 라인이 추가되거나 삭제되었는지 확인한다.

git log --pretty=oneline
- --pretty=online : 각 commit을 한 줄로 출력한다.

git log --graph
-- graph : commit간의 연결된 관계를 아스키 그래프로 출력한다.

git log -S function_name
-S: 코드에서 추가되거나 제건된 내용중 특정 텍스트(위에서는 function_name) 가 포함되어 있는지 검사