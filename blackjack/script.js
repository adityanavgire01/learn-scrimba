let firstCard = Math.floor(Math.random() * 10) + 2;
let secondCard = Math.floor(Math.random() * 10) + 2;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    sum = cards[0] + cards[1];
    cards = [firstCard, secondCard];
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i=0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    let card = Math.floor(Math.random() * 10) + 2;
    sum += card
    // Push the card to the cards array
    cards.push(card);
    console.log(cards);
    renderGame()
}
