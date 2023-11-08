const button = document.getElementById("jokeBtn");
const text = document.getElementById("joke");

function generateJoke(){
    fetch("https://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json"
        }
    })
    .then(res => res.json())
    .then(data => text.innerHTML = data.joke);
}

button.addEventListener("click", generateJoke);