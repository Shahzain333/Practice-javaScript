// function multplyBY5(num){
//     return num * 5
// }

// multplyBY5.power = 2

// console.log(multplyBY5(5));
// console.log(multplyBY5.power);
// console.log(multplyBY5.prototype);

function Chai(name,price){
    this.name  =  name
    this.price = price
}

Chai.prototype.increment = function(){
    this.price++
}

Chai.prototype.printMe = function(){
    console.log(`Price of ${this.name} is ${this.price}`);
}

const chai = new Chai("chai", 249)
// console.log(chai);

chai.increment()
chai.printMe()






























