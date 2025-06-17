const marvel_heros = ["thor", "Ironman", "spiderman"]       
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)         //pushes all elements of dc_heroes as a single element into marvel_heroes

console.log(marvel_heros);           // ["thor", "Ironman", "spiderman", "["superman", "flash", "batman"]"]         here all the elements of dc_heroes are in index 3
//console.log(marvel_heros[3][1]);        //"flash"

const allHeros = marvel_heros.concat(dc_heros)      //concatenates the elemnts of dc_heroes into marvel_heroes
console.log(allHeros);                              // ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]  

const all_new_heros = [...marvel_heros, ...dc_heros]            //... is called as spread operator which spreads all the elements in the array  it is more preferred then concat() because using spread operator we can add more than two arrrays into single array in one line

console.log(all_new_heros);         //// ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]           //example for array within a array 

const real_another_array = another_array.flat(Infinity)     //.flat() operator is used to add elements which are in sub array into superarray and it takes depth as parameter 
//by giving Infinity as parameter all elements of subarrays irrespective of their deoth is added into super array

console.log(real_another_array);        //[1, 2, 3, 4, 5, 6, 7 , 6 , 7, 4, 5]
                                        //If depth was 1 ,O/p:[ 1 , 2 ,3, 4, 5, 6, 7 , 6, 7, [4, 5]]



console.log(Array.isArray("Hitesh"))          // .isArray Checks whether the parameter is array or not , O/p: False
console.log(Array.from("Hitesh"))             // .from() creates a array from the parameter here it creates array from Hitesh, O/p:['H' , 'i', 't', 'e' , 's' ,'h']
console.log(Array.from({name: "hitesh"})) // dont know much about it might understand it in objects
// it prints empty array 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));          //.of() creates a array from the parameters given