const body = document.getElementsByTagName("body");

// function colorChange() {
//     let colorString = "0123456789abcdef";
//     let color = "";

//     for (let i = 0; i < 6; i++) {
//         let randNum = Math.floor(Math.random() * colorString.length);
//         color = color + colorString[randNum];
//     }

//     body[0].style.backgroundColor = `#${color}`;
// }

// setInterval(colorChange, 1000);

function colorchanger(){
    let string="0123456789abcdef";
    let color="";
    for (let index= 0; index < 6; index++) {
        let randomidx=Math.floor(Math.random()*string.length);
        color=color+string[randomidx];
    }
    body[0].style.backgroundColor=`#${color}`;
}
setInterval(colorchanger,0);