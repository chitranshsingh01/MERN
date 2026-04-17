const body = document.getElementsByTagName("body");

function colorChange() {
    let colorString = "0123456789abcdef";
    let color = "";

    for (let i = 0; i < 6; i++) {
        let randNum = Math.floor(Math.random() * colorString.length);
        color = color + colorString[randNum];
    }

    body[0].style.backgroundColor = `#${color}`;
}

setInterval(colorChange, 1000);