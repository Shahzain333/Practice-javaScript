let computer = {
    cpu: 12
}

let lenovo = {
    screen: "HD",
    __proto__: computer,
}

let tomHardware = {};

// console.log(computer);
// console.log('computer', computer.__proto__);
//console.log('Lenovo', lenovo.__proto__);

let genericCar = {tyres: 4}

let tesla = {
    driver: "AI",
}

Object.setPrototypeOf(tesla, genericCar);

// console.log(`Tesla: `,tesla)
//console.log(`Tesla: `,genericCar)
//console.log(`Tesla: `,tesla.tyres)
console.log(`Tesla: `,Object.getPrototypeOf(tesla))
console.log(`Tesla: `,Object.getPrototypeOf(tesla.tyres))













