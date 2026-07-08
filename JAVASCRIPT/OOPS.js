let obj={
    username:"chitransh",
    email:"chitranshsingh02@gmial.com",
    printuser(){
        console.log(this.username);
    }
}

obj.printuser()

function product(name,price){
    this.name=name;
    this.price=price;
    return this;
}

let p1=new product("iphone15",75000);
let p2=new product("iphone17",150000);

console.log(p1);
console.log(p2);


 