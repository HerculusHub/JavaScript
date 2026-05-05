//STEP 1

let name = prompt("Please enter your name:");


if (name !== null) {
    
    let length = name.length;

    
    alert("Your name has " + length + " characters.");
}
//STEP 2

let name1 = prompt("Please enter your name:");


let index = prompt("Enter a number to find the letter in your name:");


index = Number(index);


if (name1 !== null && !isNaN(index)) {
    
    let letter = name1.charAt(index - 1);

    
    if (letter) {
        alert("The letter at position " + index + " is: " + letter);
    } else {
        alert("That number is out of range for your name.");
    }

} else {
    alert("Invalid input. Please enter a valid name and number.");
}


//STEP 3
let firstName = prompt("Enter your first name:");

let lastName = prompt("Enter your last name:");

let fullName = String(firstName) + " " + String(lastName);

alert("Your name is: " + fullName);

//STEP 4

let sentence0 = "The quick brown fox jumps over the lazy dog";

let index1 = sentence0.indexOf("fox");

alert("The index of 'fox' is: " + index1);

//STEP 5

let sentence1 = "The quick brown fox jumps over the lazy fox";
let lastIndex1 = sentence1.lastIndexOf("fox");
alert("The last index of 'fox' is: " + lastIndex1);

//STEP 6

let sentence2 = "The quick brown fox jumped over the lazy dog";
let fullName2 = prompt("Please enter your full name:");
let updatedSentence = sentence2.replace("the lazy dog", fullName2);
alert(updatedSentence);

////STEP 7
let sentence3 = "The quick brown fox jumps over the lazy dog";
let word = prompt("Enter a word to search in the sentence:");
let result = sentence3.includes(word);
alert("Does the sentence contain '" + word + "'? " + result);

// STEP 8
let old_string = "The quick brown fox jumps over the lazy dog";
let new_string = old_string.slice(31);
alert(new_string.toUpperCase());

// STEP 9
let text1 = " THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
let trimmedText = text.trim();
let result1 = trimmedText.toLowerCase();
alert(result1);

// STEP 10
let sentence4 = "the quick brown fox jumps over the lazy dog";
let correctedSentence = sentence4.charAt(0).toUpperCase() + sentence4.slice(1);
alert(correctedSentence);
