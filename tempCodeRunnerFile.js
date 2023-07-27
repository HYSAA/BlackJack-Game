
let firstCard = Math.floor(Math.random() * 9) + 5;
let secondCard=Math.floor(Math.random()*9)+5;
let sum = firstCard+secondCard;
let hasBlack=false;
let isAlive=true;
let message="";
console.log(sum)


function jack(){
if(sum>=21) //greater than
{
    message="you lose"
    isAlive=false;

}
else if(sum===21){
    message="hooray you win";
    hasBlack=true;

}
else{
    (sum<=21)//less than
    message="you are still playing"

}
}

jack()
console.log(message)
