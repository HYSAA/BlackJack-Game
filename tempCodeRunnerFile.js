let firstCard = Math.floor(Math.random() * 9) + 3;


let secondCard=Math.floor(Math.random()*9)+3;

let sum = firstCard+secondCard;

console.log(sum)

function jack(){
if(sum>21)
{
    console.log("you lose")
}
else if(sum===21){
    console.log("hooray you win");
}
else{
    (sum<21)
    console.log("you are still playing")

    
}



}
jack()
