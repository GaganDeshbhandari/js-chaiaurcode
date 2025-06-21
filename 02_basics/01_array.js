const myArr1 = [ 0, 1 , 2 , 3 , 4 , "gagan" , false]        //we can store any type of data elements in array
const myArr2 = new Array( 1 , 2 , 3 , 4 , 5)        //These are two ways to declare a array

myArr2.push(6)                    //Pushes 6 into the myArr2
console.log(myArr2);              //[0 , 1 , 2 , 3 , 4 , 5 , 6]

myArr1.pop()                    //Pops the last element frmo the myArr1 i.e, 5
console.log(myArr1);            //[0 , 1 , 2 , 3 , 4]

myArr1.unshift(9)               //Insert 9 at the front of the array and pushes all element by 1 position 
console.log(myArr1);            //[9 , 0 , 1 , 2 , 3 , 4]
                                //acts same like insert_front operartions in vectors of cpp

myArr1.shift()                  //removes the  element which was unshifted earlier in the array
console.log(myArr1);            //[0 , 1 , 2 , 3 , 4]

const newArr1 = myArr1.join()    //.join() method converts the array into string
console.log(newArr1);            //type of newArr1 is string 


const Arrsilce = myArr1.slice( 0 , 3)       //slicing returns a section of array without changing the original array i.e myArr1 it takes two      parameters starting index and end index in which staring index is include and ending index is not included
console.log(Arrsilce);  //[0 , 1 , 2]
console.log(myArr1);    //[0 , 1 , 2 , 3 , 4 ]



const Arrsplice = myArr2.splice(0,3)    //in splice it divides the original array in section in which both starting and ending index is included
console.log(Arrsplice);         //[ 1 , 2 , 3]
console.log(myArr2);            //[4 , 5 , 6]



