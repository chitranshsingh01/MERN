let board=document.querySelector('.board');
let boxes=document.querySelectorAll(".cell");

let currentplay="X";

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
         e.target.innerHTML=`<h2>${currentplay}</h2>`;
         Winner();
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
    winningcondition.forEach((item)=>{
        let index0=item[0];
        let index1=item[1];
        let index2=item[2];

        let val0=boxes[index0];
        let val1=boxes[index1];
        let val2=boxes[index2];

        console.log(val0,index0 );

       
        

    })

}

