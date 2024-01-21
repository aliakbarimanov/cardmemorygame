const cardsBox = document.querySelector(".cardsBox");


for (let i = 1; i <= 9; i++) {
    const card = document.createElement("div");
    card.classList.add("card");

    const backImg = document.createElement("img");
    backImg.classList.add("back", "cardImage");
    backImg.src = "./images/bg.jpg";

    const frontImg = document.createElement("img");
    frontImg.classList.add("front", "cardImage");

    frontImg.src = `./images/${i}.jpg`;
    card.appendChild(backImg);
    card.appendChild(frontImg);
    cardsBox.appendChild(card);
}


const cardList = document.querySelectorAll(".card");
const flipSound = new Audio("../sounds/flip.m4a");

for (let i = 0; i < cardList.length; i++) {
    cardList[i].addEventListener("click", () => {

        if (!(cardList[i].classList.contains("reverse"))) {
            cardList[i].classList.add("reverse");
            flipSound.play();
        }


        // for (let j = 0; j < cardList.length; j++) {
        //     if (cardList[j].classList.contains("reverse")) {
        //         for (let k = 0; k < cardList.length; k++) {
        //             if (!(cardList[j].classList.contains(cardList[k]))) {
        //                 cardList[i].classList.remove("reverse");
        //             }
        //         }
        //     }
        // }
    });
}