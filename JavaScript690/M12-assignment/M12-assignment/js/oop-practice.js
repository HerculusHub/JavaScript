// STEP 1
// Create two classes, one called Cat and another called Dog.
//  Both classes should be created using constructor syntax. 
// The Cat class should be created using a named declaration 
// and the Dog class should be created using an anonymous declaration.
// Named constructor function (class-like) for Cat

// Named constructor function for Cat

/* function Cat(name,age) {
    this.name = name;
    this.age = age;
}


// Anonymous constructor function for Dog

 const Dog = function (name,age) {
    this.name = name;
    this.age = age;
}

// STEP 2

// Create instances
const cat1 = new Cat("Tom",2);
const dog1 = new Dog("Buddy",4);

// STEP 3

// Constructor function for Animal

function Animal() {
    this.created = function() {
        console.log("The Animal has been created");
    };
}
const dog = new Animal ();
dog.created(); */

// STEP 4

/*function Cat(name, age) {
    this.name = name;
    this.age = age;
}

const Dog = function(name, age) {
    this.name = name;
    this.age = age;
};

// Create instances
const cat1 = new Cat("Tom", 2);
const dog1 = new Dog("Buddy", 4);

// Constructor function for Animal
function Animal(message) {

    this.created = function() {
        console.log(message);
    };

}

// Pass message when creating the object
const dog = new Animal("The Animal has been created");

dog.created();*/

// STEP 5

// Constructor function for Animal
/*function Animal(type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
}

// Create an instance of Animal
const animal1 = new Animal(
    "Dog",
    "Golden Retriever",
    "Golden",
    "24 inches",
    "36 inches"
);

// Display the object
console.log(animal1);*/

// STEP 6

// Constructor function for Animal
/*function Animal(type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
}

// Create an instance of Animal
const animal1 = new Animal(
    "Dog",
    "Golden Retriever",
    "Golden",
    "24 inches",
    "36 inches"
);

// Use a for-in loop to display all properties
for (let property in animal1) {
    console.log(property + ": " + animal1[property]);
}*/

// STEP 7
// Constructor function for Animal
/*function Animal(type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;

    // Public method
    this.speak = function() {

        if (this.type.toLowerCase() === "dog") {
            return "The " + this.color + " dog is barking!";
        } 
        else if (this.type.toLowerCase() === "cat") {
            return "The " + this.color + " cat is meowing!";
        }

    };
}

// Create an instance of Animal
const animal1 = new Animal(
    "Dog",
    "Golden Retriever",
    "Golden",
    "24 inches",
    "36 inches"
);

// Call the speak method
console.log(animal1.speak());*/

// STEP 8
// Constructor function for Animal
/*function Animal(type, breed, color, height, length) {

    // Private properties
    let _type = type;
    let _breed = breed;
    let _color = color;
    let _height = height;
    let _length = length;

    // Private method
    function checkType() {
        if (_type.toLowerCase() === "dog") {
            return "dog";
        } else {
            return "cat";
        }
    }

    // Privileged method
    this.speak = function() {
        return "The " + checkType() + " has made a noise!";
    };
}

// Create an instance
const animal1 = new Animal(
    "Dog",
    "Golden Retriever",
    "Golden",
    "24 inches",
    "36 inches"
);

// Call the privileged method
console.log(animal1.speak());*/

// STEP 9

// Add a custom method to the String prototype
String.prototype.findWords = function(word) {

    // Create a regular expression to find the word
    let regex = new RegExp(word, "gi");

    // Find all matches
    let matches = this.match(regex);

    // Count matches
    let count = matches ? matches.length : 0;

    // Alert the result
    alert(`The word "${word}" was found ${count} times.`);
};

// Paragraph of text
let paragraph = "The dog chased another dog while the Dog barked loudly.";

// Call the custom method
paragraph.findWords("dog");

