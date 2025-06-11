

// ------------------    async function :  ------------------------------

// .then and .catch after timer end it store in call back queue         // it has less priority
// but async / await after timer end it store in micro task queue        // it has major priority


// async keyword is used in front of function to make any normal function into async function.
// async keyword tell to call stack it is a asynorous function

// when we attach anync to any normal function then internally call stack treated it is a promise and
// return value are wrape in promise then we use .then & .catch to handel it

// async function always return a promise 
// and return value wrape inside promise

let p1 = new Promise(function executor(res, rej) {      // type 1 to create promise
    let flag = true;
    setTimeout(function () {
              if(flag){
                res ("Flag is true");
            }else{
                  rej ("Flag is false");
              }
    }, 2000)
})  // p1 class

// p1
// .then(function cb(res){
//     console.log(res);
// })
// .catch(function cb(rej){
//     console.log(rej)
// })

//                ---------------------------

function p2(){                                     //  // type 2 to create promise
    return new Promise((res, rej) =>{
        let flag = true;
        setTimeout(function () {
                  if(flag){
                    res ("Flag is true");
                   }else{
                      rej ("Flag is false");
                  }
        }, 2000)
    })
}

// p2()
// .then(function cb(res){
//     console.log(res);
// })
// .catch(function cb(rej){
//     console.log(rej)
// })


//                -----------------------


async function p3() {                  // async return value wrape in promise
    let flag = true;
    if (flag) {
        return ("Flag is true");
    } else {
        return ("Flag is false");
    }
}
// console.log(p3())

//        ----------------------

function p4(){
    return new Promise((res, rej) => {
          let flag = false;
          setTimeout(function (){

              if(flag){
                  res (`Flag is true`);
                }else{
                    rej (`flag is false`)
                }
        }, 2000);  // set time out
    })   //  promise function
}  ///  p4 function
 

// async function runp4(){    
//     console.log("P4 Start");            // o/p : start => end => flag is true it cannot wait for .then
//     p4().then(function cb(res){       
//      console.log(res);
//     }),
//     console.log("P4 End")
// }

// runp4()



// async function runp4(){    
//     console.log("P4 Start");    // o/p : start => flag => end is true it wait for await then execute next
//     let data = await p4()
//     console.log(data)
//     console.log("P4 End")
// }

// runp4()

///                 --------------------------------


let p5_1 = new Promise((res, rej) => {
      let flag = true;
      setTimeout(()=>{
        if(flag){
         res ("p5_1 is true");
        }else{
            rej ("p5_1 is failed")
        }
      },5000)
})


let p5_2 = new Promise((res, rej) => {
      let flag = true;
      setTimeout(()=>{
        if(flag){
         res ("p5_2 is true");
        }else{
            rej ("p5_1 is failed")
        }
      },10000)
})

// async function runp5(){
//     console.log("Start");      // 1st
//     let p1 = await p5_1;      // after timer end push in micro task
//     console.log(p1)           // 3rd
//     console.log("mid");       // 4th
//     let p2 = await p5_2;      // after timer end push in micro task
//     console.log(p2);          // 5th
//     console.log("End");       // 6th
// }

// runp5();

// console.log("Hii amaan")   // 2nd



///                 --------------------------------













