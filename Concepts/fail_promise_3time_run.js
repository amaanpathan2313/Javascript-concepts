function run(n){

    return new Promise((res,rej)=>{

        let flag = (Math.floor(Math.random()*10));

        setTimeout(() =>{

            if(flag > 5){
                res (`${flag} is greater then 5 Successs`);
            }else{

                if(n > 1){
                    console.log(`value is : ${flag}  ==> ${n-1} .....chance remaining`)
                    run(n-1).then(res).catch(rej)
                }else{
                    rej (`${flag} is also less then 5 reject`)
                }

            } // else

        },2000) // setTimeout

    }) // promise

 } // function

 run(3)
 .then(console.log)
 .catch(console.log)