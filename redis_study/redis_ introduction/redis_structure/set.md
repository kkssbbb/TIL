INDEX
- [레디스 set 자료구조 특징](#레디스-set-자료구조-특징)
- [set 문법](#set-문법)
  - [sadd - set 멤버 추가](#sadd---set-멤버-추가)
  - [smembers - 조회](#smembers---조회)
  - [scard -  요소의 개수 조회](#scard----요소의-개수-조회)
  - [srem  -  set 멤버 제거](#srem-----set-멤버-제거)
  - [sismember - 특정 멤버 set에 있는지 확인](#sismember---특정-멤버-set에-있는지-확인)
- [redis set 활용](#redis-set-활용)
  - [좋아요 선택](#좋아요-선택)
  - [좋아요 개수](#좋아요-개수)
  - [좋아요 눌렀는지 확인](#좋아요-눌렀는지-확인)


## 레디스 set 자료구조 특징
- 순서가 없고 중복이 없는 자료구조

<br>


## set 문법

### sadd - set 멤버 추가
```docker
127.0.0.1:6379> sadd memberList ksb
(integer) 1
```
### smembers - 조회
```docker
127.0.0.1:6379> smembers memberList
1) "ksb"
```
### scard -  요소의 개수 조회
set cardinality = set의 종류(개수) 조회
```docker
127.0.0.1:6379> scard memberList
(integer) 1
```
### srem  -  set 멤버 제거
(set remove)
```docker
127.0.0.1:6379> srem memberList ksb
(integer) 1
```
### sismember - 특정 멤버 set에 있는지 확인
```docker
127.0.0.1:6379> sismember memberList ksb
(integer) 1
```

<br>

## redis set 활용
>💡 set 은 중복을 허용하지 않은점을 활용하여 좋아요 기능을 구현 할 수 있다.

### 좋아요 선택
```docker
127.0.0.1:6379> sadd likes:post:1 ksb
(integer) 1
127.0.0.1:6379> sadd likes:post:1 wdf
(integer) 1
127.0.0.1:6379> sadd likes:post:1 lsd
(integer) 1

```
### 좋아요 개수
```docker
127.0.0.1:6379> scard likes:post:1
(integer) 3
```
### 좋아요 눌렀는지 확인
```docker
127.0.0.1:6379> sismember likes:post:1 ksb # 값이 있으면 1 없으면 0
(integer) 1
```