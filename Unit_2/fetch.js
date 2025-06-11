

// fetch : It is a function that get API and return response object and when we convert it into JSON it again promise after resolving JSON promise then we get data in array of object | fetch is a javascript web browser api.



let api = "https://jsonplaceholder.typicode.com/todos";
 
// ---------------------------- Using .then and .catch    

// fetch(api)
// .then(function cb(response){     // simple function : 1
//     return (response.json())
// })
// .then (function cb(data){
//     console.log(data)
// })

 
// fetch(api)           
// .then((response) => {          /// arrow function  : 2
//    return response.json()      // response wrape in promise so with the help of json() we get data from api
// })     
// .then(data => {
//     (console.log(data))
// })

//  ----------------------------    Using async and await  
 


async function getData() {
    try {
        let responce = await fetch(api);      // fetch als return promise
        let data = await responce.json();     // that's why we use await in 2nd line to handel promise
        console.log(data)
    }                              
    catch(err){
          console.log(err)
    }
    finally{
        console.log("Hii i am finally")
    }
}

// getData()


//  ------------------------           


let api2 = "https://fakestoreapi.com/products";

// function logic1(products){
//      return products.price > 50
// }

// function logic2(a,b){
//    return a.price-b.price;
// }

// function logic3(a,b){
//    return a.title.localeCompare(b.title);
// }

let logic4 = ((acc, total) => {
         return Math.round(acc + total.price)
});


async function operation(){
    try{
        console.log("start")
        let responce = await fetch(api2);
        let data = await responce.json(); 

        //  let fil = data.filter(logic1)     // filter
        // console.log(fil)
        
        // let fil = data.sort(logic2)
        // console.log(fil)

        // let fil = data.sort(logic3)
        // console.log(fil)

        let fil = data.reduce(logic4, 0)
        console.log(fil + " Rs")

    }
    catch(err){
        console.log(err)
    }
    finally{
        console.log("End");
    }
}
//  operation()