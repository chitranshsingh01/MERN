 console.log("object");
 let input = document.getElementById("input")
 let button = document.getElementById("butt")

 async function fetchuser(username){
    let response = await fetch(`https://api.github.com/users/${username}`);
    let result =await response.json();
    console.log(result);
    if(!result.avatar_url){
         document.getElementById("userprofile").innerHTML=`<h1>User Not Found</h1>`
    }
    else{
        if(!result.bio){
            result.bio='';
        }
    document.getElementById("userprofile").innerHTML=
                                           `  <div class="userinfo">
                <!-- <div id="image">
                    <img src id="https://avatars.githubusercontent.com/u/232660067?v=4" alt="">
                <div> -->
                <img src=${result.avatar_url} class="userimg"  alt="">

                <div class="userdetail">
                    <p class="username">${result.login}</p>
                    <p class="userbio">${result.bio}</p>
                </div>
            </div>
            <div class="userfollow">
                <div class="follower">
                    <div class="repo">
                        <p>Follower</p>
                        <p>${result.followers}</p>
                    </div>
                    <div class="repo">
                        <p>Following</p>
                        <p>${result.following}</p>
                    </div>
                    <div class="repo">
                        <p>Repo</p>
                        <p>${result.public_repos}</p>
                    </div>
                </div>

                <a href="${result.html_url}" target="_blank">
                <div class="visitprofile">
                    Visit Profile
                </div>
                </a>
            </div>`
    }
 }
 

button.addEventListener("click",(e)=>{
    e.preventDefault();
    // console.log(input.value);
     document.getElementById("userprofile").innerHTML=` <div class="loader"></div> `;
    let userId = input.value;
     fetchuser(userId);
});

 


//https://api.github.com/users/chitranshsingh01