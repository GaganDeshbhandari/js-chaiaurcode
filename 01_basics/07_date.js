let my_date = new Date()    //Syntax to declare Date obj
console.log(my_date);       //Prints something in non-readable format like 2025-06-02T19:13:50.501Z
console.log(my_date.toString());    //Prints the date in readable format like Mon Jun 02 2025 00:43:50 GMT+0530 (India Standard Time)
console.log(my_date.toISOString()); //2025-06-02T19:20:48.420Z
console.log(my_date.toUTCString()); //Mon, 02 Jun 2025 19:20:48 GMT
console.log(my_date.toDateString());    //Mon Jun 02 2025
console.log(my_date.toLocaleDateString());  //prints 6/2/2025

let myCreatedDate = new Date(2025 , 4 , 3 , 0, 57)      //syntax to declare a date in year,month,date,hour,minute format and month starts from 0 i.e, 0 means JAN
console.log(myCreatedDate);  //Prints 5/3/2025
console.log(myCreatedDate.toLocaleString());    //Prints 12:57:00 AM
console.log(Date.now());

console.log(myCreatedDate.getTime());   //Prints the date in terms of miliseconds 
//Converting Date into miliseconds is helpful when we have to compare dates
