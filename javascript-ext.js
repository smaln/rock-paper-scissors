let compChoice;
let retInfo, winner;
let op=0;
let compScore=0, playScore=0;

function getComputerChoice(){
  let arrChoice =["rock","paper","scissors"]
  let randNum = Math.floor(Math.random()*3);
  return compChoice=arrChoice[randNum];
}

document.querySelector("#rockBtn").addEventListener("click", function(){handleClick("rock")});
document.querySelector("#paperBtn").addEventListener("click", function(){handleClick("paper")});
document.querySelector("#scissorsBtn").addEventListener("click", function(){handleClick("scissors")})

let modal = document.querySelector("#modal");

function handleClick(playChoice){

  getComputerChoice(compChoice);

  if(compChoice=="rock" && playChoice=="rock") {retInfo=("Tie! Rock cannot beat Rock"); op=2;}
  else if(compChoice=="rock" && playChoice=="paper") {retInfo=("You Win! Paper beats Rock"); op=1;}
  else if(compChoice=="rock" && playChoice=="scissors") {retInfo=("You Lose! Rock beats Scissors"); op=0;}

  else if(compChoice=="paper" && playChoice=="rock") {retInfo=("You Lose! Paper beats Rock"); op=0;}
  else if(compChoice=="paper" && playChoice=="paper") {retInfo=("Tie! Paper cannot beat Paper"); op=2;}
  else if(compChoice=="paper" && playChoice=="scissors") {retInfo=("You Win! Scissors beat Paper"); op=1;}

  else if(compChoice=="scissors" && playChoice=="rock") {retInfo=("You Win! Rock beats Scissors"); op=1;}
  else if(compChoice=="scissors" && playChoice=="paper") {retInfo=("You Lose! Scissors beat Paper"); op=0;}
  else if(compChoice=="scissors" && playChoice=="scissors") {retInfo=("Tie! Scissors cannot beat Scissors"); op=2;}

  if(op==0) {++compScore;}
  else if(op==1) {++playScore;}

document.querySelector("#scoreInfoHTML").innerHTML=retInfo;
document.querySelector("#playScore").innerHTML=("Player: "+playScore);
document.querySelector("#compScore").innerHTML=("Computer: "+compScore);

if(playScore==5){winner="You won!";}
else if (compScore==5){winner="You lost!";}

console.log(playScore, retInfo);

}