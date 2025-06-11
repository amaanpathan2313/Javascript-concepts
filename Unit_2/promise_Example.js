

let p1 = new Promise((res, rej) => {
    rej ("It reject")
})

// p1.catch((err) => console.log(err))
// p1.catch((err) => console.log(err))  //beacause we write p1.catch 2nd time also was run 2 times

// p1.catch((err) => console.log(err))
// .catch((err) => console.log(err))       //beacause we write .catch 2nd time then it run run 1 time only


//  ----------------------------------

let p2 = new Promise((res, rej) => {
    rej ("It reject")
})

// p2.catch((err) => console.log(err))
// p2.then((err) => console.log(err))   // p1.then can't run beacause it reject promise

// p2.catch((err) => console.log(err))
// .then((err) => console.log(err))   // .then it undefine


//      --------------------------------------

let p3 = new Promise((res, rej) => {
    rej ("It reject")
})

p3.then(function cb(){
      console.log("p1")
})
.then(function cb(){
      console.log("p2")
})
.then(function cb(){
      console.log("p3")
})
.catch(function cb(err){              // catch execute thats why .then are also execute
      console.log("Hii am catch")
})
.then(function cb(){
      console.log("p5")
})










