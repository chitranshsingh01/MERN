// setTimeout(() => {
//     console.log("Step 1");

//     setTimeout(() => {
//         console.log("Step 2");

//         setTimeout(() => {
//             console.log("Step 3");

//             setTimeout(() => {
//                 console.log("Step 4");
//                 setTimeout(() => {
//                     console.log("step 5");
                    
//                 }, 1000);
//             }, 1000);

//         }, 1000);

//     }, 1000);

// }, 1000);

// console.log("start");
// const promise1 =new Promise((resolve,reject)=>{
//     console.log("hello");
//     reject("rejected")
//     resolve("hellow2")

// })

// console.log(promise1);

// console.log("end");


const promise1 =new Promise((resolve,reject)=>{
    resolve("hellow2")
})

promise1.then((result)=>{
    console.log(result);
});

