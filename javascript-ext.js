let compChoice;

let retInfo="abc";
let op=0;
let compScore=0, playScore=0;

function getComputerChoice(){
  let arrChoice =["rock","paper","scissors"]
  let randNum = Math.floor(Math.random()*3);
  return compChoice=arrChoice[randNum];
}

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));

if (rockBtn !== null) {
  // The element is not null, so we can safely add the event listener
  element.addEventListener('click', () => {
    // Your event handling code here
  });
} else {
  console.error("The element with ID 'myElement' was not found.");
}

function handleClick(playChoice){

  getComputerChoice(compChoice);

  if(compChoice=="rock" && playChoice=="rock") {retInfo="Tie! Rock cannot beat Rock"; op=2;}
  else if(compChoice=="rock" && playChoice=="paper") {retInfo="You Win! Paper beats Rock"; op=1;}
  else if(compChoice=="rock" && playChoice=="scissors") {retInfo="You Lose! Rock beats Scissors"; op=0;}

  else if(compChoice=="paper" && playChoice=="rock") {retInfo="You Lose! Paper beats Rock"; op=0;}
  else if(compChoice=="paper" && playChoice=="paper") {retInfo="Tie! Paper cannot beat Paper"; op=2;}
  else if(compChoice=="paper" && playChoice=="scissors") {retInfo="You Win! Scissors beat Paper"; op=1;}

  else if(compChoice=="scissors" && playChoice=="rock") {retInfo="You Win! Rock beats Scissors"; op=1;}
  else if(compChoice=="scissors" && playChoice=="paper") {retInfo="You Lose! Scissors beat Paper"; op=0;}
  else if(compChoice=="scissors" && playChoice=="scissors") {retInfo="Tie! Scissors cannot beat Scissors"; op=2;}

  if(op==0) {++compScore;}
  else if(op==1) {++playScore;}

function isGameOver() {
  return playScore === 5 || compScore === 5}

console.log(playChoice);

}