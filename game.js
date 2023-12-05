// Define the scores of player and computer to be able to use and compare later, to check who wins.
let playerScore = 0;
let computerScore = 0;

// This function returns a random string from array choices, this will be the computers choice.
function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"];
    randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}


// This calls each round to be played, we check who and write code to see who won.
function playRound (playerSelection, computerSelection) {
    // To avoid any issues with how the user inputs the string it is best to lower every string to compare.
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    

    if (player === computer){
        scoreInfo.textContent = "It's a tie!";
        scoreAlert.textContent = ''
    } else if (
        (player === "rock" && computer === "scissors")||
        (player === "paper" && computer === "rock")||
        (player === "scissors" && computer === "paper")
    ) {
        playerScore++;
        scoreInfo.textContent = "You Win!"
        scoreAlert.textContent = `${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`;
        playerScoreElement.textContent = `Player: ${playerScore}`        

    } else {
        scoreInfo.textContent = "You Lose!"
        scoreAlert.textContent = `${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`;
        computerScore++;
        computerScoreElement.textContent = `Computer: ${computerScore}`        
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


rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));


function handleClick (playerSelection) {
    console.log(playerSelection);
    const computerSelection = getComputerChoice()
    console.log(computerSelection)
    playRound(playerSelection, computerSelection);
    updateSelections(playerSelection, computerSelection);
}

function updateSelections (playerSelection, computerSelection) {
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

