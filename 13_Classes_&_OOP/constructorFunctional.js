// function greet(name){
//     console.log("Hello",name);
// }

function Person(name,age) {
    this.name = name;
    this.age = age;
}

function Car(make,model){
    this.make = make
    this.model = model
}

//let myCar = new Car("Toyota","Camry")
 
//console.log(myCar);

//let myNewCar = new Car('Tata',"Safari")

//console.log(myNewCar.make);
//console.log(myNewCar.model );

function Tea(type){
    this.type = type,
    this.description = function() {
        return `This is a Cup of tea ${this.type}`;
    };
}

// let lemonTea = new Tea('Lemon tea')

// console.log(lemonTea);
// console.log(lemonTea.description());

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

function Drink(name) {
    if(!new.target){
        throw new Error('Drink must be called with new keyword');
    }
    this.name = name;
}

let tea = new Drink('tea')
let coffe = new Drink('coffe')















