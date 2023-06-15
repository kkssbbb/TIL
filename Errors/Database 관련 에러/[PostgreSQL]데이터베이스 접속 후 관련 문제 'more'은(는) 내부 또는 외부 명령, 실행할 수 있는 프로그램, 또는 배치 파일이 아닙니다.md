# [PostgreSQL] PostgreSQL 데이터베이스 접속 후 관련 문제 해결: 'more'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다.

## 문제 상황

Postgres의 pg_dump 명령어를 사용 하기 위해 cmd에서 postgres(ArisysDB)접속

![스크린샷 2023-06-15 091631](https://github.com/kkssbbb/TIL/assets/89888075/123b7272-3fa1-4617-9970-742f7f3accf8)

접속 후

psql (모든)명령어 입력 시 아래와 같은 에러 메시지 응답

**`'more'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다.`**

> 조치 했던 것
>
> 윈도우 psql 환경변수 설정 후 다시 시도 → 안됨
>
> <br><br><br>

## 해결 방법

PAGER 환경 변수 설정

```bash
set PAGER=less
```

psql 실행시 -P pager=off 옵션 추가하여 페이징 비활성화

```bash
psql -h 127.0.0.1 -d ArisysDB -U postgres -P pager=off
```

\d 테이블 조회

![스크린샷 2023-06-15 092116](https://github.com/kkssbbb/TIL/assets/89888075/d34d198e-a9fe-45b7-8c7b-93b4b7840687)

PAGER 환경 변수 설정 후 psql 명령어 정상 실행
<br><br><br>

## 원인

일단 psql 콘솔에서 **`\d`** 명령어를 실행할 때, Windows에서 제공하는 **`more`** 명령어가 실행되는 현상은 일반적인 동작이 아니다.

나의 경우는 \d 명령어로 테이블을 조회한 결과가 한 화면에 모두 표시되지 않아, 윈도우의 페이징기능인 **`more`** 기능이 기본적으로 사용되려고 했던 것 같다(환경변수 관련해서 자동으로 실행 했던 것 같다.)

그래서, `set PAGER=less` 와 `pager=off` 옵션을 사용하여 페이징을 비활성화 해 결과를 페이지로 나누지 않고 출력하여 `more`명령어를 실행 하지 않고 psql명령어를 실행할 수 있었던 것 같다.
