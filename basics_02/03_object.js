const mySym = Symbol('key1')                    //this is how we declare a variable which is of Symbol data type

const user = {
    name : "Gagan",                                                                 //Object stores data using key value pair
    age : 18,                                                                       //Ex: name = key anfd "Gagan" = value
    email : "deshbhandarigagan07@gmail.com",                                        //This is one of the way to declare the Object and this way of declaring is called as literals
    "College" : "University Of Visvesvarayya College Of Engineering",              //we can also declare key within "" but we have to use [] to access it and cannot access it using . 
    USN : 'U25UV23T064014',                                                          //key's type automatically gets converted by js based on its value 
    [mySym] : "Mykey2",                                                              //declaring a variable which is of symbol data type

    greet : function(){                                                             //function ca be used as variable in js
        console.log(`Hello ${this.name}`);                                          //to access a element of an object within a function which is also within the object we use this keyword
    }                                                          
}   

console.log(user.name);                 //we can access the object value using .(dot) operator
console.log(user['email']);             //we can also acccess using [] but we have to give key within '' or ""
console.log(user['age']);               //most of the time we use . dot operator       prints 18
console.log( user[mySym]);               //this is how we access the variable which is of Symbol datatype

user.age = 20                       //we can change the value of variable which is in the object because it is reference based    prints 20
console.log(user.age);

console.log(user.greet());
