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



//FOOD ORDERING CODE WITH PROMISES 


function selectItem(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Select ${item}`);
      resolve(item);
    }, 1000);
  });
}

function createOrder(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const orderId = Math.floor(Math.random() * 1000000);
      console.log(`order created successfully with id no. ${orderId}`);
      resolve({ item, orderId });
    }, 1000);
  });
}

function payment(item, id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`payment starting for ${item} with id no. ${id}`);
      resolve(true);
    }, 1000);
  });
}

function paymentStatus(status) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Payment successful with status ${status}`);
      resolve();
    }, 1000);
  });
}

// Promise chaining
selectItem("kadai panner")
  .then((item) => createOrder(item))
  .then((data) => payment(data.item, data.orderId))
  .then((status) => paymentStatus(status))
  .catch((err) => console.log(err));