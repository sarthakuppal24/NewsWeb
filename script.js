const API_KEY = "3e10c06d469c463e818858b13e3e3d63" ;
const URL = "https://newsapi.org/v2/everything?q=";

// Whenever the window will load fetchApi will work
window.addEventListener("load",()=> fetchApi("G20"));

// An asynchronous function 
async function fetchApi(query){
    let result = await fetch(`${URL}${query}&apiKey=${API_KEY}`);
    // result is recvd in raw format
    // now convert into json format
    let data = await result.json();
    console.log(data);
}

