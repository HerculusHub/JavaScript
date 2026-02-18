//STEP1
//STEP2
//STEP3
//1
let someMonth;
function theMonth() {}
let currentMonth;
let summerMonth;
let myLibraryFunction;
//2
let num=51;  //Numeric literal
let message="Hello,World!";   //String literal
let answer= false; //Boolean literal
let emptyValue=null    //Null literal expression
//3
let a=50;
let b=5;
let distance=a/b+(a-b);
console.log(distance);

let name = "John";
let age = 25;
let message = name + " is " + (age >= 18 ? "an adult" : "a minor") + ".";
console.log(message); 

//4
let strFirstName;       
let strLastName;       
let strAddress;         
let strCity;         
let strState;       
let intZipCode;        
let intYourAge;       
let strReferralSource;  
let boolMayWeContactYou; 

//5
let strFirstName;
strFirstName = "Alice"; 

let intYourAge;
intYourAge = 29;

let boolMayWeContactYou;
boolMayWeContactYou = true;

//6
let myVariable = 10 + " oranges";  
console.log(myVariable);  
console.log(5 + "10");   
console.log("5" * 2);    
console.log("Hello" + 5); 

//7


let firstVariable = true + " is the truth";
console.log(firstVariable);  

let secondVariable = 10 + true;
console.log(secondVariable); 

//8

let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
console.log(someString);

//9

let nullVariable=null;
console.log(nullVariable);

//10

let stringLiteral="Hello,world!";
console.log(typeof stringLiteral);

let numberLiteral=72;
console.log(typeof numberLiteral);

let booleanLiteral=false;
console.log(typeof booleanLiteral);


let objectLiteral = { name: "Mike", age: 29 };
console.log(typeof objectLiteral);  

let undefinedLiteral;
console.log(typeof undefinedLiteral);  

//11
let firstName = "Mike";  
let lastName = "Jhon";  

alert("Hello " + firstName + " " + lastName + ", welcome to the JavaScript class!");

//12
let name="Mike Jhon";
alert("Hello"+name+"welcome to the JavaScript class!");

//13

let Course = "JavaScript";
let name="Mike John"
alert("Hello"+name+"welcome to the "+ course +"class!");

//14
let name = "Mike John";  
let course = "JavaScript";   

alert("Hello " + name + ".\nWelcome to the " + course + " class!");

//15

let name = prompt("What is your name?");  
let course = "JavaScript";  

alert("Hello " + name + ".\nWelcome to the " + course + " class!");

//16

let name = prompt("What is your name?");  
let course = prompt("What class are you taking?");  

alert("Hello " + name + ".\nWelcome to the " + course + " class!");

//17
let x=10;
let y=20;
console.log(x+y);

//18
let x=20;
x +=20;
console.log(x);

//19
let x=20;
x *=5;
console.log(x);

//20
let x=20%3;
x /=1;
console.log(x);

//21
let a = 10;
let b = 20;
let c = 30;

let result = (a < b && b < c) || (c === 30);

console.log(result);

//22

let x = 50;
let y = 25;
let z = 50;

let result = !(x !== z || y > x || z <= y);

console.log(result);  