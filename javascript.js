
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

console.log(getComputerChoice())

// Create human choice function //

function getHumanChoice() {
    let answer = prompt("Enter rock, paper, or scissors").toLowerCase();
    if (!(answer === "paper" || answer === "rock" || answer === "scissors")) {
       return getHumanChoice();
    } else {
        return answer;
    } 
}

console.log(getHumanChoice())


