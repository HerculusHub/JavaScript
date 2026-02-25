// 02-word-translator

// Prompt user for language code
let languageCode = prompt('Enter a language code ("es", "de", "en", "fr"):');

// Object containing translations
const translations = {
    en: "Hello World",
    es: "Hola Mundo",
    de: "Hallo Welt",
    fr: "Bonjour le monde"
};
// Language names for display
const languageNames = {
    en: "English",
    es: "Spanish",
    de: "German",
    fr: "French"
};
// Output result to console
switch (languageCode){
    case 'es':
        console.log(`Hello World translated in ${languageNames[languageCode]} is: ${translations[languageCode]}`)
        break
    case 'de':
         console.log(`Hello World translated in ${languageNames[languageCode]} is: ${translations[languageCode]}`)
        break
    case 'fr':
         console.log(`Hello World translated in ${languageNames[languageCode]} is: ${translations[languageCode]}`)
        break
    case 'en':
        console.log(`Hello World translated in ${languageNames[languageCode]} is: ${translations[languageCode]}`)
        break
    default: 
         console.log(`Hello World translated in ${languageNames['en']} is: ${translations['en']}`)
       
} 

