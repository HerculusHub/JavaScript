// 04-grade-assigner

// prompt until a valid integer is entered
let userInput,score;

while (true) {

    userInput = Number(prompt('Please input the score which should be between 1 and 100:'));

    if (userInput >= 1 && userInput <= 100) {
        score = userInput;
        break;
    } else {
        alert("Invalid input. Please enter a number between 1 and 100.");
    }
}

// Use a conditional to check the grade

if  (score <= 69 && score >=60 ) {
    console.log("You received a D")

} else if (score<=79 && score>=70){
    console.log("You received a C")
} else if (score<=89 && score>=80){
    console.log("You received a B")
} else if (score<=100 && score>=90){
    console.log("You received a A")
} else{
    console.log("You received a F")
}

