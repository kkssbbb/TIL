# Connection pool

JDBC API 를 이용해서 DB와 Connection 을 하는작업은 비용이  많이 발생한다.

Connection Pool을 이용하면 애플리케이션 로딩 시점에 Connection 객체를 미리 생성하고, 애플리 케이션에서 디비 연결이 필요할 경우 미리 준비된 Connection 객체를 상용하여 애플리케이션 성능을 향상 시킬 수 있다.

---

다음은 MYSQL 문서에 나와있는 테이블이 행을 산입하는데 필요한 대략적인 수치(시간의 비율)이다.  

아래 문서에서 알 수 있듯 행을 삽입할때 디비 연결 단계가 가장 비용(시간)이 든다는 것을 알 수 있다.

> 행을 삽입하는 데 필요한 시간은 다음에 따라 결정됩니다. 숫자는 대략적인 수치를 나타내는 다음 요소들 크기:
> 
> - 연결: (3)
> - 서버로 쿼리 보내기: (2)
> - 쿼리 구문 분석: (2)
> - 행 삽입: (1 × 행 크기)
> - 인덱스 삽입: (1 × 인덱스 수)
> - 마감: (1)
> 
> https://dev.mysql.com/doc/refman/8.0/en/insert-optimization.html
> 

## (Connection) 연결은 왜 비용이 많이 들까

아래에 설명 되어있는 Connection 객체 생성 과정에서  DB와 애플리케션 서버에 TCP/IP 커넥션을 새로 생성하기 위한 리소스를 매번 사용해 실제 서비스 응답속도에 영향을 많이 끼친다.

### Connction 객체 생성 과정

Connction객체 생성 과정은 JDBC를 실행과정에서 JDBC 드라이버를 로드하고  데이터베이스를 연결하는 과정에서 DriverManager.getConnection() 메서드로 데이터베이스와 연결하여 Connection 객체를 얻는과정이다.

**JDBC 실행과정**

![스크린샷 2023-12-13 104726](https://github.com/kkssbbb/TIL/assets/89888075/3deb94c0-8761-4196-a8f1-4863a033c7df)

**Connection 객체 생성과정**

1. 애플리케이션에서 DB 드라이버를 통해 커넥션 조회
2. DriverManager.getConnection() 메서드로 DB와 TCP/IP 통신 (통신과정에서 3-way-hand-shake 동작)
3. DB와 연결이되면  DB의 아이디, 패스워드, 기타 DB 정보를 DB에전달
4. DB는 아이디,패스워드를 통해 인증을 거친후 내부에 DB 세션 생성
5. DB는 커넥션 생성 완료 응답
6. DB 드라이버는 커넥션 객체를 생성해서 클라이언트에 반환
    
    <aside>
    💡 DB 접속시 TCP 통신을 하는데   TCP 통신 과정에서 정확한 데이터 전송을 보장하기 위해 3-way-handshake 과정을 치며
     클라이언트와 디비가 통신이 끝나면 데이터유실을 방지하기위해 4-Way-Handshake 과정을 거치며 통친이끝난다.
    
    </aside>
    

## Connection Pool

위에 설며명대로 클라이언트에서 DB 연결할때 마다 반복적으로 Connection 객체를 만드는것은 비효율적이며  비용이많이들어 이를 보안하기위해 Connection Pool이란 개념을 사용한다.

Connection Pool은 데이터베이스와 연결된 커넥션을 미리 만들어 pool에 보관한다음 필요할때마다 커넥션 풀의 커넥션을 이용하고 반환한다.
![스크린샷 2023-12-13 112059](https://github.com/kkssbbb/TIL/assets/89888075/55117c3d-2b83-46b5-9ea1-1bc2e7d29eec)



      출처 - https://shuu.tistory.com/130

커넥션 풀에 들어있는 Connection  객체는 TCP/IP로 DB와 연결되어있는 상태이다.

커넥션 풀에 이미 만들어져있는 커넥션 객체로인해 DB 드라이버를 통해 다시 커넥션 객체를 생성하는 과정을 생략이 가능하다.

---

ref

- https://1-7171771.tistory.com/119
- https://hyuntaeknote.tistory.com/12
- https://shuu.tistory.com/130
- https://dev.mysql.com/doc/refman/8.0/en/insert-optimization.html