const gridContainer = document.querySelector(".grid-container");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;

document.querySelector(".score").textContent = score;

fetch("./data/card.json")
  .then((res) => res.json())
  .then((data) => {
    cards = [...data,...data];
    shuffelCards();
    generateCards();
  })

