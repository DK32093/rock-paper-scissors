
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

// Event listener for button choice
let choices = document.querySelector(".choices");
choices.addEventListener("click", (event) => {
    let target = event.target;
    if (target.class = "rock") {
        let humanSelection = "rock";
        return humanSelection;
    } else if (target.class = "paper") {
        let humanSelection = "paper";
        return humanSelection;
    } else {
        let humanSelection = "scissors";
        return humanSelection;
    }
});

// Create human choice function that won't accept the wrong answer//
function getHumanChoice() {
    let answer = prompt("Enter rock, paper, or scissors").toLowerCase();
    if (!(answer === "paper" || answer === "rock" || answer === "scissors")) {
        alert("Check your spelling ;)");
        return getHumanChoice();
    } else {
        return answer;
    } 
}

// Create function for a single round //
function playRound (humanChoice, computerChoice) {
    if ((humanChoice === "rock" && computerChoice === "scissors") 
        || (humanChoice === "paper" && computerChoice === "rock") 
        || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore += 1;
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
    } else if (humanChoice === computerChoice) {
        humanScore += 1;
        computerScore += 1;
        console.log("It's a tie!");
    } else {
        computerScore += 1;
        console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
    }
    console.log("Your score = " + humanScore + "," + " Computer's score = " + computerScore)
}

// Create a function that plays 5 rounds, keeps score, and declares the results //
function playGame () {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    
    if (humanScore > computerScore) {
        console.log("Game over. You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Game over. You lost the game!");
    } else {
        console.log("Game over. It's a tie! No winner.");
    }
}

// Declare global variables and call the playGame function //
let humanScore = 0;
let computerScore = 0;
let gameCount = 0;

playGame();