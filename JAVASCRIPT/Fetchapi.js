

// FETCH API 

async function api(){
    let res = await fetch("https://official-joke-api.appspot.com/random_joke");
    let result =await res.json();
    console.log(result);

}

api();