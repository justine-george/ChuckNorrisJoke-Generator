let pEl = document.querySelector('#text');
let refreshButton = document.querySelector('#refresh');


refreshButton.addEventListener('click', () => {
    getNewJoke();
});

async function getNewJoke() {
    const apiUrl = "https://api.chucknorris.io/jokes/random";
    const response = await fetch(apiUrl);
    if (response.ok) {
        let data = await response.json();
        pEl.innerText = data.value;
        pEl.classList.remove("hide-element");
    }
}