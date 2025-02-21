let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // choose 0, 1, or 2
    let random = Math.floor(Math.random() * 3);
    
    if (random == 0) {
        return "ROCK";
    }
    else if (random == 1) {
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "ROCK") {
        if (computerSelection == "ROCK") {
            return ("Tie!");
        }
        else if (computerSelection == "PAPER") {
            computerScore++;
            return ("You Lose!");
        }
        else {
            playerScore++;
            return ("You Win!");
        }
    }

    if (playerSelection == "PAPER") {
        if (computerSelection == "ROCK") {
            playerScore++;
            return ("You Win!");
        }
        else if (computerSelection == "PAPER") {
            return ("Tie!");
        }
        else {
            computerScore++;
            return ("You Lose!");
        }
    }

    if (playerSelection == "SCISSORS") {
        if (computerSelection == "ROCK") {
            computerScore++;
            return ("You Lose!");
        }
        else if (computerSelection == "PAPER") {
            playerScore++;
        }
        else {
            return ("Tie!");
        }
    }

}

function score(result) {

}

function playGame() {

    let playerSelection = '';
    let computerSelection = getComputerChoice();

    const buttons = document.querySelector('#buttons');
    const results = document.querySelector('.results');

    const result = document.createElement('p');
    const choices = document.createElement('p');
    const scores = document.createElement('p');

    results.appendChild(choices);
    results.appendChild(result);
    results.appendChild(scores);

    buttons.addEventListener('click', (event) => {
        let target = event.target;

        switch(target.id) {
            case 'rock':
                playerSelection = 'ROCK';
                computerSelection = getComputerChoice();
                break;
            case 'paper':
                playerSelection = 'PAPER';
                computerSelection = getComputerChoice();
                break;
            case 'scissors':
                playerSelection = 'SCISSORS';
                computerSelection = getComputerChoice();
                break;
        }

        choices.textContent = `Player Choice: ${playerSelection}, Computer Choice: ${computerSelection}`;
        result.textContent = playRound(playerSelection, computerSelection);
        scores.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;

        if (playerScore === 5) {
            result.textContent = 'YOU WIN THE GAME';
            buttons.style.pointerEvents = "none";
        }
        else if (computerScore === 5) {
            result.textContent = 'YOU LOST THE GAME';
            buttons.style.pointerEvents = "none";
        }
    });
}

playGame();

