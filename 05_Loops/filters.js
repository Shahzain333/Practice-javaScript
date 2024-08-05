// const codingLang = ["java", "python", "C++"]

// const data = codingLang.forEach(element => {
//    // console.log(element);
//     return element
// });

// console.log(data);
// foreach loop does not return any value it only iterator on objects


// ------------------------------------------------------------------------------------

// while filters in js return values as array

//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = numbers.filter( (num) => {
//     return num > 4
// })

// console.log(newNum); 

// as thing can be done with foreach loop but with some logic

// const myNum = []

// numbers.forEach(element => {
//     if (element > 4) {
//         myNum.push(element)
//     }
// });

// console.log(myNum);


const books = [
    {
        title: "Book one",
        genre: "Fiction",
        publish: 1981,
        edition: 2004
    },
    {
        title: "Book two",
        genre: "Non-Fiction",
        publish: 1981,
        edition: 2004
    },
    {
        title: "Book three",
        genre: "Fiction",
        publish: 1981,
        edition: 2004
    },
    {
        title: "Book four",
        genre: "Science",
        publish: 1981,
        edition: 2004
    },
    {
        title: "Book five",
        genre: "History",
        publish: 2000,
        edition: 2004
    },
    {
        title: "Book six",
        genre: "History",
        publish: 1981,
        edition: 2004
    },
]

// let booksFilter = books.filter( (bk) => 
//     bk.genre === 'History'
// )

// let booksFilter = books.filter( (bk) => {
//     return bk.publish >= 2000 
// })

// console.log(booksFilter);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.filter( (num,index) => {
    numbers[index] = num+10
})

console.log(numbers);