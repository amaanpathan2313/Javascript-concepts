

//  ---------------      Try - catch - finally        ----------------------

// with the help of try - catch we handel reject (Error) case in promises

// try :  when promise us fullfiled it will handel similer to => .then

// catch :  when promise us reject it will handel similer to => .catch

// finally : finally is just a add on to (.then & .catch) either your promise is failed or pass /////
//           finally block is always execute.
//           finally function does not take any parameter => .finally(()={code})


//                 ========================  finally =================

// let p1 = new Promise((res, rej) => {
//     let flag = false;
//     setTimeout(()=>{
//       if(flag){
//        res ("p1 is true");
//       }else{
//         rej ("p1 is failed");
//       }
//     },5000)
// })


// p1
//     .then(function cb(res) {
//         console.log(res);
//     })
//     .catch(function cb(rej) {
//         console.log(rej);
//     })
//     .finally(() => {                          // finally function does not take any parameter
//         console.log("Hiii i am finally block");
//     });


//               ---------------------------------


let p2 = new Promise((res, rej) => {
    let flag = true;
    setTimeout(() => {
        if (flag) {
            res(5);
         } else {
            rej("p2 is failed")
        }
    }, 5000)
});

// p2
//     .then(function cb(res) {
//         console.log(res);         // 5
//         return res * 2;
//     })
//     .then(function cb(res) {
//         console.log(res)          // 10
//         return res * 2;
//     })
//     .finally(function cb(res){            // finally doesn't do anything with parameter
//         console.log(res);//  undefine     // that's why before finally block whatever it return to 
//         return res * 2;                   // directly catch the block are after finally and finally 
//     })                                    // block doesn't affect the value
//     .then(function cb(res) {
//         console.log(res)           // 20
//         return res * 2;
//     })


//             ---------------------------------------


//                 ======================== try - catch  =================


let p3 = new Promise((res, rej) => {
    let flag = false;
    setTimeout(() => {
        if (flag) {
            res("p3 is passed");
         } else {
            rej("p3 is failed")
        }
    }, 5000)
});


async function runp3(){
    try{                    // promise success try block will run
        let data = await p3     
        console.log(data);
    }
    catch(err){             // // promise reject catch block will run
        console.log(err)
    }
    finally{
        console.log("I am finally")
    }
}

runp3();

//                      ------------------------------

function checkAge(age){
    return new Promise(function executer (res, rej){
        setTimeout(function(){
             if(age >= 18){
               res (`Congrates you are ${age} year old`)
             }else{
               rej (`your age is ${age} please wait for ${18-age} year`)
             }
        }, 2000)
    }) // promise function
}  //  checkAge


// async function licence(){
//      console.log("Before try block")
//      try{
//        console.log("Inside try block");
//        let data = await checkAge(15);
//        console.log(data)
//        console.log("try block end");
//      }
//      catch(err){
//        console.log("Inside catch block");
//        console.log(err);
//        console.log("catch block over");
//      }
//      finally{
//        console.log("So what is your dream car")
//      }
// }

// licence()

// console.log("Amaan")


//                     ------------------------------------

