# **VACUUM**

### 먼저 한 줄 요약

- VACUUM은 DB 성능 향상 및 디스크 공간 효율적으로 사용하는 명령어

### VACUUM?

- **VACUUM**은 **PostgreSQL** 에서 사용되지 않는 공간을 회수하고, 데이터 파일의 크기를 최적화 하는 명령어이다.
- **VACUUM**명령어를 통해 데이터베이스의 성능을 향상 시키고 디스크 공간을 효율적으로 사용 할 수 있다.

```sql
-- orders 테이블 생성
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  product_name VARCHAR(100) NOT NULL,
  quantity INT NOT NULL,
  price NUMERIC(10, 2) NOT NULL
);

-- 테스트 데이터 삽입
INSERT INTO orders (product_name, quantity, price)
VALUES
  ('Product A', 10, 100.00),
  ('Product B', 20, 200.00),
  ('Product C', 30, 300.00),
  ('Product D', 40, 400.00);

-- 행 삭제
DELETE FROM orders WHERE id = 2;

-- VACUUM 실행
VACUUM orders;

-- 실행 결과
VACUUM

-- VACUUM 명령어를 사용하여 사용하지 않는 행을 삭제하고, 빈공간 회수
```

### **VACUUM** 정리

- VACUUM은 PostgreSQL에서 사용하지 않는 데이터 공간을 정리하고, 디스크 공간을 최적화하는 명령어이다.
- VACUUM 명령어는 주기적으로 실행하거나 데이터 베이스의 크기가 증가하거나 삭제를 할 때마다 실행해 주는 것이 좋다. 이렇게 함으로써 데이터베이스의 성능을 최적화하고 공간을 효율적으로 관리 할 수 있게된다.
