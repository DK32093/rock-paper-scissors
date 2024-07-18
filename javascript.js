
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

// Create human choice function //

function getHumanChoice() {
    let answer = prompt("Enter rock, paper, or scissors").toLowerCase();
    if (!(answer === "paper" || answer === "rock" || answer === "scissors")) {
        return getHumanChoice();
    } else {
        return answer;
    } 
}

// Declare score variables //

let humanScore = 0;
let computerScore = 0;

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

// Declare variables to use as arguments in playRound by calling choice functions//

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

// Pass arguments as parameters //

playRound(humanSelection, computerSelection);