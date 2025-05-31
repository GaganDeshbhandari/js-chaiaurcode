// This script demonstrates basic string operations in JavaScript for beginners.
// It shows how to join strings, use template literals, find characters, trim spaces, replace text, split strings, and check for substrings.

const name = "Gagan"; // Declare a variable 'name' and assign it the string "Gagan"
const marks = "50/50"; // Declare a variable 'marks' and assign it the string "50/50"

// Concatenate (join) strings using + operator and print the result
//This method of printing is not preferred now a days
console.log(name + ' has ' + marks + ' marks'); // Output: Gagan has 50/50 marks

// Use template literals (backticks) to insert variables and call methods inside a string
//this method of printing is preferred
console.log(` ${name.toUpperCase()} has ${marks} in OS`); // Output: GAGAN has 50/50 in OS

// Get the character at position 3 (index starts from 0) in the string 'name'
console.log(name.charAt(3)); // Output: a

// Find the first position (index) of the letter 'a' in the string 'name'
console.log(name.indexOf('a')); // Output: 1

const name1 = "    Gagan Govind Deshbhandari    "; // String with extra spaces at the start and end
console.log(name1); // Print the string with spaces

// Get a part (substring) of 'name1' from the first 'G' to the first 'n' (inclusive)
console.log(name1.substring(name1.indexOf("G"), name1.indexOf("n") + 1));

// Remove extra spaces from the start and end using trim()
const name2 = name1.trim();

// Replace the word 'Govind' with an empty string (removes 'Govind')
console.log(name2.replace('Govind', ''));

// Split the string into an array of words using space as the separator
console.log(name2.split(' '));

// Check if the string contains the word 'Govind' (returns true or false)
console.log(name2.includes("Govind"));
