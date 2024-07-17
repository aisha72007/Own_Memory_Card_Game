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

  function shuffelCards(){
    let currentIndex = cards.length,
    randomIndex,
    temporaryValue;
    while(currentIndex !== 0){
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
      }
    }