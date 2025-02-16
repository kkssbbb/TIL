레디스에서

string, lists,sets, sorted sets,Hashes 등의 다양한 자료구조 지원

<!-- omit in toc -->
# String
<!-- omit in toc -->
## 목차

- [레디스는 0~15번 총 16개의 데이터베이스로 구성되어 있다.](#레디스는-015번-총-16개의-데이터베이스로-구성되어-있다)
- [디비 이동 방법 select](#디비-이동-방법-select)
- [디비의 모든 키 조회](#디비의-모든-키-조회)
- [set \< key \> \< value \> : 으로 키값 저장](#set--key---value---으로-키값-저장)
- [get \< key \> 키의 값 조회](#get--key--키의-값-조회)
- [nx : 값 저장할테 일단 값이 빈값일때만 저장하는 옵션 "nx" (Not eXists)](#nx--값-저장할테-일단-값이-빈값일때만-저장하는-옵션-nx-not-exists)
- [ex : 유효기간(TTL) 셋팅 "ex" (expiration)](#ex--유효기간ttl-셋팅-ex-expiration)
- [expire key \<유효시간\>](#expire-key-유효시간)
- [ttl \<key값\> : 유효기간 남은시간 확인(TTL : Time To Live)](#ttl-key값--유효기간-남은시간-확인ttl--time-to-live)
- [특정키 삭제 del](#특정키-삭제-del)
- [모든 키 삭제](#모든-키-삭제)

- [string 활용 (동시성이슈, 캐싱처리)](#string-활용-동시성이슈-캐싱처리)
  - [레디스의 기본적인 스트링 자료구조르 실무에서 활용하는 방법](#레디스의-기본적인-스트링-자료구조르-실무에서-활용하는-방법)
  - [좋아요 기능구현](#좋아요-기능구현)
  - [재고관리](#재고관리)
  - [캐싱(임시저장)기능구현](#캐싱임시저장기능구현)
  - [정리](#정리)


레디스에서 키값은 모두 문자열
value 값은 문자/숫자 구분없이 문자열 형식으로 저장되지만 레디스 내부에서 숫자와 문자를 구분 지음

### 레디스는 0~15번 총 16개의 데이터베이스로 구성되어 있다.

- 디폴트는 0번 데이터 베이스  
  하나의 레디스서버에서 0~15번 디비에 각각 목적에따라 분리할 수 있다.  
  예를들어서 0번은 인증관련, 1번은 캐싱관련, 2번은 회원 관련 정보 저장 이런식으로 하나의 레디스에서 정보를 각각 목적에 따라서 정리할 수 있도록 활용 할 수 있다 .

```shell
select 10 #10번디비이동
select 0 # 0번 디비 이동
```

### 디비 이동 방법 select

```docker
127.0.0.1:6379> select 10 # 10번디비 이동
OK
127.0.0.1:6379[10]> #10번 디비
```

### 디비의 모든 키 조회

```docker
127.0.0.1:6379> keys *
1) "user:email:2"
2) "user:email:1"
```

### set < key > < value > : 으로 키값 저장

```docker
127.0.0.1:6379> set user:email:3 3ex ex 5
OK
```

### get < key > 키의 값 조회

```docker
get <key>
```
### nx : 값 저장할테 일단 값이 빈값일때만 저장하는 옵션 "nx" (Not eXists)

이미 존재하면 수정x , 없으면 셋팅

```docker
127.0.0.1:6379> set user:email:2 ksb2@naver.com
OK
127.0.0.1:6379> get user:email:2
"ksb2@naver.com"
127.0.0.1:6379> set user:email:2 ksbnew@naver.com nx
(nil)
```

### ex : 유효기간(TTL) 셋팅 "ex" (expiration)

```docker
127.0.0.1:6379> set user:email:3 3ex ex 5 # 5초동안만 저장
OK
127.0.0.1:6379> set user:email:3 3ex ex 5
OK
127.0.0.1:6379> get user:email:3 # 5초후 사라짐
(nil)
```

### expire key <유효시간>

기존 셋팅된값 유효시간 설정 가능

```docker
127.0.0.1:6379> expire user:email:2 2000 ## 기존 저장된 키에 유효시간 설정
(integer) 1
127.0.0.1:6379> ttl user:email:2
(integer) 1984
```

### ttl <key값> : 유효기간 남은시간 확인(TTL : Time To Live)

```docker
127.0.0.1:6379> expire user:email:2 2000
(integer) 1
127.0.0.1:6379> ttl user:email:2 # 해당 키의 TTL 확인
(integer) 1984
```

### 특정키 삭제 del

```docker
127.0.0.1:6379> del user:email:2
(integer) 1
```

### 모든 키 삭제

```docker
127.0.0.1:6379> keys *
1) "user:email:1"
127.0.0.1:6379> flushdb # 모든 키 삭제
OK
127.0.0.1:6379> keys *
(empty array)
```





## string 활용 (동시성이슈, 캐싱처리)
### 레디스의 기본적인 스트링 자료구조르 실무에서 활용하는 방법
- 사용자 인증정보 저장(ex-refresh 토큰)
- 좋아요 기능 구현
- 재고 처리(동시성 이슈 해결)
- 캐싱 기능 구현(jsos 형식의 데이터를 value 값으로 많이 사용)

### 좋아요 기능구현
>💡 string 으로 좋아요을 구현할 경우 누가 좋아요를 눌렀는지 알 수 없어 중복이 발생 할 수 있다.
> 그래서 보통 좋아요같은 기능은 중복을 허용하지 않는 set자료구조를 활용한다.
``` docker
127.0.0.1:6379> set lickes:posting:1 0 # 좋아요 0셋팅
OK
127.0.0.1:6379> incr kikes:posting:1 # 1 증가
(integer) 1
127.0.0.1:6379> get kikes:posting:1 # 조회
"1"
127.0.0.1:6379> decr kikes:posting:1 # 1 감소
(integer) 0
127.0.0.1:6379> get kikes:posting:1 # 조회
"0"
```

### 재고관리
- 레디스는 싱글스레드를 사용하기때문에 동시성 이슈는 생기지 않는다.
```docker
127.0.0.1:6379> set stocks:phone:1 10
OK
127.0.0.1:6379> decr stocks:phone:1
(integer) 9
127.0.0.1:6379> get stocks:phone:1
"9"
```

### 캐싱(임시저장)기능구현
- json 안에 "는 특수문자 처리로 \ " 를 해야한다.
```docker
127.0.0.1:6379> set user:profile:1 " \"id\":\"1\", \"userId\":\"2\", \"name\":\"ksb\" , \"age\":\"14\" " ex 1000
OK
127.0.0.1:6379>
127.0.0.1:6379> get user:profile:1
" \"id\":\"1\", \"userId\":\"2\", \"name\":\"ksb\" , \"age\":\"14\" "
127.0.0.1:6379> ttl user:profile:1
(integer) 979
```

### 정리
레디스의 스트링 자료구조는 사용자 인증 정보 저장, 좋아요 기능 구현, 재고 처리, 캐싱 기능 구현 등 다양한 실무에서 활용될 수 있다. 레디스의 빠른 성능과 간단한 명령어를 통해 효율적으로 데이터를 관리할 수 있다. 동시성 이슈를 걱정할 필요가 없으며, JSON 데이터의 캐싱도 손쉽게 처리할 수 있다.
