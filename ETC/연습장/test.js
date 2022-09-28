const bin = {
  money : 200,
}


function UpDateSalary(salary, performance_pay ){
  this.money += +salary;
   this.salary = salary;
   this.performance_pay = performance_pay;
}


let binUpDateSalary = UpDateSalary.bind(bin);
binUpDateSalary(1000,500)
console.log(bin); 
