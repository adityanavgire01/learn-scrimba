// creating two varibles firstCard and secondCard
// setting the values of it randomly between 2-11
let firstCard = 4
let secondCard = 9 
let hasBlackjack = false

let sum = firstCard + secondCard

if(sum <= 20){
    console.log("Do you want to draw a new card? ")
}
else if (sum===21){
    console.log("Wohoo! You've got Blackjack! ")
    hasBlackjack = true

}
else{
    console.log("You're out of the game!")
}

console.log(hasBlackjack)

