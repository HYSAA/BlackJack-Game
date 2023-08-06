let sumEl = document.getElementById("sum");
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("cards")
let cards = []
let hasBlack = false;
let isAlive = true;
let message = "";
let sum = 0;
console.log(cards)

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard > 10) {
        return 10;
    } else if (randomCard === 1) {
        return 11;
    } else {
        return randomCard;
    }
}


function startGame() {
    let firstCard = Math.floor(Math.random() * 13) + 1
    let secondCard = Math.floor(Math.random() * 13) + 1
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame();
    console.log(sum)
}


function renderGame() {
    cardEl.textContent = "Cards:";
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";

    }
    sumEl.textContent = "Sum:" + sum;
    if (sum <= 20) //greater than
    {
        message = "Do you want to draw a new card?"
             
    }
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlack = true
    }
    else {

        message = "You're out of the game "
        isAlive = false
    }
    messageEl.textContent = message;
}

function newCard() {
 // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
     if(isAlive==true&&hasBlack==false){
        let card = getRandomCard()
        sum += card;
        cards.push(card)
        renderGame();
    }
}













































// console.log(4 === 3)  // false
// console.log(5 > 2)    // true
// console.log(12 > 12)  //false
// console.log(3 < 0)    //false
// console.log(3 >= 3)   // true
// console.log(11 <= 11) //true
// console.log(3 <= 2)   //false
// }
// jack()
// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

// let age = 22

// // if less than 21 -> "You can not enter the club!"
// // else            -> "Welcome!"

// if(age < 21){
//     console.log("you can not enter the club")
// }else{
//     console.log("welcome");
// }


// Check if the person is elegible for a birthday card from the King! (100)

// let age = 99

// // if less than 100    -> "Not elegible"
// // else if exactly 100 -> "Here is your birthday card from the King!"
// // else                -> "Not elegible, you have already gotten one"
// if(age<100){
//     console.log("Not elegible")
// }else if(age===100){
//     console.log("Here is your birthday card from the King!")
// }
// else{
//     console.log("Naa naka")
// }