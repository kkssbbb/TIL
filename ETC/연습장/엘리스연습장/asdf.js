let mom = {
  money :10000
}

let me = {
  phone : 'iphone'
}


me.prototype = mom ;

console.log(me.hasOwnProperty("money"));
