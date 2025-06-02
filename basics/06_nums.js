const number = Number(100000)
const number2 = 123.233

console.log(number.toString().length); //converts number into string and prints its length

console.log(number2.toPrecision(3));  //prints precise vallue upto digit 4 here it prints 123.2 if parameter was 3 it prints 123 
console.log(number.toFixed(1)); //prints 100.0
console.log(number.toLocaleString());   //prints numberws with commas in English Standards

console.log(number.toLocaleString('en-IN')); //prints numbers in terms of Indian Standards

//+++++++++++++++++++++++++++++ Maths +++++++++++++++++

console.log("From here Maths");
//Math is object in js if we want detailed description we can check it in console of websites or we can go to mdn docs

console.log(Math.abs(-4));  //prints 4 abs act as mod function
console.log(Math.round(4.6));   //prints a round of number
console.log(Math.ceil(4.2));    //round of the number to its higher value here it is 5
console.log(Math.floor(4.6));   //round of the number to lower value here 4
console.log(Math.max(4,6,0,2,7,2));     //prints the max value
console.log(Math.random());     //prints a random number whose value will be im between 0 and 1

const min = 10;
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1 ))+ min );      //Prints a random number between 10 and 20
