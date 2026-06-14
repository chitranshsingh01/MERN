let input=document.getElementById("input");
const ACCESS_TOKEN ="V8J0kcmSZ3FCcRuEnbJ9q4lBocVGpXYZ_uo1AWT3aEw";

document.getElementById("butt").addEventListener("click",()=>{
    document.getElementById("cardContainer").innerHTML=` <div class="loader"></div> `;

    let userinput=input.value;
    api(userinput);
    
});

async function api(userinput){
    let response=await fetch(`https://api.unsplash.com/search/photos?query=${userinput}&client_id=${ACCESS_TOKEN}`);
    let result =await response.json();
    displayimg(result);
}

function displayimg(res){
       document.getElementById("cardContainer").innerHTML="";
        res.results.map((data)=>{
        let div=document.createElement("div");
        div.setAttribute("class","card");
        div.innerHTML=`
          <div class="firstdiv">
                <img class="userimg" src=${data.user.profile_image.large}>
                <p class="username">${data.user.name}</p>
            </div>
            <div class="seconddiv">
                <img class="itemimg"src=${data.urls.regular} alt="">
                <p class="imgdes">${data.alt_description}</p>
            </div>
        `
        document.getElementById("cardContainer").appendChild(div);
        console.log(res);
    })

}

