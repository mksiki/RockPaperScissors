let playerScore = 0
let computerScore = 0

function getComputerChoice () {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice
}

function playRound (playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === computer){
        return "It's a tie!";
    } else if (
        (player === "rock" && computer === "scissors")||
        (player === "paper" && computer === "rock")||
        (player === "scissors" && computer === "paper")
    ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
        
    }
} 

function game () {
    let gameOver = false;
    while (!gameOver) {
        console.log(`Current Score ${playerScore}, ${computerScore}`)
        const playerSelection = prompt("Select you choice! ");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

        if (playerScore == 5 || computerScore == 5) {
            let winner = '';
            if (playerScore > computerScore) {
                winner += "You Won!";
            } else {
                winner += "You Lost";
            }
            gameOver = true
            console.log(`${winner} Final score ${playerScore} - ${computerScore}`);
        }

    }


    
}
game()