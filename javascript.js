
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

console.log(getComputerChoice(Math.random() * 100));