// Define the scores of player and computer to be able to use and compare later, to check who wins.
let playerScore = 0;
let computerScore = 0;

// This function returns a random string from array choices, this will be the computers choice.
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}


// This calls each round to be played, we check who and write code to see who won.
function playRound(playerSelection, computerSelection) {
    // To avoid any issues with how the user inputs the string it is best to lower every string to compare.
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === computer) {
        scoreInfo.textContent = "It's a tie!";
        scoreAlert.textContent = `${capitalizeFirstLetter(player)} can't beat itself! (${capitalizeFirstLetter(computer)}).`
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        playerScore++;
        scoreInfo.textContent = "You Win!"
        scoreAlert.textContent = `${capitalizeFirstLetter(player)} beats ${capitalizeFirstLetter(computer)}`;
        playerScoreElement.textContent = `Player: ${playerScore}`
    } else {
        computerScore++;
        scoreInfo.textContent = "You Lose!"
        scoreAlert.textContent = `${capitalizeFirstLetter(computer)} beats ${capitalizeFirstLetter(player)}`;
        computerScoreElement.textContent = `Computer: ${computerScore}`
    }
    if (isGameOver()) {
        endGameResults();
    }
}


const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const playerIcon = document.getElementById('playerIcon');
const computerIcon = document.getElementById('computerIcon');
const scoreInfo = document.getElementById('scoreInfo')
const scoreAlert = document.getElementById('scoreAlert')
const playerScoreElement = document.getElementById('playerScore')
const computerScoreElement = document.getElementById('computerScore')
const restartBtn = document.getElementById("restartBtn");




rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));
restartBtn.addEventListener('click', () => resetGame())


function handleClick(playerSelection) {
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateSelections(playerSelection, computerSelection);
}

function updateSelections(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            playerIcon.textContent = '🪨'
            break
        case 'paper':
            playerIcon.textContent = '📜'
            break
        case 'scissors':
            playerIcon.textContent = '✂️'
            break
    }
    switch (computerSelection) {
        case 'rock':
            computerIcon.textContent = '🪨'
            break
        case 'paper':
            computerIcon.textContent = '📜'
            break
        case 'scissors':
            computerIcon.textContent = '✂️'
            break
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5
   
}

function endGameResults () {
    playerScoreElement.textContent = `Player: ${playerScore}`
    computerScoreElement.textContent = `Computer: ${computerScore}`
    console.log(playerScoreElement.innerText, computerScoreElement.innerText)
    if (playerScore > computerScore) {
        alert("You won")
    } else {
        alert("You lost")
    }
    scoreAlert.textContent = "Game Over!"
    showButton();

    
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    scoreInfo.textContent = "Choose your weapon of choice!";
    scoreAlert.textContent = "First to 5 Wins!"
    playerIcon.textContent = "❓"
    computerIcon.textContent = "❓"
    playerScoreElement.textContent = "Player: 0";
    computerScoreElement.textContent = "Computer: 0";
    restartBtn.style.visibility = "hidden";
    restartBtn.classList.remove("bounce-in-top");
}

// To show the button and trigger the animation
function showButton() {
    restartBtn.style.visibility = 'visible';
    restartBtn.classList.add("bounce-in-top");
  }
  

