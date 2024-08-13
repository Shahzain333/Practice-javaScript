
// console.log(Math.PI);
// Math.PI = 4           // internally it set to not rewritable
// console.log(Math.PI);


// const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descriptor);

//why we cannot change PI value ?:

// {
//   value: 3.141592653589793,
//   writable: false,    // because of this 
//   enumerable: false,
//   configurable: false
// } 



// lets make our own function, set to not writable: false

const chai = {

    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }

}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
//console.log(chai);

Object.defineProperty(chai, 'name', {
   // writable: false,
    enumerable: true,
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

chai.name = 'Chai'

//console.log(chai);

// the chai object is not iterable ==> to iterable ==>Object.entries(object)

console.log(`In forof loop`);

for (let [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}





























