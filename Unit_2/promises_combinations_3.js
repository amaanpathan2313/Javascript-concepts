

// Promise chaining : in promise chaining all promise are execute 1 by 1  1=>2=>3=>4 
// Promise combination : in promise combination all profise are execute at a same time.

// in promise combination any 1 promise are failed it directly to in catch 




let p1 = new Promise(function executer(res,rej){
       setTimeout(function(){
          res("Hiii p1")
       },2000);
}) // p1 class

let p2 = new Promise(function executer(res,rej){
       setTimeout(function(){
          rej("Hiii p2")
       },2000);
}) // p2 class

let p3 = new Promise(function executer(res,rej){
       setTimeout(function(){
          res("Hiii p3")
       },2000);
}) // p3 class

let promiseCombnation = Promise.all([p1,p2,p3]);       //Promise.all === p1 && p2 && p3

promiseCombnation
.then(function onResolve(res){    // if all are true only then execule
    console.log(res);
})
.catch(function onReject(rej){  // if any one reject catch execute
    console.log(rej);
})


// //Promise.all === p1 && p2 && p3

// //Promise.any === p1 || p2 || p3 which promise hae less timer and true | success only that one execute sturcture are same are above

// //Promise.race === p1 , p2 , p3 which promise hae less timer only that one execute on matter it success OR failed sturcture are same are above

// promiseCombnation.Promise.allSettled([])  array of all settled promise whether is true or false


//  ================= ## Promise combination  ## ======================
// promise.all  , promise.any  , promise.race  ,  promise.allSettled 

function check1(){
   return new Promise (function executor (res, rej){
       let flag = true;
       setTimeout(function (){
           if(flag){
               res (`peomise 2 pass`)
           }else{
               rej (`Promise 2 fail`)
           }
       },2000)
   })   // promise class
} //  function check

function check2(){
   return new Promise (function executor (res, rej){
       let flag = true;
       setTimeout(function (){
           if(flag){
               res (`peomise 3 pass`)
           }else{
               rej (`Promise 3 fail`)
           }
       },2000)
   })   // promise class
} //  function check


function check3(){
   return new Promise (function executor (res, rej){
       let flag = true;
       setTimeout(function (){
           if(flag){
               res (`peomise 1 pass`)
           }else{
               rej (`Promise 1 fail`)
           }
       },2000)
   })   // promise class
} //  function check


 //  1 promise.all  // if all are true then execute like & oerator

// let result = Promise.all([check1(),check2(),check3()]);

// result
// .then(function cb(res){
//    console.log(res)
// })
// .catch(function cb(rej){
//    console.log(rej)
// })


// 2  promise.race            // which has less time no matter pass or fail


// let result = Promise.race([check1(),check2(),check3()]);

// result
// .then(function cb(res){
//    console.log(res)
// })
// .catch(function cb(rej){
//    console.log(rej)
// })


//  3) promise.any   is || operator it return fastest true promise


// let result = Promise.any([check1(),check2(),check3()]);

// result
// .then(function cb(res){
//    console.log(res)
// })
// .catch(function cb(rej){
//    console.log(rej)
// })


//  4)  promise.allSettled  =  it give a arrray of all promise iether it successs or failed



// let result = Promise.allSettled([check1(),check2(),check3()]);

// result
// .then(function cb(res){
//    console.log(res)
// })
// .catch(function cb(rej){
//    console.log(rej)
// })
