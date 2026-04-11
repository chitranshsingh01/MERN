// let choices = document.querySelectorAll(".choice");
// let userScorePara = document.querySelector("#userscore");
// let compScorePara = document.querySelector("#compscore");
// let msg = document.querySelector("#msg");
// let message = document.querySelector(".message");

// let userScore = 0;
// let compScore = 0;

// // Generate computer choice randomly
// const genCompChoice = () => {
//     let options = ["rock", "paper", "scissor"];
//     let randIdx = Math.floor(Math.random() * 3);
//     return options[randIdx];
// };

// // Draw game
// const drawGame = () => {
//     msg.innerText = "It's a draw! Play again 😐";
//     msg.style.color = "blue";
//     message.style.backgroundColor="black";
// };

// // Show winner and update score
// const showWinner = (userWin, userChoice, compChoice) => {
//     if (userWin) {
//         userScore++;
//         userScorePara.innerText = userScore;
//         msg.innerText = `You win! ${userChoice} beats ${compChoice} 😎`;
//         msg.style.color = "white";
//         message.style.backgroundColor="green";
//     } else {
//         compScore++;
//         compScorePara.innerText = compScore;
//         msg.innerText = `You lose! ${compChoice} beats ${userChoice} 😢`;
//         msg.style.color = "white";
//         message.style.backgroundColor ="red";
//     }
// };

// // Play game function
// const playGame = (userChoice) => {
//     const compChoice = genCompChoice();

//     if (userChoice === compChoice) {
//         drawGame();
//     } else {
//         let userWin = true;

//         if (userChoice === "rock") {
//             userWin = compChoice === "scissor" ? true : false;
//         } else if (userChoice === "paper") {
//             userWin = compChoice === "rock" ? true : false;
//         } else if (userChoice === "scissor") {
//             userWin = compChoice === "paper" ? true : false;
//         }

//         showWinner(userWin, userChoice, compChoice);
//     }
// };

// // Add click event for each choice
// choices.forEach((choice) => {
//     choice.addEventListener("click", () => {
//         let userChoice = choice.getAttribute("id");
//         playGame(userChoice);
//     });
// });

let choices = document.querySelectorAll(".choice");
let userScorePara = document.querySelector("#userscore");
let compScorePara = document.querySelector("#compscore");
let msg = document.querySelector("#msg");
let message = document.querySelector(".message");



let userscore =0;
let compscore =0;



const gencompchoice = ()=>{
    let options = ["rock","paper","scissor"];
    let randIndx = Math.floor(Math.random()*3);
    return options[randIndx];
};



const drawgame = () =>{
    msg.innerText = "game was draw";
    msg.style.color = "blue";
    message.style.backgroundColor="black";
}



const showwinner = (userchoice , compchoice , userwin) =>{
// if(userchoice===compchoice){
//     drawgame();
// }

 if(userwin===true){
    userscore++;
    msg.innerText = `You chose ${userchoice} and You Win!`;
    msg.style.color ="white";
    message.style.backgroundColor="green";
}
else{
    compscore++;
    msg.innerText =`Computer chose ${compchoice} and Computer Wins??`;
    msg.style.color="white";
    message.style.backgroundColor="red";
}};




const gamelogic =(userchoice)=>{
    let compchoice = gencompchoice();
     if(compchoice===userchoice){
       drawgame();
     }
else{
    let userwin = true;
if(userchoice === "rock"){
    userwin = compchoice ==="scissor" ? true : false ;
}
else if(userchoice === "paper") {
    userwin = compchoice ==="rock" ? true:false ;
}
else if(userchoice==="scissor") {
    userwin = compchoice ==="paper"? true : false;
}

showwinner(userchoice , compchoice,userwin);
}};



choices.forEach(choice => {
    choice.addEventListener("click",()=>{
        let userchoice = choice.getAttribute("id");
        gamelogic(userchoice);
        userScorePara.innerText=userscore;
compScorePara.innerText=compscore;

    });
    
});


