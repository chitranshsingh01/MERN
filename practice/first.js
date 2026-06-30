localStorage.setItem("name","akash");
sessionStorage.setItem("sirname","singh")

let name=document.getElementById("name");
let button =document.getElementById("butt");
let div=document.getElementById("div");
let body=document.getElementsByTagName("body")
let h=document.getElementById("frobj");
let h2=document.getElementById("frobj2");

button.addEventListener("click",()=>{
    let a=localStorage.getItem("name");
    name.textContent=a;
});

let input = document.getElementById("input");
input.addEventListener("input",(e)=>{
    localStorage.setItem("text",e.target.value);
    div.innerHTML=`<h1>${localStorage.getItem("text")}</h1>`
})
let a={name:"chitrnash",rollno:"1234567890"};
sessionStorage.setItem("object",JSON.stringify(a));

let ok =document.getElementById("ok").addEventListener("click",()=>{
    console.log("buttton working");
    let n=JSON.parse(sessionStorage.getItem("object"));
    let name=n.name;
    console.log(name);
    h.innerText=name;
    h2.innerText=n.rollno;

    
})


