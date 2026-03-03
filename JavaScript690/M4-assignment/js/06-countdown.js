// 06-countdown

let userInput = parseInt(prompt( "Please enter a valid non-negative number:"));

if (userInput<0){
    userInput = prompt("Please enter a valid non-negative number!")
}

countNumber = userInput;

for (let countNumber= userInput; countNumber>= 0; countNumber--){
    console.log(countNumber);
} 
