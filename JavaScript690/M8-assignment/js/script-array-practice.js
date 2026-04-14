//STEP 1

const movies = [
  "The Lego Movie",
  "Schindler's List",
  "Forrest Gump",
  "The Godfather",
  "WALL·E"
];
console.log(movies[1]);

//STEP 2
const arrayMovies = new Array(5);
arrayMovies[0] = "The Lego Movie";
arrayMovies[1] = "Schindler's List";
arrayMovies[2] = "Forrest Gump";
arrayMovies[3] = "The Godfather";
arrayMovies[4] = "WALL·E";

console.log(arrayMovies[0]);

//STEP 3

arrayMovies.splice(2, 0, "Tim Robbins in The Shawshank Redemption");
console.log(arrayMovies.length);

//STEP 4
delete movies[0];
console.log(movies);

//STEP 5
arrayMovies[0] = "The Lego Movie";
arrayMovies[5] = "Fantasia";
arrayMovies[6] = "The Great Dictator";

for (let index in arrayMovies) {
  console.log(arrayMovies[index]);
}
//STEP 6

for (let movie of arrayMovies) {
  console.log(movie);
}

//STEP 7
arrayMovies.sort();
for (let movie of arrayMovies) {
    console.log(movie);
}

    //STEP 8
const leastFavMovies = [
  "The Last Airbender",
  "Roe v. Wade",
  "Fantastic Four"
];

console.log("\nMovies I like:\n");
console.log('\n');

for (let movie of arrayMovies) {
    console.log(movie);
}
console.log("\nMovies I regret watching:\n");
console.log('\n');
for (let leastFavMovie of leastFavMovies) {
    console.log(leastFavMovie);
}


//STEP 9

const movies2 = arrayMovies.concat(leastFavMovies);
movies2.sort().reverse();
console.log(movies2);

//STEP 10

const lastMovie = console.log(movies2[movies2.length - 1]);
console.log(lastMovie);

//STEP 11

console.log(movies2[0]);

//STEP 12

let indices = []

leastFavMovies.forEach((film,index) =>{
    indices.push(index);
})

indices.forEach((film,index) =>{
    leastFavMovies[film] = arrayMovies[index];
})
console.log(leastFavMovies);

//STEP 13

const movies3 = [
  ["The Godfather", 1],
  ["Schindler's List", 2],
  ["Forrest Gump", 3],
  ["Inception", 4],
  ["WALL·E", 5]
];
const flatMovies = movies3.flat();
const movieNames = flatMovies.filter(item => typeof item === "string");
console.log(movieNames);

//STEP 14

const employees= ["Zak", "Jessica", "Mark", "Fred", "Sally"];
const showEmployee = function (arrayEmployee) {
    console.log("Employees: \n");
    console.log('\n');
    for (let emp of arrayEmployee) {
        console.log(emp.toUpperCase());
    }
}

showEmployee(employees);

//STEP 15

function filterValues(arr) {
    return arr.filter(value => 
        value !== false &&
        value !== null &&
        value !== 0 &&
        value !== ''
    )
}

console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

//STEP 16
const getRandomItem = (array) =>
    array[Math.floor(Math.random() * array.length)];
const nums = [1,2,3,4,5,6,7,8,9,10];
console.log(getRandomItem(nums));

//STEP 17

const getMax = (array) =>{
    return Math.max(...array);
}
const nums2= [8,9,2,4,6,7,22]
console.log(getMax(nums2));
