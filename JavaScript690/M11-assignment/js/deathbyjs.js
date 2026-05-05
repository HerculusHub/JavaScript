//STEP 1

function sortStringAlphabetically(str) {
  
  return str.split('').sort().join('');
}

console.log(sortStringAlphabetically('webmaster'));

//STEP 2

function capitalizeWords(str) {
  return str
    .split(' ') 
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
    .join(' '); 
}
console.log(capitalizeWords('the quick brown fox'));

//STEP 3
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)){
            count++;
        }
    }
    return count;
}

console.log(countVowels('The quick brown fox'));
//STEP 4

function generateStringId(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    result += chars.charAt(randomIndex);
  }

  return result;
}

console.log(generateStringId(8));

//STEP 5

function Longest_Country_Name(countries){
    let longest = '';
    
    for (let country of countries) {
        if (country.length > longest.length) {
            longest = country;
        }
    }
    return longest;
}

console.log(Longest_Country_Name([
    "Australia",
    "Germany",
    "United States of America"
]));