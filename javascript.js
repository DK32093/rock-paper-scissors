
// Create computer choice function //
function getComputerChoice() {
    let n = Math.random() * 100;
    if (n <= 33) {
        return "rock";
    } else if (n > 33 && n <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Create function for a single round //
function playRound (humanChoice, computerChoice) {
    message = document.querySelector(".message");
    score = document.querySelector(".score");
    if ((humanChoice === "rock" && computerChoice === "scissors") 
        || (humanChoice === "paper" && computerChoice === "rock") 
        || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore += 1;
        message.textContent = "You win! " + humanChoice + " beats " + computerChoice + ".";
    } else if (humanChoice === computerChoice) {
        message.textContent = "It's a tie!";
    } else {
        computerScore += 1;
        message.textContent = "You lose! " + computerChoice + " beats " + humanChoice + ".";
    }
    score.textContent = "Your score = " + humanScore + "," + " Computer's score = " + computerScore;
}


let humanScore = 0;
let computerScore = 0;

// Event listener for button choice
let choices = document.querySelector(".choices");
choices.addEventListener("click", (event) => {
    let target = event.target;
    if (target.id == "rock") {
        humanSelection = "rock";
    } else if (target.id == "paper") {
        humanSelection = "paper";
    } else {
        humanSelection = "scissors";
    } 
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});

// Create a function that plays 5 rounds, keeps score, and declares the results //
// function playGame () {
//     let humanSelection = getHumanChoice();
//     let computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
    
//     if (humanScore > computerScore) {
//         console.log("Game over. You won the game!");
//     } else if (computerScore > humanScore) {
//         console.log("Game over. You lost the game!");
//     } else {
//         console.log("Game over. It's a tie! No winner.");
//     }
// }

// Declare global variables and call the playGame function //
