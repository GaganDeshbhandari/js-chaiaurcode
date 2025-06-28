// filter iterator in js
//It is same as for-each but if we have to check some conditions for each value of array it is preferred to use filter we can also use it using the for-each but filter is mostly used

//declarations of data-structure

const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//.filter also takes callback function just like foreach
let newNumbers = Numbers.filter( (item) => ( item > 4 ) )
// console.log(newNumbers);

//Declaring array of objects
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //consider tht we only have to print book which satisfies some conditions

let newBooks = books.filter( (book) =>(  book.genre == 'History') )
// console.log(newBooks);


//if we want to manipulate the values in the array we use .map()
//calling more than one method in a single line is called as method chaining
const neNums2 = Numbers
                .map( (item) => (item * 10 ) )
                .filter( (item) =>(item > 40) )
console.log(neNums2);
