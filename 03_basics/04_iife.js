//IIFE = Immediately Invoked Function Exprtession

//normal iife
//syntax is:  (normal function declaration)()
//int first () we declare function and using ()we run it
(function one(){
    console.log(`Hello Gagan`);
})();

//arrow iife or simple iife with parameter and argument
((user) => {
    console.log(`Hello, ${user}`);
    
})('Ramnath')

//It is preferred to use ; at the end of the all the line within iife or else js compiler gets confused and might not execute other iife
//For Ex of we forgot to terminate console.log() of the the first iife 2nd iife will not get executed