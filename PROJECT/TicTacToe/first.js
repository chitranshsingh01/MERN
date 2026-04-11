let board=document.querySelector('.board');
let boxes=document.querySelectorAll(".cell");
let rbtn= document.getElementById("rbtn");
// let win= document.getElementById("win");


let currentplay="X";
let gameOver = false;


let winningcondition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


board.addEventListener('click',(e)=>{
    if(e.target.innerText==""){
        if(gameOver) return;
         e.target.innerHTML=`<h2>${currentplay}</h2>`;
      let result =  Winner();
      if(result==="X" || result==="O") {
        gameOver=true;
        return ;
      }
       
        
        
    if(currentplay=="X") currentplay="O";
    else currentplay="X";
    }
});

// for (const element of cell) {
//     element.addEventListener('click',()=>{
//         document.body.style.backgroundColor="red";
//     })
    
// }

function Winner(){
     console.log(boxes);
    // winningcondition.forEach((item)=>
         for(let item of winningcondition) {
        let index0=item[0];
        let index1=item[1];
        let index2=item[2];

        // let [a,b,c]= item;
        
        let val0=boxes[index0].innerText;
        let val1=boxes[index1].innerText;
        let val2=boxes[index2].innerText;

        // console.log(index0 , val0 , index1 ,val1 , index2 , val2);
        if(val0!=='' && val1!=='' && val2!==''){
            if(val0===val1 && val0===val2){
                console.log(val0, "is winner");
                document.body.style.backgroundColor="purple";
              let win= document.createElement("h1")
               win.innerText=`${val0} is the Winner`;
               document.body.appendChild(win);
                return val0;
            }
        }

    }

}

rbtn.addEventListener("click" ,()=>{  
     document.body.style.backgroundColor="#1e1e1e";
        //   win.innerText="";
    for (const element of boxes) {
        element.innerText='';
        
    }
})

