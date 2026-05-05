//STEP 1

let month = Number(prompt("Enter a month (1-12):"));
let year = Number(prompt("Enter a year (e.g., 2026):"));

let daysInMonth = new Date(year, month, 0).getDate();

console.log(`Number of days: ${daysInMonth}`);

//STEP 2

let inputDate = prompt("Enter a date (e.g., 2026-05-04):");
let date1 = new Date(inputDate);

let monthName = date1.toLocaleString("default", { month: "long" });

console.log(monthName);

//STEP 3

let input2 = prompt("Enter a date (e.g., 2026-05-04):");

let date2 = new Date(input2);

let day = date2.getDay();

let isWeekend = (day === 0 || day === 6);

console.log(isWeekend ? "It's a weekend!" : "It's a weekday.");


//STEP 4

let today = new Date();

today.setDate(today.getDate() - 1);

let days = [
  "Sunday", "Monday", "Tuesday",
  "Wednesday", "Thursday", "Friday", "Saturday"
];

let dayIndex = today.getDay();

let yesterdayName = days[dayIndex];

console.log(yesterdayName);


//STEP 5

let today2 = new Date();


let dayName = today2.toLocaleString("default", { weekday: "long" });

let firstLetter = dayName.charAt(0);

console.log(firstLetter);