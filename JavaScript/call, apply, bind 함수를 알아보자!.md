<br>

자바스크립트에서 this는 일반적으로 객체에 속한메서드인경우는 그 객체를 가르킨다, <br>
하지만 js의 특징으로 this를 함수를 통해서 따로 지정해줄 수도 있는데 이 (call,apply, bind)함수들을 알아보자.
<br>
<br>

# call
- 이 메서드는 모든 함수에서 사용가능하며, this를 지정해 줄 수있다.
~~~js
const bin = {
  money : 200,
}

const jisu = {
    money:100,
}

function UpDateSalary(salary){
  this.money += +salary;
   this.salary = salary;
}


UpDateSalary.call(bin,1000);

console.log(bin); 
/* { money: 1200, salary: '1000' } */
~~~

UpDateSalary()의 this를 call함수로 bin객체로 지정해주고 <br>
1000을 인자값으로 전달해주어서 객체 bin의 money는 1200이되고
salary라는 속성을 추가해 주었다.

<br><br>


# apply
- 함스 매개변수를 배열로 처리한다는 점을 뺴고는 동작방식이 call함수와 똑같다고 볼 수 있다.
- apply는 매개변수를 배열로 받는다.
~~~js
const bin = {
  money : 200,
}

const jisu = {
    money:100,
}

function UpDateSalary(salary, performance_pay ){
  this.money += +salary;
   this.salary = salary;
   this.performance_pay = performance_pay;
}


UpDateSalary.apply(bin,[1000,300]);

console.log(bin); 

/* { money: 1200, salary: 1000, performance_pay: 300 }*/
~~~
<br><br>

# bind
-bind함수는 this값을 다른 값으로 대체하여 고정으로 바꿔줄 수 있다.
~~~js
const bin = {
  money : 200,
}


function UpDateSalary(salary, performance_pay ){
  this.money += +salary;
   this.salary = salary;
   this.performance_pay = performance_pay;
}

/* UpDateSalary메서드의 this를 bin으로 영구히 바꿔주어서 binUpDateSalary를
호출 할 떄마다 this= */
let binUpDateSalary = UpDateSalary.bind(bin);
binUpDateSalary(1000,500)
console.log(bin); 
~~~
