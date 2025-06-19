//here we can acess the username(context) which is in myObj using this keyword
//this keyword is used because when the context gets changed we can easily access the changed context
const myObj = {
    username : "Gagan",
    age : 18
}
myObj.greet = function(){
    console.log(`${this.username}, Welcome`);
    
}
// myObj.greet()

//this keyword is only used with object so when we print it it gives us an empty object
// console.log(this);


//this keyword is only used with object and cannot be used with function 
function one(){
    let Name = "Gagan"
    console.log(this.Name);     //here it will give undefined
    
}
// one()           functon call


//when we try to print this within a function we get some key value pair which we cannot access and it only prints these values when we print it within a function
function two(){
    console.log(this)
}
// two()        function call

//similar action as the above one function only change is that we changed the declaration syntax of the function
const three = function(){
    console.log(this);
    
}
// three()        function call


//arrow function
//Syntax is variable_name = (parameters list) => {}
const four = (num1 , num2) => {
        return num1 + num2          //this is an example of explicit return 
}
// console.log(four(4,8))      calling of arrow function is same like normal function

//arrow function with implicit return
//Syntax is variable_name = (parameters list) => (single line of code)
//It is preferred when we have to return after executing a single line
const five = (num3, num4) => (num3 + num4)      //it ret
console.log(five(5, 5))         