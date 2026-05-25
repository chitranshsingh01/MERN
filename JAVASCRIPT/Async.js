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



// Difference between Promises and Async/Await in JavaScript

// --------------------------------------
// 1. Using Promises (.then and .catch)
// --------------------------------------

function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received using Promise");
        }, 2000);
    });
}

console.log("Promise example started");

fetchDataPromise()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });


// --------------------------------------
// 2. Using Async/Await
// --------------------------------------

function fetchDataAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received using Async/Await");
        }, 2000);
    });
}

async function getData() {
    try {
        console.log("Async/Await example started");

        const data = await fetchDataAsync();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getData(); 




