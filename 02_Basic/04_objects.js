// const tinderUser = new Object()           // sigleton object

// console.log(tinderUser);

const tinderUser = {}               //non sigleton object

// console.log(tinderUser);

tinderUser.id = "abc12"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Shahzain",
            lastName: "Khan"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);
// console.log(regularUser.fullName.userFullName.lastName);

const arr1 = {
    1: "a", 
    2: "b"
}
const arr2 = {3: "a", 4: "b"}
const arr3 = {5: "a", 6: "b"}

// to merge them, use spread operator just like we use in array:

// const arr4 = {...arr1, ...arr2, ...arr3}
// console.log(arr4);

// const arr5 = Object.assign({},arr1,arr2,arr3)
// console.log(arr5);



// how we get data from database and how to access data

const values = [
    {
        id: "123abc",
        email: "some@gmail.com"
    },
    {
        id: "1",
        email: "s@gmail.com"
    }
]

// console.log(values[0].id);           // In which value access like a index because this is a index
// console.log(values[1].email);


console.log(tinderUser);
console.log(Object.keys(tinderUser));       // return keys only
console.log(Object.values(tinderUser));     // return values only
console.log(Object.entries(tinderUser));    // return nested array with key and value

// to check that some key a object has or not we use:

console.log(tinderUser.hasOwnProperty('isLoggedOff'));    // false

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


