function computerPlay() // computer will randomly return Rock, Paper, or Scissor's 
           {
  let PossibleOutcomes = ['rock', 'paper', 'scissors'];
  let RandomAnswer = Math.floor(Math.random()*possibleOutcomes.length);
      return possibleOutcomes[randomAnswer].toUpperCase();
            }

function playRound(playerSelection, computerSelection) { //plays one round of RPS
  if (playerSelection === computerSelection) {
    playerScore++;
    computerScore++;
    return "It' a tie!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You lose, paper beats rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "Scissors beats paper, you lose!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "Scissors beats paper, you win!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "Paper beats Rock, you win!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++
    return "Rock beats scissors, you lose!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "Rock beats scissors, you win!";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    round++;
    console.log("This is round " + round + " " + playRound(playerSelection(), computerPlay()), "User: " + playerScore + " " + "Computer: " + computerScore);
  } if(playerScore > computerScore) {
    console.log("Congratulations you beat a computer!");
  } else if(computerScore > playerScore){
    console.log("Sorry my guy, try again next time");
  }
}