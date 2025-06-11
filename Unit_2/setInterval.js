


//   ===================================  setInterval  ===============================================

//          ==================   E.g: 1  ===========================


function otp(){
    let n = parseInt(Math.random() * 10000) + 1;
    console.log(n)
}

let time = setInterval(otp,50)  //  pass function name only & time interval & hold in variable

setTimeout(() => {
  clearInterval(time)         // with variable {id} name stop the interval
},5000)
