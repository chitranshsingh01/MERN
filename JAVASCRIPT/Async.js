// async function fun1(){
//     return "helllo";
// }
// let x =fun1();
// console.log(x);


// function fun2(){
//     return Promise.resolve("hello")
// }
// let y=fun2();
// console.log(y);


function ex(){
    return Promise.resolve("promiseeeesssss")
}

async function ex2(){
    let x =await ex()
    // return x;
    console.log(x);
}


let z=ex2();
// console.log(z);

// THE JS WAITS FOR THE AWAIT TO COMPLETE TO MOVE FURTHER ON THE CODE 




