// Basic number comparisons
console.log(2 > 1);      // true: 2 is greater than 1
console.log(2 >= 1);     // true: 2 is greater than or equal to 1
console.log(2 < 1);      // false: 2 is not less than 1
console.log(2 == 1);     // false: 2 is not equal to 1 (loose equality)
console.log(2 != 1);     // true: 2 is not equal to 1

// Comparing strings with numbers
console.log("2" > 1);    // true: "2" is converted to number 2, so 2 > 1
console.log("02" > 1);   // true: "02" is converted to number 2, so 2 > 1

// Special cases with null
console.log(null > 0);   // false: null is converted to 0, 0 > 0 is false
console.log(null == 0);  // false: null only loosely equals undefined, not 0
console.log(null >= 0);  // true: null is converted to 0, 0 >= 0 is true

// Special cases with undefined
console.log(undefined == 0); // false: undefined only loosely equals null, not 0
console.log(undefined > 0);  // false: undefined is not converted to a number, result is false
console.log(undefined < 0);  // false: same as above

// Strict equality (checks value and type)
console.log("2" === 2); // false: "2" is a string, 2 is a number, so not strictly equal

//summary in JS comparison and equivalence acts different