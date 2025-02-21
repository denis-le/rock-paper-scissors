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

function getPlayerChoice() {
    let selection = prompt("Rock, Paper, or Scissors?");
    return selection.toUpperCase();
}

function playRound(playerSelection, computerSelection) {

    console.log(`Player Choice: ${playerSelection}`);
    console.log(`Computer Choice: ${computerSelection}`);

    if (playerSelection == "ROCK") {
        if (computerSelection == "ROCK") {
            return ("Tie!");
        }
        else if (computerSelection == "PAPER") {
            return ("You Lose!");
        }
        else {
            return ("You Win!");
        }
    }

    if (playerSelection == "PAPER") {
        if (computerSelection == "ROCK") {
            return ("You Win!");
        }
        else if (computerSelection == "PAPER") {
            return ("Tie!");
        }
        else {
            return ("You Lose!");
        }
    }

    if (playerSelection == "SCISSORS") {
        if (computerSelection == "ROCK") {
            return ("You Lose!");
        }
        else if (computerSelection == "PAPER") {
            return ("You Win!");
        }
        else {
            return ("Tie!");
        }
    }

}

function playGame() {
    // for (let i = 0; i < 5; i++) {
    //     const playerSelection = getPlayerChoice();
    //     const computerSelection = getComputerChoice();
    //     console.log(playRound(playerSelection, computerSelection))
    // }

}

playGame();

