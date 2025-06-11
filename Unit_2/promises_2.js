
// Promises : The promises basically represent the upcoming function are succed OR failure of an async.
// Promises provide a better way to handle asynchronous tasks and avoid callback hell. They allow you to chain asynchronous operations without deep nesting.

// Promise has initially pending state but the final state is either resolve (fullfill) OR reject.

///          1) 

const p = new Promise(function executer(resolve,reject){  // create promise class
    setTimeout(function(){
        let condition = true;
        if(condition){
            resolve ("P is resolve");
        }else{
            reject ("P is reject");
        }
    },5000) // timeout function
}) // promise class

// console.log(p)


///       2)
// .then use to return value after resolve
// .catch use to return value after reject

let pro = new Promise(function executer(resolve, reject){
  setTimeout(function(){
         let condition = true;
         if(condition){
            resolve ("P is resolve")
         }else{
            reject ("P is reject");
         }
  },2000);  // set time out
}); // promise class


// pro.then(function onResolve(data){            // it return when promise success [resolve]
//     console.log(data)
// });

// pro.catch(function onReject(err){             // it return when promise failed [reject]
//     console.log(err);
// });


//   3)


const prom = new Promise(function executer (resolve,reject){

    setTimeout(function(){
        let flag = true;
         if(flag){
            resolve ("P is Resolve");
         }else{
            reject ("P is reject");
         }
    },2000);  // call back function
}); // prom class

// prom.then(function onResolve(res){    /// .then for success
//     console.log(res);
// });

// prom.catch(function onReject(res){  /// .catch for reject
//     console.log(res);
// });

//       4)

function info(name){
    return new Promise(function execute(res,rej){
        setTimeout(function(){
            let flag = true;
            if(flag){
                res (`Hi, ${name}`);
            }else{
                rej ("Can't get name");
            }
        },2000);
    }); // promise class
}; // info function

// info("amaan").then(function onResolve(res){
//     console.log(res);
// });

// info().catch(function onReject(rej){
//        console.log(rej);
// });

//                5)

// Here we combine .then & .catch promise methods. 

function loation(place) {
    return new Promise(function execute(resolve, reject) {
        let flag = true;
        setTimeout(function () {
            if (flag) {
                resolve(`${place}`)
            } else {
                reject("Location are not provided")
            }
        }, 2000); // time out
    }); // promise class
} // location function


// loation("Panvel").then(function onResolve(res) {
//     console.log(res);
// })
// .catch(function onReject(rej) {
//     console.log(rej);
// });


//      6)  name / age / role / location /  :   // 1 catch method for all function
                          /// Promise chaining

function personName(name){                           /// name
    return new Promise(function executer(resolve,reject){
        setTimeout(function(){

            let flag = true;
         if(flag){
             resolve (`Hello, ${name}`);
            }else{
                reject ("Flag is false")
            }
        },2000)
    }); // promise class 
} // personName function


function person_age(age){           // age
       return new Promise(function executer(resolve, reject){   
        let flag = true;
        setTimeout(function(){
             if(flag){
                resolve(`Age : ${age}`)
             }else{
                reject ("Reject age")
             }
          },2000) // time out
       }) // promise class
} //person_age function


function location1(place){                   // location
       return new Promise(function executer(resolve, reject){   
        let flag = true;
        setTimeout(function(){
             if(flag){
                resolve(`Location : ${place}`)
             }else{
                reject ("Location are incorrect")
             }
          },2000) // time out
       }) // promise class
} //person_age function

 
personName("Amaan")
.then(function onResolve(res){
    console.log(res);
    return person_age(22)
})
.then(function onResolve(res){
     console.log(res);
     return location1("panvel");
}).then(function onResolve(res){
    console.log(res);
}).catch(function onReject(rej){       // 1 catch method for all function
    console.log(rej);
    
})
 




