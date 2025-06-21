
function sayMyName(){
    console.log("H");
    console.log("I");                   //basic function which prints HITESH
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){                //function which prints sum of two numbers such that whwn we call it prints sum

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){                       //function which retruns sum of two numbers it doesnt print it just returns so we have to store it in some variable

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){        //function to print that user is logged in
    if(!username){                                  //if username is not given as argument while calling function it prints enter username         
        console.log("PLease enter a username");     //but here we have given default value so even if we dont give name arguments function will execute using default value
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){           //when we have only 1 parameter but while calling a function we give more than one argument and we want to use all the argument we can do it using rest or spread operator(...)  
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))         //return array of arguments
const user = {
    username: "hitesh",             //we can also give objects as parameters
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({                      //or we can also directly declare object in argument instead of using a object which is already declared
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){               //we can also give array as argument just like objectl
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));          //same as object we can declare array in argument itself