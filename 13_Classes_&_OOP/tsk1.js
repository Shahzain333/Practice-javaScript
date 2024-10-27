// Task: Prototype Chaining

// Create a constructor function Animal that has a method speak() that return 'Animal speaking'.

// Then create another constructor Dog that inherits from Animal using prototypes.

// The Dog constructor should add a method bark() that returns 'Woof!'. 
// Demonstrate the prototype chain between Dog and Animal.


function Animal(){}

Animal.prototype.speak = function(){
    return "Animal Speaking"
}

function Dog(){}

Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

Dog.prototype.bark = function(){
    return "Woof!"
}

const myDog = new Dog()

console.log(myDog.speak());
console.log(myDog.bark())

console.log(myDog instanceof Dog);     
console.log(myDog instanceof Animal);  

console.log(Dog.prototype.isPrototypeOf(myDog));    
console.log(Animal.prototype.isPrototypeOf(myDog)); 














