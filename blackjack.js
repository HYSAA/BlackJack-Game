let firstCardEL=document.getElementById("firstcard")
let secondCardEL=document.getElementById("secondcard");
let sum=document.getElementById("sum");
let messageEl=document.getElementById("message-el")


let firstCard = Math.floor(Math.random() * 9) + 5;
let secondCard=Math.floor(Math.random()*9)+5;
let hasBlack=false;
let isAlive=true;
let message="";
let totalSum=firstCard+secondCard;

sum.textContent="Sum:"+ totalSum;

// firstCardEL.textContent=firstCard;
// secondCardEL.textContent=secondCard;




function startGame(){
if(sum>=21) //greater than
{
    message="You're out of the game!"
    isAlive=false;

}
else if(sum===21){
    message="Wohoo! You've got Blackjack!"
    hasBlack=true;

}
else{
    (sum<=20)//less than
    message="Do you want to draw a new card? "

}
messageEl.textContent=message;
firstCardEL.textContent=firstCard;
secondCardEL.textContent=secondCard;
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