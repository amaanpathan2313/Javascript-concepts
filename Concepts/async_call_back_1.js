 

// function table(n) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(n * i)
//     }
// };

// const id = setTimeout(function () {            // set timeout function
//     table(5);   // call back function
// },1000);       // we tell the browser please start timer and after 1,000ms table() function execute
// // clearTimeout(id);


// // in js there is call back queue when time is over then function load in call "back queue" and "event loop" continously monitor callback queue. when there is a function in call back queue and call stack is empty then
// // event loop pick the function from call back queue then load into the call stack to execute the function and if
// // function are already in call stack then event loop wait untill the call stack empty then load the function into call stack.

// // setTimeout | timer | call back queue | event loop are play very important role in async js.

// // in setTimeout unique id is assign to each timer

// // use clearTimeout to stop | kill timer
// console.log("45");

// // +------------------------+                         +----------------------+
// // | call stack             |                         | Callback Queue       |
// // |                        |                         |                      |
// // |                        |                         | 1. function one      |
// // |                        |                         |                      |
// // |                        |                         |                      |
// // |                        | <-- (Event loop) <----- | 2. function 2        |
// // |                        |                         |                      |
// // |                        |                         |                      |
// // +------------------------+                         +----------------------+




    // ---------               set time out 1 : undefined 
//console.log("one");
 
function greet(name){
  setTimeout(function(){
    return (name);
  },500)
}

let n = greet("Amaan");
//console.log(n)   // it give undefine beacause we call it in synchronous way.

//console.log("two")



//  ------------------------------   set timeout 1
 
//                           //  1

// console.log("1")

// function print(n,cb){
// setTimeout(function(){
//   cb (`Hii, ${n}`);
// },2000)
// }

// print("Amaan", function cb(data){
//    console.log(data)
// })
// console.log("2");
//                                     //  2

// let no = 5;
// console.log("square of " + no + " : ")

// function square(n, cb){
//   setTimeout(function (){
//      cb (n * n);
//   },2000)
// } // square function

// square(no, function cb(data){
//   console.log(data);
// })

//                                    // 3


// ---------------- print name , age , role, location

function person_name(name,cb){
  setTimeout( function(){
          cb (`My name is ${name}`)
  },2000)
}

function person_age(age,cb){
  setTimeout(function(){
        cb (`My age is ${age}`)
  },4000)
}

function person_role(role,cb){
  setTimeout( function(){
       cb (`Working as ${role}`)
  },6000)
}

function place(location,cb){
  setTimeout(function(){
    cb (`At ${location}`)
  },8000)
}

person_name("Amaan", function cb(data){        ///  Callback hell
  console.log(data);
  person_age(22, function cb(data){
    console.log(data);
    person_role("SDE 1", function cb(data){
      console.log(data);
      place("Navi mumbai", function cb(data){
        console.log(data);
      })
    })
  })
})
 
 
 