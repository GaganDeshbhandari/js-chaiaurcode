// const tinderUser = new Object()              //creating object in this way creates a singleton
const tinderUser = {}               //empty object

tinderUser.id = "123abc"                //initializing object elements
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);            //printing contents of tinderUser object

const regularUser = {
    email: "some@gmail.com",                //nesting of objects
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

 console.log(regularUser.fullname.userfullname.firstname);            //accessing the element of nested object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }                              nesting of objects but here obj1 and and obj2 gets indexed
// const obj3 = Object.assign({}, obj1, obj2, obj4)         .assign() operator is used to concatenate objects and it returns target object i.e {} meaning obj1,obj2 and other gets concateneted int {} object
const obj3 = {...obj1, ...obj2}                         //spread operator can also be used to concatenate objects
// console.log(obj3);

//when we gate data from the database it is mostly in the form of array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email              //object[index].key  is the syntax to access the value from the array of objects
// console.log(tinderUser);

 console.log(Object.keys(tinderUser));              //.keys(objectName)  gives the array of keys in objectName
 console.log(Object.values(tinderUser));            //.values(objectName) gives the array of values in objectName
 console.log(Object.entries(tinderUser));           //.entries(objectName) gives the array of both keys and values in objectName

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));            ObjectName.hasOwnProperty('key') is used to check whether the objectName has that key or not



//++++++++++++++++++  object destructuring ++++++++++++++

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}


// course.courseInstructor       

//Imagine we have to access courseInstructor's value more than 10 times so instead of accessing it in trafitional way i.e, using . or [] we can destructure

//syntax is {key} = objectName
const {courseInstructor} = course ;          //this is an example of destructuring so whenever we have to access coursreInstructures's value we can access it using instructor
console.log(courseInstructor);                //prints hitesh
                           



//example for a json file
// {
//     "name": "hitesh",                                bothy key and value are enclosed within ""                                               
//     "coursename": "js in hindi",
//     "price": "free"
// }                                            



//most of the json file are array of objects
[
    {},
    {},
    {}
]
