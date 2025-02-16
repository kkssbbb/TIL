
- [list 문법](#list-문법)
  - [lpush 첫번째 인덱스 추가](#lpush-첫번째-인덱스-추가)
  - [rpush 마지막 인덱스 추가](#rpush-마지막-인덱스-추가)
  - [rpop 마지막 인덱스 꺼내기](#rpop-마지막-인덱스-꺼내기)
  - [lpop 첫번째 인덱스 꺼내기](#lpop-첫번째-인덱스-꺼내기)
  - [lrange list 조회](#lrange-list-조회)
  - [llen list 데이터 개수 조회](#llen-list-데이터-개수-조회)
  - [expire 기존 list 만료시간 지정](#expire-기존-list-만료시간-지정)
  - [ttl list 만료 시간 확인](#ttl-list-만료-시간-확인)
- [Redis List 활용 예시](#redis-list-활용-예시)
  - [정리](#정리)

### redis 자료구조 list 특징
- Redis의 리스트는 양쪽 끝에서 데이터를 추가하거나 삭제할 수 있는 deque(double-ended queue) 자료구조와 유사하다.
- 일반적인 리스트 자료구조에서 맨 앞에 인덱스를 추가하면 뒤에 있는 인덱스가 하나씩 밀리게 되어 성능에 좋지 않은 영향을 미칠 수 있다. 그러나 Redis 리스트는 양 끝에서의 삽입 및 삭제가 O(1) 시간 복잡도로 이루어져 성능이 우수
- 중간에 데이터를 삽입 불가능, 양 끝 인덱스에만 데이터 추가 및 삭제가 가능하다.
- Redis 리스트는 대량의 데이터를 처리할 때 유용하며, 예를 들어, 채팅 메시지 저장, 작업 큐 구현 등 다양한 용도로 활용될 수 있다

## list 문법

### lpush 첫번째 인덱스 추가
```docker
127.0.0.1:6379> lpush listdata 1 
(integer) 1
127.0.0.1:6379> lpush listdata 2
(integer) 2
127.0.0.1:6379> lpush listdata 3
(integer) 3

127.0.0.1:6379> lrange listdata 0 -1
1) "3"
2) "2"
3) "1"
```

### rpush 마지막 인덱스 추가
```docker
127.0.0.1:6379> rpush listdata 4
(integer) 4
127.0.0.1:6379> rpush listdata 5
(integer) 5

127.0.0.1:6379> lrange listdata 0 -1
1) "3"
2) "2"
3) "1"
4) "4"
5) "5"
```
### rpop 마지막 인덱스 꺼내기
```docker
127.0.0.1:6379> lrange listdata 0 -1
1) "3"
2) "2"
3) "1"
4) "4"
5) "5"
127.0.0.1:6379> rpop listdata
"5"
127.0.0.1:6379> lrange listdata 0 -1
1) "3"
2) "2"
3) "1"
4) "4"
```
### lpop 첫번째 인덱스 꺼내기
```docker
127.0.0.1:6379> lpop listdata
"3"
127.0.0.1:6379> lrange listdata 0 -1
1) "2"
2) "1"
3) "4"
```
### lrange list 조회
```docker
127.0.0.1:6379> lrange listdata 0 0 # 0번인덱스부터 0번 인덱스까지 리스트 조회 
1) "3"
127.0.0.1:6379> lrange listdata 0 -1 # 0번인덱스부터 뒤에서 첫번째 인덱스조회
1) "3"
2) "2"
3) "1"
127.0.0.1:6379> lrange listdata 0 -2 # 0번째 인덱스부터 뒤에서 2번째 인덱스 조회
1) "3"
2) "2"
127.0.0.1:6379> lrange listdata 0 -3
1) "3"
```
### llen list 데이터 개수 조회
```docker
127.0.0.1:6379> lrange listdata 0 -1 # 현재 listdata의 list 전체 조회
1) "2"
2) "1"
3) "4"

127.0.0.1:6379> llen listdata # listdata 개수 조회
(integer) 3
```
### expire 기존 list 만료시간 지정
```docker
127.0.0.1:6379> expire listdata 1000
(integer) 1
127.0.0.1:6379> ttl listdata
(integer) 990
```
### ttl list 만료 시간 확인
```docker
127.0.0.1:6379> expire listdata 1000
(integer) 1
127.0.0.1:6379> ttl listdata
(integer) 990
```
<br>

## Redis List 활용 예시
1. **최근 방문 페이지**  
  사용자가 최근에 방문한 페이지의 URL을 저장하는 데 Redis 리스트를 활용할 수 있다. 사용자가 페이지를 방문할 때마다 리스트의 앞에 URL을 추가하고, 리스트의 크기를 제한하여 최대 N개의 최근 방문 페이지를 유지할 수 있다.

```docker
# 최근 방문 페이지 추가
LPUSH recent:pages "http://example.com/page1"
LPUSH recent:pages "http://example.com/page2"
LPUSH recent:pages "http://example.com/page3"
# 최근 방문 페이지 조회
LRANGE recent:pages 0 -1
```

2. **최근 조회한 상품 목록**  
  최근 조회한 상품 목록은 중복을 제거할 수 없기 때문에 Redis의 리스트 대신 Sorted Set(zSet)을 활용하는 것이 좋다. zSet은 각 요소에 점수를 부여하여 정렬할 수 있으며, 중복된 요소를 허용하지 않는다.

```docker
# 최근 조회한 상품 추가 (상품 ID와 조회 시간을 점수로 사용)
ZADD recent:products 1622548800 "product:1"
ZADD recent:products 1622548860 "product:2"
ZADD recent:products 1622548920 "product:3"
# 최근 조회한 상품 조회 (가장 최근 상품부터)
ZRANGE recent:products 0 -1
```

3. **채팅 메시지 저장**  
  채팅 애플리케이션에서 사용자의 채팅 메시지를 저장하는 데 Redis 리스트를 활용할 수 있다. 사용자가 메시지를 보낼 때마다 리스트의 끝에 메시지를 추가하고, 필요에 따라 특정 수의 최근 메시지를 조회할 수 있다.

```docker
# 채팅 메시지 추가
RPUSH chat:room:1 "Hello, how are you?"
RPUSH chat:room:1 "I'm fine, thank you!"
RPUSH chat:room:1 "What about you?"

# 최근 채팅 메시지 조회
LRANGE chat:room:1 0 -1
```

### 정리
- Redis 리스트는 최근 방문 페이지와 채팅 메시지 저장에 유용하게 활용될 수 있다. 
- 그러나 최근 조회한 상품 목록은 중복을 제거할 수 없기 때문에 zSet을 활용하는 것이 더 적합하다. 
- zSet은 중복된 요소를 허용하지 않으며, 각 요소에 점수를 부여하여 정렬할 수 있는 장점이 있다.
