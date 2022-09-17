

# git branch 란?
독릭적으로 어떤 작업을 진행하기 위한 개념
각각의 branch는 다른 branch의 영향을 받지 않음

깃의 특징으로 깃은 master,devlop,topic 3가지의 브랜치 나눠진다.

![123](https://img1.daumcdn.net/thumb/R1600x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FzkuCv%2FbtqDwestQ0Y%2FeTmkgKKSXUFxjtXK4K6H71%2Fimg.png)

## git branch 종류

## 메인 브렌치
- 배포할 수 있는 수준의 안정적인 브랜치

## 토픽 브랜치
- 기능 추가나 버그 수정과 같은 단위 작업을 위한 브랜치

## git branch 
- 브랜치 생성및 현재 브랜치 확인 명령어

## git merge
- 병합 명령어

## git checkout
- 브랜치 선택

# merge conflict

충돌은  merge한 두 브랜치에서 같은 파일을 변경 했을때 충돌이 발생한다.

충돌 해결

1. 충돌 파일을 열어 기호 삭제후 알맞게 파일을 수정한다.
2. 다시 수정한 충돌파일을  git add 한다.
3. git commit -m"" 하여 커밋 을한다.
4. git 파일을 동시에 수정했던 브랜치를 병합해준다. 
