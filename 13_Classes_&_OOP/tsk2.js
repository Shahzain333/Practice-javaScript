// Create a functional constructor Person that takes name and age as parameters. 
// Add a method greet() to the constructor that returns "Hello, my name is [name]"

// Modify the Person constructor to throw an error if the age is not a positive number.


function Person(name,age) {
    if (typeof age !== 'number' || age <= 0) {
        throw new Error("Age must be a positive number");
    }
    this.name = name
    this.age = age
}

Person.prototype.greet = function(){
    return `Hello, my name is ${this.name}`
}

try {
    const person1 = new Person("Shahzain", 23);
    console.log(person1.greet()); 
  
    const person2 = new Person("Shahzain", -23); 
} catch (error) {
    console.log(error.message);
}
  






