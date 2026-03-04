// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;
let again2='n';

// COLLECT VALUES FROM THE USER
do {
    investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
    if (investment !== null && !isNaN(investment) && investment>= 0){
        break;
    }else{
        alert('Please enter 0 or a positive number.')
        again2 = 'y'
    } 
} while (again2 ==='y');

do {
    rate = parseFloat(prompt('Enter interest rate as xx.x'));
    if (rate>=0 && rate<=0.06 && rate !== null && !isNaN(rate)){
        break;
    }else{
        alert("Please check the input, the number should be between 0 and 6%.");
        again2 = 'y'
    }
}while (again2 ==='y');

do {
    years = parseInt(prompt('Enter the number of years you want to invest for'));
    if (years>=1 && years<=30 && years !== null && !isNaN(years)){
        break;
    }else{
        alert("Please check the input, the number should be between 1 and 30.")
        again2='y';
    }
}while(again2==='y');    
    


// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);