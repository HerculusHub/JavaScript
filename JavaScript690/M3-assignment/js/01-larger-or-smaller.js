// 01-larger-or-smaller
let num1,num2;

    // Prompt until first valid integer is entered
    while (true) {
        num1 = prompt("Enter the first integer:");
        
        if (!isNaN(num1) && Number.isInteger(Number(num1))) {
            num1 = Number(num1);
            break;
        } else {
            alert("Invalid input. Please enter a valid integer.");
        }
    }

    // Prompt until second valid integer is entered
    while (true) {
        num2 = prompt("Enter the second integer:");
        
        if (!isNaN(num2) && Number.isInteger(Number(num2))) {
            num2 = Number(num2);
            break;
        } else {
            alert("Invalid input. Please enter a valid integer.");
        }
    }

    // Compare the two numbers
    if (num1 > num2) {
        alert("The larger number is: " + num1);
    } else if (num2 > num1) {
        alert("The larger number is: " + num2);
    } else {
        alert("Both numbers are equal.");
    }