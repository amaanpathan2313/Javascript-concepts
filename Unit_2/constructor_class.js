
// class bankAccount {

//   constructor(name, amount) {
//     this.name = name;
//     this.amount = amount;
//   }

//   deposit(amt) {
//     this.amount += amt;
//   }

// }

// let user1 = new bankAccount("Amaan", 500);

// console.log(user1)
// user1.deposit(5000);
// console.log(user1);

//                          =========================


// class operation{
//   static add(a,b){
//     return( a + b);
//   }
//   static mul(a,b){
//     return (a * b);
//   }
// }
  
// console.log(operation.add(10,5))
// console.log(operation.mul(10,5))


//                          =========================


// class bankAccount{
  //   #balance;
  //   constructor(name,balance){
    //     this.name = name;
    //     this.#balance = balance;
    //   }

    //     getBalance(pin){
      //       if(pin === 2313){
        //          return this.#balance;
        //       }else{
          //         return ("You enter wrong pin")
          //       }
          //     }
          // }
          
          // let u1 = new bankAccount("Amaan",1000);
          // console.log(u1.getBalance(233))  // if pin was correct only then we see the balance
          
          
          //                          =========================
          
          
class bankAccount{
  #balance;
    constructor(name,amount){
      this.name = name;
      this.#balance = amount;
    }
    // get = getter is Read only property               || when we use set = setter it only accept 1 argument
    get balance(){   // when we use get then no need to call that function 
      return this.#balance
    }

} 
          
let user = new bankAccount("Amaan",2000);
console.log(user.balance)       //   here no need to write "user.balance()" use only =>   user.balance;
          
          
///                ==========================


 



class bankAccount{
    #balance;
    constructor(name,accounttype,amount){
      this.name = name;
      this.accounttype = accounttype;
      this.#balance = amount;
    }
  
    get balance(){
      return this.#balance;
    }
  
    withdraw(cash,pin){
             if(pin === "0022"){
              if(this.#balance > cash){
                this.#balance -= cash;
                return (`${cash} this.withdraw success current ${this.#balance}`)
              }else{
                return (`not enough money`)
              }
             }
    }
   }
  
   let u1 = new bankAccount("amaan","saving",1200);
   console.log(u1.balance)
   console.log(u1.withdraw(500,"0022"))
   console.log(u1.balance)





