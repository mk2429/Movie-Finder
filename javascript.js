// defining url
const apiurl="https://www.omdbapi.com/?i=tt3896198&apikey=8e47f862&s=";
const apiurlsearch="https://www.omdbapi.com/?apikey=95c8f87f&i=";

var searchinput=document.getElementById("search_input");
var card=document.getElementsByClassName("movie-cards")[0];

//adding event listenter to button
document.getElementsByClassName("search")[0].addEventListener("click",function1);


//defining function1
function function1(){
    console.log(searchinput.value); //shows input value
    const query= searchinput.value; //adding input value in query variable
    if(query){
        getmovies(apiurl+query);
    }
}

//defining getmovies
async function getmovies(x){
    const resp=await fetch(x);
    const respdata=await resp.json();
    console.log(respdata);
    showmovies(respdata.Search);
}

//defining showmovies
function showmovies(y){
    card.innerHTML="";
    y.forEach(async function(y){
        const moviedata=await fetch(apiurlsearch+y.imdbID);
        const moviedataobj=await moviedata.json();
        moviedisplay(moviedataobj);
    });
}

//defining moviedisplay
function moviedisplay(z){
    const movieelm=document.createElement("div");
    movieelm.classList.add("moviecard");
    movieelm.innerHTML=`
    
    <div class="cards">
       
        <img src=" ${z.Poster}" alt="poster" class="poster" />
        
        <div class="moviedesc">
            <span class="movie-title"><b>Title:</b><span class="value">${z.Title}</span></span>
            <span class="movie-title"><b>Rating: </b><span class="value">${z.imdbRating}</span></span>
            <span class="movie-title"><b>Director: </b><span class="value">${z.Director}</span></span>
            <span class="movie-title"><b>Release Date: </b><span class="value">${z.Released}</span></span>
            <span class="movie-title"><b>Genre: </b><span class="value">${z.Genre}</span></span>
        </div>
    </div>
    `;
    card.appendChild(movieelm);
}
