//document connecting to html
// let firstCardEL=document.getElementById("firstcard")
// let secondCardEL=document.getElementById("secondcard");
// let thirdCardEl=document.getElementById("thirdcard")
let sumEl = document.getElementById("sum");
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("cards")

//setting up variables
let firstCard = Math.floor(Math.random() * 9) + 3;
let secondCard = Math.floor(Math.random() * 9) + 3;
let thirdCard = Math.floor(Math.random() * 9) + 3;

let cards = [firstCard, secondCard, thirdCard]
// cardEl.textContent.push(thirdCard)
let hasBlack = false;
let isAlive = true;
let message = "";
let sum = firstCard + secondCard
thirdCard = sum + thirdCard


function startGame() {
    renderGame();
}


function renderGame() {
    cardEl.textContent = "Cards:" + cards[0] + " " + cards[1] + " "+ cards[2]; 

    console.log(cards)
    sumEl.textContent = "Sum:" + sum;
    if (sum > 21) //greater than
    {
        message = "You're out of the game!"
        isAlive = false;


    }
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlack = true;


    }
    else {
        (sum <= 20)//less than
        message = "Do you want to draw a new card? "

    }
    //display the contents
    //concatinating displays
    messageEl.textContent = message;
    //para mo display ang messages sa html
    // firstCardEL.textContent="First Card:"+firstCard;//display sa first card
    // secondCardEL.textContent="Second Card:"+secondCard;//display sa second card
    // thirdCardEl.textContent="Third Card:"+ thirdCard;

}

function newCard() {
    let card = Math.floor(Math.random() * 9) + 1;           
    sum += card;
    cards.push(card)
    console.log(cards)
    startGame();

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