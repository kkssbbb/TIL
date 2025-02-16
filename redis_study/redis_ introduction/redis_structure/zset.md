INDEX
- [zset 특징](#zset-특징)
- [zset 문법](#zset-문법)
  - [zrange - 기본 스코어 기준 오름차순 정렬](#zrange---기본-스코어-기준-오름차순-정렬)
  - [zrevrange - 스코어 기준 내림차순 정렬](#zrevrange---스코어-기준-내림차순-정렬)
  - [zrem - 요소 삭제](#zrem---요소-삭제)
  - [zrank - 특정 멤버가 몇번째인지 순서 출력](#zrank---특정-멤버가-몇번째인지-순서-출력)
- [zset 활용](#zset-활용)
  - [최근 본 상품목록](#최근-본-상품목록)
  - [최근 본상품 5개 조회](#최근-본상품-5개-조회)
  - [withscores - score 같이 (zrange,zrevrange)조회 옵션](#withscores---score-같이-zrangezrevrange조회-옵션)

## zset 특징
- 정렬된 집합
- zset == sorted set
- 집합을 score(순서) 부여하고 score 를 기준으로 정렬

<br>

## zset 문법
zadd - score 부여, score 기준으로 기본 오름차순 정렬
```docker
127.0.0.1:6379> zadd memberList 3 member1
(integer) 1
127.0.0.1:6379> zadd memberList 1 member2
(integer) 1
127.0.0.1:6379> zadd memberList 2 member3
(integer) 1
```
### zrange - 기본 스코어 기준 오름차순 정렬

```docker
127.0.0.1:6379> zrange memberList 0 -1
1) "member2"
2) "member3"
3) "member1"
```
### zrevrange - 스코어 기준 내림차순 정렬
```docker
127.0.0.1:6379> zrevrange memberList 0 -1
1) "member1"
2) "member3"
3) "member2"
```

### zrem - 요소 삭제
```docker
127.0.0.1:6379> zrem memberList member3
(integer) 1

127.0.0.1:6379> zrange memberList 0 -1
1) "member2"
2) "member1"
```
### zrank - 특정 멤버가 몇번째인지 순서 출력
```docker
127.0.0.1:6379> zrank memberList member1
(integer) 1
```

<br>

## zset 활용
### 최근 본 상품목록
- zset을 활용해서 최근 시간순으로 socre(시간)를 설정하여 정렬
- 최근시간 시분초를 초(Unix timestamp)로 변환하여 스코어로 설정하여 최근본상품 저장
```docker
zadd recent:products: 143232 phone
zadd recent:products: 243232 phone1
zadd recent:products: 343232 phone2
zadd recent:products: 443232 phone3 
zadd recent:products: 543232 phone3 # 기존 phone3 덮어쓰기 
zadd recent:products: 643232 phone4
zadd recent:products: 743232 phone5

```
### 최근 본상품 5개 조회
```docker
127.0.0.1:6379> zrevrange recent:products: 0 -1
1) "phone5"
2) "phone4"
3) "phone3"
4) "phone2"
5) "phone1"
6) "phone"
```

### withscores - score 같이 (zrange,zrevrange)조회 옵션
```docker
127.0.0.1:6379> zrevrange recent:products: 0 -1 withscores
 1) "phone5"
 2) "743232"
 3) "phone4"
 4) "643232"
 5) "phone3"
 6) "543232"
 7) "phone2"
 8) "343232"
 9) "phone1"
10) "243232"
11) "phone"
12) "143232"

```





