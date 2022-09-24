/* for 문을 공부 중이신가보네요~ 공부에 왕도가 어디겠습니까만은 
별을 그린다가 아니라 별을 그리기 위한 숫자를 찾는다 -> 
공백의 개수, 별의 개수 -> 
숫자의 변화에 맞는 반복문의 조건을 떠올린다 -> 
일단 1~2줄만 해본다 -> 
조합 처럼 일단 해야할 단계를 최대한 쪼개놓고 생각해보는 연습을 해보는 것을 추천드려봅니다 :) */

for(let i = 0; i < 5; i++)  {

    for(let j=4; j > i; j--)  {
      // space
      document.write('&nbsp');
    }
    for(let j=0; j <= i; j++)  {
      document.write('*');
    }
    for(let j=1; j <= i; j++)  {
      document.write('*');
    }
    document.write('<br>');
  }
  document.querySelector

  addEventListener()

