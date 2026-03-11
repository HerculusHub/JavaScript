// ADD A FUNCTION CALLED CALCULATE

function calculate(x, y, operation) {
  switch (operation) {
    case "add":
      return x + y;
    case "subtract":
      return x - y;
    case "multiply":
      return x * y;
    case "divide":
      return x / y;
    default:
      return null;
  }
}

let resultCal;
let operation;

// Repeat until a valid operation is entered

do {

// COLLECT FIRST NUMBER FROM USER

let numInput1 = Number(prompt("Enter the first number:"));
   

// COLLECT SECOND NUMBER FROM USER
let numInput2 = Number(prompt("Enter the second number:"));

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER

operation = prompt("Enter operation: add, subtract, multiply, or divide").toLowerCase();

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
 resultCal = calculate(numInput1, numInput2, operation);

 if (resultCal === null) {
    alert("Invalid operation. Please enter add, subtract, multiply, or divide.");
  } else {
    alert("The result is: " + resultCal);
  }
} while (resultCal === null);