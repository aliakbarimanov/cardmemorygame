const cardsBox = document.querySelector(".cardsBox");


for (let i = 1; i <= 9; i++) {

    const card = document.createElement("div");
    card.classList.add("card");

    const backImg = document.createElement("img");
    backImg.classList.add("back", "cardImage");
    backImg.src = "./images/bg.jpg";

    const frontImg = document.createElement("img");
    frontImg.classList.add("front", "cardImage");
    frontImg.src = "./images/bg.jpg";

    card.appendChild(backImg);
    card.appendChild(frontImg);
    cardsBox.appendChild(card);
}


const card = document.querySelector(".card");
const cardImage = document.querySelectorAll(".cardImage");



card.addEventListener("click", () => {

    for (val of cardImage) {
        val.classList.toggle("reverse");
    }
});

// random number between 1 - 5;
const randomInt = Math.floor(Math.random() * 5) + 1;

console.log(randomInt);