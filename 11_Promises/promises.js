const promiseOne = new Promise(function(resolve,reject){
    //Do in async task
    //DB calls , Cryptography , network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()                                // this one is now connect to the then 
    },1000)
    
})

promiseOne.then(function(){                      //The connection of resolve to the then 
    console.log("Promise Consumed");
})                                          

// Two promise

new Promise(function (resolve,reject) {
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)

}).then(function(){
    console.log("Async 2 resolved");
})


// Third promise -------------------------

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve( {username: "Shahzain", email: "Shahzain@gmail.com"} )
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// Fourth promise -------------------------

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true                                 // If error is false then it will print the name
        if(!error){
            resolve( {username: "Khan", password: "1234" } )
        }else{
            reject('ERROR: Something went wrong')
        }
    },2000)
})

promiseFour
.then( (user) => {
    console.log(user);
    return user.username
}).then(function(myUserName){    
    console.log(myUserName);
}).catch(function(error){
    console.log(error);
}).finally( () => console.log("The promise is either resolved or rejected"))   // default


// Fifth Promise --------------------------------------

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


// ---------------------- 1st Method ------------------

// async function getAllUsers(){
//     try {

//         const response = await fetch('https://jsonplaceholder.typicode.com/users')  // Data is string

//         const data = await response.json()  // Now convert to the json
//         console.log(data);

//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

// ---------------- 2nd Method ---------------------------

fetch('https://api.github.com/users/shahzain333')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available




















