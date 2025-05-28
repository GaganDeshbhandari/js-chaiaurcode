// This script shows how to declare and use variables in JavaScript
// There are three main ways to declare variables: const, let, and var
// const: Use this when you do not want the value to change
const accountId = 123 // accountId will always be 123

// let: Use this when you want to change the value later
let accountName = "Gagan" // accountName can be changed later

// var: This is the old way to declare variables. It is not recommended because it has scope issues
var accountPassword = "0987" // accountPassword can be changed, but avoid using var

// If you do not use any keyword, JavaScript will still create the variable, but this is not a good practice
accountCity = "Bengaluru" // Avoid declaring variables like this

// It is better to use let or const instead of var
// let and const have block scope, which is safer and easier to understand

// console.table prints the values in a table format, which is easy to read
console.table([accountId, accountName, accountPassword, accountCity])
// This will show all the variable values in a table in the console