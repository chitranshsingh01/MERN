let btn=document.getElementById("button");
let pass=document.getElementById("password");
let rangeval=document.getElementById("rangeval");
let range=document.getElementById("range");

let upper=document.getElementById("UpperCase");
let lower=document.getElementById("LowerCase");
let numeric=document.getElementById("Numbers");
let special=document.getElementById("Specialchar");

range.value=10;
rangeval.innerText="10";


range.addEventListener('input',()=>{
    rangeval.innerText=range.value;
})


btn.addEventListener('click',()=>{
   
let lowercase="abcdefghijklmnopqrstuvwxyz";
let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers="0123456789";
let specialchar="!@#$%&*~";
let basicpass="";
 if(upper.checked) basicpass+=uppercase;
if(lower.checked) basicpass+=lowercase;
if(numeric.checked) basicpass+=numbers;
if(special.checked) basicpass+=specialchar;
let finalpass="";
let lengthpass = range.value;
if(basicpass=="") alert("Select at least one option");

    for(let i=0;i<lengthpass;i++){
    let random=Math.floor(Math.random()*basicpass.length);
    finalpass+=basicpass[random];
}
pass.innerText=finalpass;
})




