// objects literals      ( Single Ton)

const mySmbl = Symbol("key1") 

const jsUser = {
    name: "Shahzain",
    "full name": "Shahzain Khan",
    [mySmbl]: "mykey1",
    age: 20,
    location: "Karachi",
    email: "haris@google.com",
    isLoggedIn: true,
    lastLoggedIn: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["full name"]);
// console.log(jsUser["age"]);
// console.log(jsUser[mySmbl], typeof(jsUser[mySmbl]));

// jsUser.email = "shahzain@gmail.com"
// console.log(jsUser.email);

// Object.freeze(jsUser)         // when freeze apply no more manipulation will take place

// jsUser.email = "abc@gmail.com"
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello JS User");
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());

jsUser.greetingTwo = function() {
    console.log(`Hello, ${this["full name"]} ${this.name}`);
}

console.log(jsUser.greetingTwo());
