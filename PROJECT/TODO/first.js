let input=document.getElementById("in");
let but=document.getElementById("but");
let alltodo=document.getElementById("alltodo");
let del=document.getElementById("del");
let checkbox=document.getElementById("check"); 




let data=JSON.parse(localStorage.getItem("alltodo")) || [];


let id=1;





function displaytodo(){
    alltodo.innerHTML="";

    data.map((singletodo,idx)=>{
        todoStructure(singletodo,idx);
    })
}


//CLICK TO ADD TODO
but.addEventListener("click",(e)=>{
e.preventDefault();
let todoVal=input.value;
data.push({todoVal,completed:false});
// todoStructure();   
displaytodo();
    input.value="";   
    localStorage.setItem("alltodo",JSON.stringify(data));
});



//REMOVE TODO BY DELETE BUTTON
function removetodo(id,idx){
    let div2 = document.getElementById(id);
    div2.remove();
    removefrarr(idx);
}


function removefrarr(idx){
    data.splice(idx,1);
    localStorage.setItem("alltodo",JSON.stringify(data));
    displaytodo();
}



// LINE-THROUGH TODO WHEN DONE
function marktodo(id,idx){
    
        let div3 = document.getElementById(id);
        // console.log( div3.children);
        // div3.children[0].classList.add("completed");
        let li = div3.children[0]; // the <li>
    let h3 = li.children[1];   // the <h3>
    h3.classList.toggle("completed");
    data[idx].completed=!(data[idx].completed);
    localStorage.setItem("alltodo",JSON.stringify(data));
}





//FUNCTION CALL TO ADD TODO TO THE DISPLAY 
function todoStructure(singletodo,idx){
    let value=input.value;
    // console.log(value);
    let div1=document.createElement("div");

div1.innerHTML=` <li>
                <input type="checkbox" id="check${id}" onclick="marktodo(${id},${idx})">
                <h3>${singletodo.todoVal}</h3>
                <button onclick=removetodo(${id},${idx})>Delete</button>
            </li>`
            div1.setAttribute("id",id++)
    alltodo.appendChild(div1); 
    let checkbox = div1.querySelector("input");
let h3 = div1.querySelector("h3");

if (singletodo.completed) {
    checkbox.checked = true;
    h3.classList.add("completed");
}
}
displaytodo();