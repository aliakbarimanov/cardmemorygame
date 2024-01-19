const data = [
    {
        id: 1,
        image: "./images/1.png",
        flipped: false,
    },
    {
        id: 2,
        image: "./images/2.png",
        flipped: false,
    },
    {
        id: 3,
        image: "./images/3.png",
        flipped: false,
    },
    {
        id: 4,
        image: "./images/4.png",
        flipped: false,
    },
    {
        id: 5,
        image: "./images/5.png",
        flipped: false,
    },
];


const cardsBox = document.querySelector(".cardsBox");

for (let i = 1; i <= 9; i++) {
    const card = document.createElement("div");
    card.classList.add("card");

    const backImg = document.createElement("img");
    backImg.classList.add("back", "cardImage");
    backImg.src = "./images/bg.jpg";

    const frontImg = document.createElement("img");
    frontImg.classList.add("front", "cardImage");

    // const randomNumber = (Math.floor(Math.random()) * 4) + 1;

    for (let j = 1; j < 6; j++) {
        frontImg.src = `./images/${j}.png`;
        card.appendChild(backImg);
        card.appendChild(frontImg);
        cardsBox.appendChild(card);
    }

}



const cardList = document.querySelectorAll(".card");
const flipSound = new Audio("../sounds/flip.m4a");

for (let i = 0; i < cardList.length; i++) {
    cardList[i].addEventListener("click", () => {

        if (!(cardList[i].classList.contains("reverse"))) {
            cardList[i].classList.add("reverse");
            flipSound.play();
        }
    });
}