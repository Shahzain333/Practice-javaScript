// ------------------------------Number===============================

// let balance = new Number(400)
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toString().length);

// console.log(balance.toFixed(2));

// let num1 = 23.95843
// const num2 = 123.95843

// console.log(num1.toPrecision(3));

// console.log(num2.toPrecision(3));
// console.log(num2.toPrecision(2)); // It will give the value in exponential

// const hundreds = 10000000
// console.log(hundreds.toLocaleString());   // It will represent like a USA No.
// console.log(hundreds.toLocaleString('en-IN')); // It will represnet like a indian No
// console.log(hundreds.toLocaleString('en-PK')); // It will represnet like a pakistan No

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE)

// ------------------------------Math===============================

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,6,8,2));
// console.log(Math.max(4,3,6,8,2));

// console.log(Math.random())
// console.log(Math.random()*10 )
// console.log((Math.random()*10) + 1)

// write a program that will give random values between 10 to 20


let min = 10
let max = 20

let random_value = Math.floor( (Math.random() * ( max - min + 1) ) + min)

// let random_value = Math.floor((Math.random() * (max - min + 1)) + min)

console.log(random_value);
