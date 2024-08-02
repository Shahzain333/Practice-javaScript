// // var a = 10
// // let b = 20                      //These are Global Scope Everyone can access 
// // const c = 30

// // console.log(a);
// // console.log(b);
// // console.log(c);

// let b = 300

// if(true){
//    // var a = 10
//     let b = 20                          // These are block Scope  Everyone not access just access under The If Else 
//     const c = 30

//     console.log("Inner :",b);
// }

// //console.log(a);
// console.log(b);
// // console.log(c);

//-------------------------------- Function Scope-------------------

// function one () {
//     const username = "Shahzain khan";

//     function two () {
//         const website = "Youtube";
//         console.log(username);
//     }
//     //console.log(website);

//     two()
// }


// one()


//------------------------------------ If else Scope ----------------------

if (true) {
    const username = "Shahzain";
    if(username == "Shahzain"){
        const website = "Youtube"
        //console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


//++++++++++++++++++++++++++++++++++++++ Interseting ++++++++++++++++++++++++++++++

// function add(num){
//     return num + 1
// }

// console.log(add(5))

console.log(add(5))

function add(num){
    return num + 1
}


// const addTwo = (num) => {
//     return num + 2
// }

// addTwo(5)

addTwo(5)
                                // There is an Error for decelaration not use in before decelaration
const addTwo = (num) => {
    return num + 2
}





















