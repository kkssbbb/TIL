function f1 (){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve("1번 주문 완료");
    },1000)
  });
};
function f2 (msg){
  console.log(msg);
  
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      reject("2번 주문 완료");
    },3000)
  });
};
function f3 (msg){
  console.log(msg);
  
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve("3번 주문 완료");
    },2000)
  });
};

// f1()
// .then((msg)=> f2(msg))
// .then((msg)=> f3(msg))
// .then((msg)=> console.log(msg))

async function order(){
  try{
    const rs1 = await f1();
    const rs2 = await f2(rs1);
    const rs3 = await f3(rs2);
    console.log(rs3);
    

  }catch(e){
    console.log('err = ' , e);
    
  }

}
order()