// Task 1: Encapsulation Using Getters and Setters

// Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). 
// Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.

class BankAccount {
  constructor(balance = 0) {
    this._balance = balance;
  }

  set balance(amount){
    if(amount < 0){
       console.log(`Balance Can't be in Negative`)
    }else {
       this._balance = amount
    }
  }

  get balance(){
    return this._balance
  }

  deposit(amount){
    if(amount > 0){
        this._balance += amount
        console.log(`Deposit: $${amount}`)
    }else {
        console.log(`Deposit Amount Must be Positive`)
    }
  }

  withdrew(amount){
    if(amount > 0){
        if(this._balance >= amount){
            this._balance -= amount
            console.log(`WithDrwal : $${amount}`)
        }else {
            console.log("Insufficient balance")
        }
    }else {
        console.log(`WithDrawl Amount Must be positive`)
    }
  }

}

const account = new BankAccount(100)
account.deposit(50)
account.withdrew(30)
account.withdrew(200)

console.log(account.balance)

// Task 2: Polymorphism with Method Overriding

// Create a class Shape with a method area() that returns 0. Create two subclasses Circle 
// and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.

class Shape {
    area(self) {
        return 0
    }
}

class Circle extends Shape {
    constructor(radius){
        super()
        this.radius = radius
    }
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Rectangle extends Shape{
    constructor(width,height){
        super()
        this.width = width
        this.height = height
    }
    area() {
        return this.width * this.height;
    }
}

let  shape = new Shape()
let circle = new Circle(5)
let rectangle = new Rectangle(4,6)

console.log("Shape",shape.area())
console.log("Area Of Circle",circle.area())
console.log("Area Of Rectangle",rectangle.area())








