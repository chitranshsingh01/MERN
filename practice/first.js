localStorage.setItem("name","akash");
sessionStorage.setItem("sirname","singh")

let name=document.getElementById("name");
let button =document.getElementById("butt");
button.addEventListener("click",()=>{
    let a=localStorage.getItem("name");
    name.textContent=a;
})
