// STEP 1
// STEP 2
// STEP 3

// 1 Convert the following highlighted identifiers to Camel Case notation:

// let some_month
let someMonth;
// function the Month()
function theMonth() {}
// let current-month
let currentMonth;
// let summer_month
let summerMonth;
// let MyLibrary-function
let myLibraryFunction;

// 2 

let firstNum=100;  //Numeric literal
let firstMessage="Hello, World!";   //String literal
let answerBoolean=true; //Boolean literal
let emptyValue=null    //Null literal expression

// 3
// Two examples of complex / variable expressions
let a1=50;
let b1=5;
let distance=a1/b1+5*(a1-b1);
console.log(distance);

let nameUser = "Mike";
let userAge = 37;
let answerMessage = nameUser + " is " + (userAge >= 18 ? "an adult" : "a minor") + ".";
console.log(answerMessage);

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
const strFirstname = "Alice"; 

let intYourage = 30;

var boolMayWeContactyou = true;

//6

let myVariable = 10 + " oranges";  
console.log(myVariable);  

//7
let firstValue = true + "Hello";
console.log(firstValue);
let secondValue = 5+ true;
console.log(secondValue)

//8

let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
console.log(someString)

//9
let nullVariable=null;
console.log(nullVariable);

let undefinedValue;
console.log(undefinedValue)

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

alert("Hello " + "Mike" + " " + "Jhon" + ", welcome to the JavaScript class!");

//12
let name1="Mike John";
alert("Hello "+name1+" , Welcome to the JavaScript class!");

//13

let courseName = "JavaScript";
let name2="Mike John"
alert("Hello "+name2+", Welcome to the "+ courseName +"class!");

//14
let name3 = "Mike John";  
let course3 = "JavaScript";   

alert("Hello " + name3 + ".\nWelcome to the " + course3 + " class!");

//15

let name4 = prompt("What is your name?");  
let course4 = "JavaScript";  

alert("Hello " + name4 + ".\nWelcome to the " + course4 + " class!");

//16

let name5 = prompt("What is your name?");  
let course5 = prompt("What class are you taking?");  

alert("Hello " + name5 + ".\nWelcome to the " + course5 + " class!");

//17
let x0 = 10;
let y0 = 20;
console.log(x0+y0);

//18
let x1=20;
x1 +=20;
console.log(x1);

//19
let x2=20;
x2 *=5;
console.log(x2);

//20
let x3=20%3;
x3 /=1;
console.log(x3);

//21
let a = 9;
let b = 22;
let c = 53;

let result1 = (a < b && b < c) ;

console.log(result1);

//22

let x = 100;
let y = 20;
let z = 100;

let result2 = (x !== z || y > x || z <= y);

console.log(result2);  
