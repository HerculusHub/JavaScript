// 02-coinflip-streak

// declare a variable;
let coinFlip2;
let timeCount = 0;
// create a do while loop

do{
// generate random number 0 or 1
coinFlip2 = Math.floor(Math.random()*2);

if (coinFlip2 ===0) {
    console.log("Heads");
    timeCount += 1
}else{
    console.log("Tails")
}

}while (coinFlip2===0);

console.log("Heads came up "+ timeCount +" times.");