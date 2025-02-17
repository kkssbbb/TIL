- [레디스 hash 특징](#레디스-hash-특징)


## 레디스 hash 특징
- value 의 값이 map 형태인 자료구조 이다 
- keu:{key:value, key:value ..,,} 식으로 저장

### hset
- 특정 요소값만 수정 가능
```docker
127.0.0.1:6379> hset user:1 name ksb age 17 # 초기화
(integer) 2
127.0.0.1:6379> hset user:1 name les # 특정 요소만 수정
(integer) 0
127.0.0.1:6379> hget user:1 name
"les"
```

### hget - 특정 요소 값 조회
```docker
127.0.0.1:6379> hget user:1 name
"ksb"
```

### hgetall - 맵 전체 조회
```docker
127.0.0.1:6379> hgetall user:1
1) "name"
2) "les"
3) "age"
4) "17"
```

### hincrby - 특정 값을 증가 또는 감소
```docker
127.0.0.1:6379> hincrby user:1 age 10 # 증가
(integer) 37
127.0.0.1:6379> hgetall user:1
1) "name"
2) "les"
3) "age"
4) "37"

127.0.0.1:6379> hincrby user:1 age -10 # 감소
(integer) 27
127.0.0.1:6379> hgetall user:1
1) "name"
2) "les"
3) "age"
4) "27"
```

<br>

## hash 활용
- 빈번하게 변경되는 객체값 캐싱
- 빈번하게 변경되는 객체를 string 자료구조로 json 으로 저장하면 특정 객체의 값을 수정할때 json 에서 그 값을 찾아야하고 또 수정이 완료될때 json 전체를 덮어 쓰기해야해서 빈번하게 변경되는 객체값을 캐싱 할때는 string 보다는 hash 를 쓰는게 더 효율적이다.