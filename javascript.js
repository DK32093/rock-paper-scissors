
// Assignment Step 2 //

// Create computer choice function //
function getComputerChoice(n) {
    if (n <= 33) {
        return "rock";
    } else if (n > 33 && n <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// assign the computer choice to a variable //
computerChoice = getComputerChoice(Math.random() * 100)

console.log(computerChoice)

// Assignment Step 3 //