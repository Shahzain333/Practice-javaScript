const user = {
    username: "Shahzain",
    price: 99.99,
    message: function Hello() {
        // this keyword refers to the current context
        console.log(`${this.username}, Welocme to website`);
        
        //console.log(this);  // This work like current context means value
    }
    
}

// console.log(user.message());
// user.username = "sam"
// console.log(user.message());

console.log(this);


// ========================================

// function chai() {

//    // console.log(this);
    
//     let username = "Shahzain"

//     // this keyword only works in object
//     console.log(this.username);      //undefined
// }

// chai()


const myNewArr = [200,400,100,300]

let returnSecondValue = function(getArray) {
    return  getArray[3]
}

console.log(returnSecondValue(myNewArr));

// ===========================================
// arraow fuction
// () => {}

// const addTwo = () => {}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return (no need to write return)
// const addTwo = (num1, num2) => (num1 + num2)

// what if want to return an object
// const addTwo = (num1, num2) => (
//     {
//         name: "Haris"
//     }
// )

// console.log(addTwo(3,4));

