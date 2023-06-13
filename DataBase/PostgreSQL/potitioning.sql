//파티션 생성을 위한 테이블 생성
CREATE TABLE e_transactions (
  order_id varchar(255) NULL,
  ordered_at date NULL,
  shipped_at date NULL,
  order_amount numeric(18, 0) NULL,
  customer_id varchar(255) NULL
) PARTITION BY RANGE (ordered_at);

--만들어진 e_transactions 확인
SELECT * FROM e_transactions et ;


--e_transactions테이블을 위한 파티션 테이블 생성

CREATE TABLE orders_2020_07_01
PARTITION OF e_transactions FOR VALUES FROM ('2020-07-01') TO ('2020-07-02');
CREATE TABLE orders_2020_07_02
PARTITION OF e_transactions FOR VALUES FROM ('2020-07-02') TO ('2020-07-03');

--생성된 e_transactions테이블의  orders_2020_07_01 및 orders_2020_07_02 테이블 확인
SELECT * FROM orders_2020_07_01;

--e_transactions테이블에 몇개의 레코드를 넣어 테이블 파티션 기능 확인
INSERT INTO public.e_transactions (
order_id, ordered_at, shipped_at, order_amount, customer_id
)
values(1,'2020-07-01','2020-07-02',456,'1'),
(2,'2020-07-02','2020-07-03',631,'1');

-- 각 파티션에 산입된 데이터 확인
SELECT * FROM orders_2020_07_01;
SELECT * FROM orders_2020_07_02;

-- 파티션 테이블 제거 ALTER 명령어 사용
-- ALTER 명령은 e_transactions테이블에서 파티션이 제거되어 일반테이블로 유지한다 즉, 테으블 삭제는 아니다.
-- 파티션을 아예 삭제하려면 DROP 명령어를 사용한다.
ALTER TABLE e_transactions DETACH PARTITION orders_2020_07_01;
