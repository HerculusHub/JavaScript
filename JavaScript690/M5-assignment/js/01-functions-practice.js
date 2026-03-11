//01-functions-practice

//STEP 1
 function halfNumber(numberInput){
    let result = numberInput/2;
    console.log("Half of " + numberInput + " is " +result+".");
    return result;
 } 

 halfNumber(5);

//STEP 2 

function squareNumber(numberInput){
   let result = numberInput * numberInput;
   console.log("The result of squaring the number "+ numberInput +" is "+ result+"." );
   return result;
}
squareNumber(3);

//STEP 3 

function percentOf(num1,num2){
   let result = num1/num2 *100;
   console.log(num1 +" is "+ result +"%" + " of "+ num2+".");
   return num1,num2;
}
percentOf(2,4);

//STEP 4 

function findModulus(num1,num2){
   let result = num2 % num1;
   console.log(result +" is the modulus of "+num1+ " and "+num2+".")
   return num1,num2;
}
findModulus(4,10);

//STEP 5