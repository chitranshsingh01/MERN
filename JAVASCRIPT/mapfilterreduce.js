let arr=[1,2,3,4,5,6,7]
// console.log(arr)
let arr2=arr.filter(x=>x%2===0);
console.log(arr2);
const users=[
    {name:"Akash",age:20},
    {name:"Vikas",age:18},
    {name:"Rahul",age:5},
    {name:"Sanket",age:25},
    {name:"Aniket",age:2},
    {name:"Sarita",age:21}
];
// console.log(users);
let adult=users.filter(user=>(user.age>=18)).map(user=>user.name);
console.log(adult);

