//make the computer randomly choose rock, paper, or scissors
function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else if (random === 2) {
    return "scissors";
  }
}

//get player choice and convert to lowercase
function getPlayerChoice() {
  let playerChoice = prompt("Choose rock, paper, or scissors").toLowerCase();
  return playerChoice;
}

//make the game logic
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "Player wins! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "Player loses! Paper beats Rock!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "Player wins! Paper beats Rock!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "Player loses! Scissors beats Paper!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "Player loses! Rock beats Scissors!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "Player wins! Scissors beats Paper!";
  } else {
    return "it's a tie!";
  }
}

//loop the game to specified rounds
function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
  }
}

game();
