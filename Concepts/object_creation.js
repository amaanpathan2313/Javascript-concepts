
//  Factory function  | Constructor function | Class Constructor function => Create obj with multiple methods
    
//  object literals => Factory function => Constructor function =>  Class Constructor function

// Factory function : Draw back of factory function are we cannot easily differenciate a normal function and //
//                    factory  function |   A factory which create objects
 

    let user = {          // object literals  => {}
        name : "Amaan",
        location : "Panvel",
        role : "SDE1",
        age : 22
    }

    //    --------------------------------

    let user1 = {                 // creating object is known as object literals and putting approprite  
        name : "Amaan",           // functonality and approprite data and bundel it is known as encapsulation
        score : 1,
        increment : function(){
            user1.score++;
        }
    }

    // console.log(user1)
    // user1.increment()
    // console.log(user1)

    //     --------------------------------------  A factory which create objects
 
                             // Factory functions
                       
function createObj(name, age, sal){        // It called as Factory function 
    let user = {};                              
    user.name = name,
    user.age = age,
    user.sal = sal
    user.increment = function(){
        this.age++;                  // age increment by 1
    }
    return user
}

// let emp1 = createObj("Amaan", 22, "30,000")
let emp1 = createObj("Amaan", 22, "30,000")
let emp2 = createObj("SRK", 58, "300,000")
let emp3 = createObj("Azim", 22, "4000")

// console.log(emp1)
// emp1.increment()
// console.log(emp2)
// console.log(emp3)
// console.log(emp1)


 //       -------------------------------------


function makingCar(brand, model, tarnsmssion, fule, year=2024){
   let car = {};
   car.brand = brand;
   car.model = model;
   car.year = year;
   car.tarnsmssion = tarnsmssion;
   car.fule = fule;

   car.addCNG = function(){
    car.fule += " CNG"
   }
   return car;
}

let car1 = makingCar("tata","Safari Dark Edition","DCA","Desail",2025);
let car2 = makingCar("tata","Nexon","DCA","Desail");
let car3 = makingCar("BMW","X1","Manula","Desail");
// console.log(car1)
// car1.addCNG();
// console.log(car1)
// console.log(car2)
// console.log(car3)

//         ---------------------------  Constructor function    ---------------------------------

// Constructor function => factory function - object creation - return object.

// Constructor function : We easily differenciate between a normal function and constructor function beacause constructor function are start with capital letter [e.g. function User(){}] it is convention.

// let emp = new functionname(); // new keyword are inicially create an object and store in memory therefoer we don't need to create an object inside function and returning it; and it will also invoke function.

// let emp = new functionname();    at a time we invoke constructor function with new it create temp variable in memory then this.obj key = value store in temp varible and after function end get it transfer to the emp variable then emp is an object.


function StudentAdd(name, age, std){
    this.name = name;
    this.age = age;
    this.class = std;
    this.std = function(n){
        this.class = n;
    }
}

// let student1 = new StudentAdd("Amaan", 22, "M.tech");
// let student2 = new StudentAdd("SRK", 58, "Science");
// let student3 = new StudentAdd("Raju", 12, "5th");
// console.log(student1)
// console.log(student2)
// console.log(student3)
// student3.std("6th")
// console.log(student3)

//                      -------------------------

function CarCollection(name, model, year, price, age){
    this.Owner_Name = name;
    this.Model = model;
    this.Buy_year = year;
    this.Price = price;
    this.Age = age;

    //  this.increaseAge = function(){
    //     this.Age++;
    // }

     this.increaseAge = () => {        /// Here both function are work normal as well as arrow beacause it 
        this.Age++;                     // decleare inside new memory it have only that level access
    }
}

// let amaan = new CarCollection("Amaan","Safari Dark Edition", 2025, "20L", 22);
// let SRK = new CarCollection("SRK","Rolles Royel", 2017, "3Cr",58);
// let avneet = new CarCollection("Avneet", "Range Rover", 2023, "80L",22);

// console.log(amaan)
// console.log(SRK)
// console.log(avneet)
// avneet.increaseAge()
// console.log(avneet)


//        ------------------------------------------
//                                         Class Constructor function 

//  After ES6 class is introduce | Class Constructor is only a synthetical suger on constructor function | 
//  Class Constructor use for encapsulation

//                     Constructor function === Class Constructor function

class Users {
    constructor(name, salery, age){
           this.name = name;
           this.salery = salery;
           this.age = age;

           this.increment = (n) => {
            this.salery += n
           }
    }
}

let emp01 = new Users("Amaan", 50000, 22);
console.log(emp01)
emp01.increment(10000)
console.log(emp01)








 