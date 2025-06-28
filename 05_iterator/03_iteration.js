//++++++++++++++++++++++ for of loop ++++++++++++++++++++++++++

//data-structures declarations

//array declaration
const myArr = [ 1, 2, 3, 4, 5]

//map declaration and initialization
const map = new Map()
map.set('IN','India')
map.set('US','United States ofAmerica')

//object declaration
const myObj = {
    name : "Gagan",
    age : 19,
    USN : "U25UV23T064014"
}


//for of loop is used for iterating through iterables like array,mapstring etc
//for of loop can be used to iterate array  and we can directly access the elements 
for (const i of myArr) {
    // console.log(i);
}

//forof loop can also be applied for map
for (const key of map) {
    // console.log(key);
}

//if we have to access only the key in map and not value then we have to enclose iterator within [] and if we have to access key and value separately in the same loop then the syntax is [key, value]
for (const [key,value] of map) {
    // console.log(key + ':-'+ value); 
}

//we cannot access the key value pair of objects because these are not iterables using forof loop
// for (const element of myObj) {
    // console.log(element); 
// }

//+++++++++++++++++++++++ for-in loop ++++++++++++++++++++++++++++++++++

//forin loop is for mainly for iterating through objets

//for-in loop for array
//since array is also a object we can iteratre through it
//this loop is index based array meaning we cant directly access the array like for-of loop
for (const key in myArr) {
    //if we printed key then we get index but if we print myArr[key] we can access element
    // console.log(myArr[key]);   
}


//for-in loop for map

//map is not a object so we cant iterate through it using forin loop
//we cannot use forin loo for map
for (const key in map) {
    //  console.log(map[key]);
    
}
 
//for-in loop for objects
for (const key in myObj) {
    //key prints the keys in the obejct and and we can access the values using myObj[key] 
    // console.log(key + "=>" + myObj[key]);
}

//+++++++++++++++++ for-each loop ++++++++++++++++++++++++++++++++++

//for-each loop conatains callback function and it can have three parameters item, ipndex, array

//for-each loop for array

myArr.forEach( (item) => {
    // console.log(item);
} )

//for-each loop is used mostly to make operations on the data we get from the databse which is in the form of array of objects

//Decclarartion of array of objects
const obj = [
    {
        name : "Gagan",
        age : 19
    },
    {
        name : "Sumit",
        age :19
    }
]

obj.forEach( function(item){
    console.log(`${item.name}'s age is ${item.age}`);
    
})
