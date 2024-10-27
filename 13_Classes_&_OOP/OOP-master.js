
let car = {

    make: "Toyota",
    model: "Safari",
    year: 2024,
    start: function(){
        return `${this.make} car got started in ${this.year}`
    }

}

//console.log(car.start());

function Person(name, age){
    this.name = name
    this.age = age
}

let john = new Person('John-Mark',34)
//console.log(john.name)
//console.log(john.age)

function Animal(species){
    this.species = species
}

Animal.prototype.sound = function(){
    return `${this.species} make a sound`
}

// let dog = new Animal("Dog")
// console.log(dog.sound());

// let cat = new Animal("Cat")
// console.log(cat.sound());

// Custom Method
Array.prototype.Shah = function(){
    return `Custom method ${this}`
}

// let myArray = [1,2,3]
// console.log(myArray.Shah());

// let myNewArray = [1,2,3,4,5,6]
// console.log(myNewArray.Shah());

//---------------------------------------OOP-----------------------------------------------

class Vehicle {
    constructor(make,model) {
        this.make = make
        this.model = model
    }

    start() {
        return `${this.model} is a car from ${this.make}`
    }
}

class Car extends Vehicle {
    drive() {
        return `${this.make} : This is an inheritance example`
    }
}

// let myCar = new Car("Toyota","Camry")
// console.log(myCar.start());
// console.log(myCar.drive());

let myVehicle = new Vehicle("Toyota","Corolla")
// console.log(myVehicle.make);
// console.log(myVehicle.model);
// console.log(myVehicle.start());
//console.log(myVehicle.drive()); // Expected Give the error


// -------------------------------- Encapsulation ------------------------------------

class BankAccount {
    #balance = 0;

    deposit(amount){
        this.#balance += amount
        return this.#balance
    }

    getBalance(){
        return `$ ${this.#balance}`;
    }

}

let account1 = new BankAccount()
// console.log(account1.balance)
// console.log(account1.#balance)

//console.log(account1.getBalance())

// ------------------------------------------ Abstraction -------------------------------

class CoffeMachine {
    start() {
        // call DB
        // filter value
        return `Starting The Machine!`
    }

    brewCoffe() {
        // Complex calculation 
        return `Brewing Coffe`
    }

    pressSartButton() {
        // console.log(this.start())
        // console.log(this.brewCoffe())
        let msgOne = this.start()
        let msgTwo = this.brewCoffe()
        return `${msgOne} || ${msgTwo}`
    }

}

let myMachine = new CoffeMachine()
// console.log(myMachine.start())
// console.log(myMachine.brewCoffe())

//console.log(myMachine.pressSartButton());

// -------------------------------- Polymorphism -----------------------------------

class Bird {
    fly() {
        return `I am Flying......`
    }
}

class Penguin extends Bird {
    fly() {
        return `Penguin Can't fly.....`
    }
}

let bird = new Bird()
let penguin = new Penguin()

//console.log(bird.fly());
//console.log(penguin.fly());


// --------------------------- Static Method -------------------

class Calculator {
    static add(a,b) {
        return a+b
    }
}

// let miniCalc = new Calculator()
// console.log(miniCalc.add(2,3));

//console.log(Calculator.add(2,3));

// --------------------------- Getters & Setters ---------------------------------

class Employee {

    #salary;
    constructor(name,salary) {
        
        if(salary < 0){
            throw new Error('Salary cannot be in negative!')
        }

        this.name = name
        // this._salary = salary
        this.#salary = salary
    }

    get salary() {
        return `You are not allowed to see salary`
    }

    set salary(value) {
        if(value < 0) {
            console.error("Invalid Salary");
        }else {
            this._salary = value
        }
    }

}

let emp = new Employee("Shahzain",-3500)
// console.log(emp._salary);
//console.log(emp._salary);

console.log(emp._salary);






















