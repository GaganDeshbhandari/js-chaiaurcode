//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);                   it prints 10 because this a belongs to inner scope
    
}



// console.log(a);                  it will print 300 
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);           //smaller funtion can assess variable from its parent function or ;arger function
                                        //here username can be accessed but website cannot be accessed by the bigger function
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {                //same for if scope also
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))                  //when we declare a function in normal way we can call it before declaring it

function addone(num){
    return num + 1
}



addTwo(5)                       //but when we try to call a function  before declaring it which is stored in varibale it will give us error
const addTwo = function(num){
    return num + 2
}