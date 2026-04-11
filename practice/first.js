
// let btn=document.getElementById("btn");
// btn.style.backgroundColor="blue";
let body=document.querySelector("body")
// let bc = "white";


// btn.addEventListener('dblclick' , ()=>{
//     document.body.style.backgroundColor="green";
//     bc="color";
//     if(bc!=="white") body.style.backgroundColor=" white";
// });

let text=document.getElementById("text");
let submit=document.getElementById("submit");
let range=document.getElementById("range ")
console.log(Range.value);


submit.addEventListener('click', (e)=>{
    e.preventDefault()
    body.style.backgroundColor=text.value;
})
