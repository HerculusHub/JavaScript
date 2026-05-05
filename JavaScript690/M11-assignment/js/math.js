//STEP 1

let input1 = prompt("Enter a number:");

let number1 = Number(input1);

let positiveNumber = Math.abs(number1);

console.log(positiveNumber);


//STEP 2

let input2 = prompt("Enter a decimal number:");


let number2 = Number(input2);

let roundedUp = Math.ceil(number2);

console.log(roundedUp);


//STEP 3

let input3 = prompt("Enter a decimal number:");

let number3 = Number(input3);

let roundedDown = Math.floor(number3);

console.log(roundedDown);

//STEP 4

let input4 = prompt("Enter 5 numbers separated by commas (e.g., 1,2,3,4,5):");

let numbersArray = input4.split(",");

let numbers = numbersArray.map(num => Number(num.trim()));

let largest = Math.max(...numbers);
let smallest = Math.min(...numbers);

console.log("Largest number:", largest);
console.log("Smallest number:", smallest);

//STEP 5

let input5 = prompt("Enter a number:");

let number5 = Number(input5);

let result = Math.sqrt(number5);

console.log(result);