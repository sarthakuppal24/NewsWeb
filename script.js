const API_KEY = "3e10c06d469c463e818858b13e3e3d63" ;
const URL = "https://newsapi.org/v2/everything?q=";
// Whenever the window will load fetchApi will work
window.addEventListener("load",()=> fetchApi("earthquake"));


// Binding data and making cards
function bindData(articles){
    let cardscontainer = document.querySelector(".cards-container");
    let cardtemp = document.querySelector(".tempclass");

    cardscontainer.innerHTML="";

    articles.forEach((article) => {
        if(!article.urlToImage){
            return;
        }

        let cardclone = cardtemp.content.cloneNode(true);
        getDatatocard(article,cardclone);
        cardscontainer.appendChild(cardclone);
    });
}

// An asynchronous function 
async function fetchApi(query){
    let result = await fetch(`${URL}${query}&apiKey=${API_KEY}`);
    // result is recvd in raw format
    // now convert into json format
    let data = await result.json(); 
    bindData(data.articles);
}

// Getting the data in card
function getDatatocard(article,cardclone){
    let cardimg = cardclone.querySelector(".cimg");
    let cardtitle = cardclone.querySelector(".cttle");
    let carddesc = cardclone.querySelector(".desc");
    let cardsource = cardclone.querySelector(".source");

    cardimg.src = article.urlToImage;
    cardtitle.innerHTML = article.title;
    carddesc.innerHTML = article.description;
    cardsource.innerHTML = article.source.name;

    cardclone.firstElementChild.addEventListener('click',()=>{
        window.open(article.url,"_blank")
    })
}

// Dealing with searchbar
let navbutton = document.querySelector(".navbtn");
let navinputvalue = document.querySelector("#navsearch");

navbutton.addEventListener('click',()=>{
    let val = navinputvalue.value;
    fetchApi(val);
})


let currnavitem = null;
function clicknavlist(id){
    fetchApi(id);
    let navitem = document.getElementById(id);
    currnavitem?.classList.remove("active");
    currnavitem = navitem;
    currnavitem.classList.add("active");
}
