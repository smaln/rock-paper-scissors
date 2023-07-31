let compChoice;
//let playSelect=prompt('Enter "rock","paper" or "scissors"!');
playSelect=playSelect.toLowerCase();

let retInfo="abc";
let op=0;
let compScore=0, playScore=0;

function getComputerChoice(){
  let arrChoice =["rock","paper","scissors"]
  let randNum = Math.floor(Math.random()*3);
  return compChoice=arrChoice[randNum];
}

getComputerChoice(compChoice);
console.log(compChoice);

if(compChoice=="rock" && playSelect=="rock") {retInfo="Tie! Rock cannot beat Rock"; op=2;}
else if(compChoice=="rock" && playSelect=="paper") {retInfo="You Win! Paper beats Rock"; op=1;}
else if(compChoice=="rock" && playSelect=="scissors") {retInfo="You Lose! Rock beats Scissors"; op=0;}

else if(compChoice=="paper" && playSelect=="rock") {retInfo="You Lose! Paper beats Rock"; op=0;}
else if(compChoice=="paper" && playSelect=="paper") {retInfo="Tie! Paper cannot beat Paper"; op=2;}
else if(compChoice=="paper" && playSelect=="scissors") {retInfo="You Win! Scissors beat Paper"; op=1;}

else if(compChoice=="scissors" && playSelect=="rock") {retInfo="You Win! Rock beats Scissors"; op=1;}
else if(compChoice=="scissors" && playSelect=="paper") {retInfo="You Lose! Scissors beat Paper"; op=0;}
else if(compChoice=="scissors" && playSelect=="scissors") {retInfo="Tie! Scissors cannot beat Scissors"; op=2;}

console.log(retInfo);

if(op==0) {++compScore;}
else if(op==1) {++playScore;}

console.log(compScore, playScore)