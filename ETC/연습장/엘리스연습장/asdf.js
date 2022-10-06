const fetchNum = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(1);
  },1000)
})


fetchNum
  .then((num) =>num*1)
  .then(num => num+2)
  .then(num => new Promise((resolve,resject)=>
    setTimeout(()=>{
        resolve(num*2)
  },1000)
  )
  )
  .then(num => console.log(num)
  )