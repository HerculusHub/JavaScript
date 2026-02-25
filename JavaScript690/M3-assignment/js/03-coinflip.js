// coin flip game

// prompt until a valid integer is entered
let choice, userChoice;

while (true) {

    choice = Number(prompt('Please select: 1.Heads or 2.Tails (1 = Heads, 2 = Tails)'));

    if (choice === 1 || choice === 2) {
        userChoice = choice;
        break;
    } else {
        alert("Invalid input. Please enter 1 or 2.");
    }
}
// creating a variable called coinFlip and set it equal to a random number
let coninFlip = Math.round(Math.random());
let randomChoice
const setNum = 500;

// Use a conditional to check the result of the coin flip

if  (coninFlip <= 500) {
    randomChoice = 1

}else{
    randomChoice = 2
}

// Output the game results to the user
if (randomChoice === 1 && userChoice === 1 ){
    alert("The flip was heads and you chose heads...you win!")
} else if (randomChoice === 1 && userChoice ===2 ) {
    alert("The flip was heads but you chose tails...you lose!")
} else if (randomChoice === 2 && userChoice ===1 ) {
    alert("The flip was tails but you chose heads...you lose!")
} else if (randomChoice ===2 && userChoice ===2 ) {
    alert("The flip was tails and you chose tails...you win!")
}