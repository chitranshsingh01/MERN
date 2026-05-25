function api1(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("api1")
        },2000)
    })
}

function api2(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("api2")
        },2000)
    })
}

function api3(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("api3")
        },5000)
    })
}

let x= Promise.all([api1(),api2(),api3()]).then((data)=>{
    console.log(data);
})


