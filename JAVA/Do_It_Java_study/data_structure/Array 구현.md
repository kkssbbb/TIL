```java
package ch4;

import java.util.stream.DoubleStream;

public class MyArray {

    int[] intArr;   	//int array
    int count;  		//개수

    public int ARRAY_SIZE;
    public static final int ERROR_NUM = -999999999;

    public MyArray()
    {
        count = 0;
        ARRAY_SIZE = 10;
        intArr = new int[ARRAY_SIZE];
    }

    public MyArray(int size)
    {
        count = 0;
        ARRAY_SIZE = size;
        intArr = new int[size];
    }

    public void addElement(int num)
            //배열에 요소추가 메서드
    {
        if (count >= ARRAY_SIZE) {
            System.out.println("not enough memory");
            return;
        }
        intArr[count++] = num;
    }

    public void insertElement(int position, int num)
            //지정된 위치에 요소를 삽입하는 메서드
    {
        int i;
        if (count >= ARRAY_SIZE) { //메모리가 꽉찬 경우
            System.out.println("not enough memory");
            return;
        }

        if (position < 0 || position > count) {
            //position ==인덱스번호 0~현재인덱스번호(count) 초과시
            System.out.println("insert Error");
            return;
        }

        for (i = count - 1; i >= position; i--) {
            intArr[i+1]= intArr[i]; // 요소들 오른쪽으로 이동
        }

        intArr[position] = num; //받은 인자값에대해서 새로운 값 생성
        count++;
    }

    public int removeElement(int position)
    {
        int ret = ERROR_NUM;

        if (isEmpty()) {
            System.out.println("배열이 비어있습니다.");
            return ret;
        }

        ret = intArr[position];

        for (int i = position; i < count - 1; i++) {
            intArr[i] = intArr[i + 1];
        }
        count --;
        return ret;
    }

    public int getSize()
    {
        return count;
    }

    public boolean isEmpty()
    {
        if (count == 0) {
            return true;
        }
        else return false;
    }

    public int getElement(int position)
    {
        //에러 구문
        if (position < 0 || position > count - 1) {
            System.out.println("현재 검색하려는 배열의 범위를 넘어갔습니다.");
            System.out.println("현재 배열의의 최대 범위는  "+count+" 입니다.");
            return ERROR_NUM;
        }
        //요소값 리턴
        return intArr[position];
    }

    public void printAll()
    {
        if (count == 0) {
            System.out.println("..");
            return;
        }
        for (int i = 0; i < count; i++) {
            System.out.println(intArr[i]);
        }
    }

    public void removeAll()
    {
        for(int i=0; i<count; i++){
            intArr[i] = 0;
        }
        count = 0;
    }

}
```
