import { movies } from "./movies.js";

const select = document.getElementById("select")
const seecltaz = document.getElementById("seeclt-az")
const input = document.getElementById("input")
const box = document.getElementById("box")

function kinoViews(movie) {
    box.innerHTML = ""
    movie.map(moviess => {
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML = `
                <img src="./dedpul.png" alt="Logo">
                <h2>${moviess.title}</h2>
                <p>${moviess.score} | ${moviess.year} | ${moviess.duration}</p>
                <h3>${moviess.genre}</h3> 
                <button class="btn" id="btn">More Info</button>
        `
        box.appendChild(div);
    })
};

kinoViews(movies)


input.addEventListener("input", ()=> {
    const p = movies.filter(mov => mov.title.toLowerCase().includes(input.value.toLowerCase()));
    kinoViews(p)
});

select.addEventListener("change", ()=>{
    if (select.value == "All") {
        kinoViews(movies)
    } else {
        const m = movies.filter(mov => mov.genre.includes(select.value));
        kinoViews(m);
    }
})

seecltaz.addEventListener("change", () => {
    if (seecltaz.value=="A-Z") {
        movies.sort((mov1, mov2,) => mov1.title.localeCompare(mov2.title));
        kinoViews(movies)
    }
    else if (seecltaz.value=="Z-A") {
        movies.sort((mov1, mov2,) => mov2.title.localeCompare(mov1.title));
        kinoViews(movies)
    }
    else if (seecltaz.value=="yil") {
        movies.sort((mov1, mov2,) => mov1.year - mov2.year)
        kinoViews(movies)
    }
    else if (seecltaz.value=="ball") {
        movies.sort((mov1, mov2,) => mov1.score - mov2.score)
        kinoViews(movies)
    }
})