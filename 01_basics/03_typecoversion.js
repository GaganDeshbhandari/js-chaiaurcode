// Type conversion in JavaScript means changing a value from one data type to another.
// For example, you can change a number to a string, a string to a number, or a number to a boolean.
// This is useful when you want to use a value in a different way.
// JavaScript provides built-in functions like Number(), String(), and Boolean() to do this.
// Example: Number("123") changes the string "123" to the number 123.
// Example: String(456) changes the number 456 to the string "456".
// Example: Boolean(1) changes the number 1 to true.
// If conversion is not possible, you may get special values like NaN (Not a Number).

// --- Code Explanation ---
// let score = 3: Creates a variable 'score' with value 3 (a number).
// console.log(score);: Prints the value of 'score' (3).
// console.log(typeof score);: Prints the type of 'score' (number).

let score= 3
console.log(score);
console.log(typeof score);

// let stringscore = "33aba": Creates a variable 'stringscore' with value "33aba" (a string).
// console.log(stringscore);: Prints the value of 'stringscore' ("33aba").
// console.log(typeof stringscore);: Prints the type of 'stringscore' (string).

let stringscore = "33aba"
console.log(stringscore);
console.log(typeof stringscore);

// let strtonum = Number(stringscore): Tries to convert 'stringscore' to a number. Since "33aba" is not a valid number, the result is NaN (Not a Number).
// console.log(strtonum);: Prints the result (NaN).
// console.log(typeof strtonum);: Prints the type (number, because NaN is a special number value).

let strtonum = Number( stringscore)
console.log(strtonum);
console.log(typeof strtonum);

// let numtostr = String(score): Converts the number 'score' (3) to a string "3".
// console.log(numtostr);: Prints the string "3".
// console.log(typeof numtostr);: Prints the type (string).

let numtostr = String(score)
console.log(numtostr);
console.log(typeof numtostr);

// let boolNUmber = Boolean(score): Converts 'score' (3) to a boolean. Any non-zero number becomes true.
// console.log("Boolean Number: " + boolNUmber);: Prints 'Boolean Number: true'.
// console.log(typeof boolNUmber);: Prints the type (boolean).

let boolNUmber = Boolean(score)
console.log("Boolean Number: " + boolNUmber);
console.log(typeof boolNUmber);

// let boolValue = 1;: Creates a variable 'boolValue' with value 1.
// let boolStr = String(boolValue): Converts 1 to the string "1".
// console.log(boolStr);: Prints "1".
// console.log(typeof boolStr);: Prints the type (string).

let boolValue=1;
let boolStr = String(boolValue)
console.log(boolStr);
console.log(typeof boolStr);
// --- End of Explanation ---

console.log(1 + 1);     //prints 2
console.log(1 + "2");   //prints 12
console.log("2" + 1);   //prints 21
console.log("2" + 1 + 1);   //prints 211
console.log(1 + 2 + "3");   //prints 33