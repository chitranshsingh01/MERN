const promise1 =new Promise((resolve,reject)=>{
    resolve("hellow2")
    reject("nooo")
})

promise1.then((result)=>{
    console.log(result);
});

promise1.catch((result)=>{
    console.log(result);
})