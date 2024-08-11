
// -------------------- Object literal ---------------------

const user = {
    username: "Shahzain",
    login_count: 8,
    signed_in: true,
    getUserDetails: () =>{
        //console.log("Got User Detail from Database");
        //console.log(`UserName: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
//user.getUserDetails();
//console.log(this);


//------------------------- Constructor function -------------------------

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = () =>{
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const User1 = new User('Shahzain',10,true)
const User2 = new User('Khan',13,false)

// console.log(User1);
// // console.log(User2);
// console.log(User1.constructor)

// User1.greeting();

//  Instanceof object


function Car(make, model, year){
    this.make = make
    this.model = model
    this.year = year
}

const auto = new Car('Honda','Accord',2024)

console.log(auto instanceof Car);
// Expected Output: true

console.log(auto instanceof Object);
// Expected Output: true





















































