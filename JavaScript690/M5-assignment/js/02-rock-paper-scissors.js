// 02-rock-paper-scissors The Rock, Paper, Scissors Game

// STEP 1 Begin by prompting the user for their choice
let userChoice1, userChoice2,computerChoice1,computerChoice2;

while (true) {
userChoice1 = parseInt(prompt ("Input a number from 0, 1, or 2, where 0 represents rock, 1 represents paper, 2 represents scissors:"))
if (userChoice1 !== NaN && userChoice1===0) {
    userChoice2 = 'rock';
    break;
}else if (userChoice1 !== NaN && userChoice1===1){
    userChoice2 = 'paper';
    break;
}else if (userChoice1 !== NaN && userChoice1===2){
    userChoice2 = 'scissors';
    break;
}else
    alert('You can only enter 0, 1, or 2:')

}


// STEP 2 Generate the computer's choice (0, 1, or 2)
computerChoice1 = Math.floor(Math.random() * 3);

if (computerChoice1===0)
    computerChoice2 = 'rock';
if (computerChoice1===1)
    computerChoice2 = 'paper';
if (computerChoice1===3)
    computerChoice2 = 'scissors';


// STEP 3 Determine winner
if (computerChoice1===userChoice1){
    alert("It's a tie! You both chose " + userChoice2 + ".");
}else if (
  (userChoice2 === "rock" && computerChoice2 === "scissors") ||
  (userChoice2 === "scissors" && computerChoice2 === "paper") ||
  (userChoice2 === "paper" && computerChoice2 === "rock")
) {
  alert("You win! " + userChoice2 + " beats " + computerChoice2 + ".");
} 
else {
  alert("Computer wins! " + computerChoice2 + " beats " + userChoice2 + ".");
}


