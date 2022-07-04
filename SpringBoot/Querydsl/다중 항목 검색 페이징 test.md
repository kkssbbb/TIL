# Querudsl TEST

~~~java
 @Test
    public void testQuery1() {
        //PageRequest.페이징(메서드 1페이지에, 10개씩 페이징 , "gno" 를 정렬)
        Pageable pageable = PageRequest.of(0, 10, Sort.by("gno"));

        //동적쿼리를 이용할뗀 QEntity 사용 ,동적쿼리를 이용해 데이터를 찾을 엔티티
        QGuestBook qGuestBook = QGuestBook.guestBook;

        //where 조건을 넣어준다.
        BooleanBuilder booleanBuilder = new BooleanBuilder();

        //title like %5% 라는  조건문을 만들어주는 코드
        BooleanExpression expression = qGuestBook.title.contains("5");

        //where + title like %5% 결합
        booleanBuilder.and(expression);

        //QuerydslPredicateExecutor의 findAll을 이용해서 페이징과 검색
        Page<GuestBook> result = guestBookRepository.findAll(booleanBuilder, pageable);


        result.stream().forEach(GuestBook -> System.out.println("GuestBook = " + GuestBook));
    }
~~~