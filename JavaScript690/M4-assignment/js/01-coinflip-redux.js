// 01-coinflip-redux.js
// declare a varible
let coinFlip;
// Create a for loop that loops a certain amount of times from user
let numberFlips = parseInt(prompt ("How many times would you like to flip the coin?"));

for (let i = 0; i< numberFlips; i++){
    coinFlip = Math.floor(Math.random()*2);
} 
if (coinFlip === 0){
    console.log("Heads");
}else{
    console.log("Tails");
    }
