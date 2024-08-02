//  all about function in js

// function functionName(params, params){
//     // logic
// }

// function addTwoNumbers(num1, num2) {
//     // console.log(num1 * num2);
//     return num1 * num2
// }

// let result = addTwoNumbers(3,4)
// console.log(`Result: ${result}`);


// function loginUserMessage (username) {
//     return `${username} just Logged In...`
// }

// console.log( loginUserMessage("Shahzain khan"))
//console.log( loginUserMessage())

// function loginUserMessage (username) {
//     // if(username === undefined){
//     //     console.log("Please Enter A Name!")
//     // }
//     if(!username){
//         console.log("Please Enter A Name!")
//     }
//     return `${username} just Logged In...`
// }

// // console.log( loginUserMessage("Shahzain khan"))
// console.log( loginUserMessage())

function loginUserMessage (username = "Shahzain") {    //Overwrite
    if(!username){
        console.log("Please Enter A Name!")
    }
    return `${username} just Logged In...`
}

// console.log( loginUserMessage("Shahzain khan"))
console.log( loginUserMessage())



// rest operator

function calculateCardPrice1(...num1) {
    return num1
}

console.log(calculateCardPrice1(23,12,31,12));


function calculateCardPrice2(val1,val2,...num1) {
    return num1
}

console.log(calculateCardPrice2(23,12,31,12));


