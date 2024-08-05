// for loop

// for (let i = 0; i < 10; i++) {
//     const element = i
//     console.log(element);
// }

// nested loop

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer Loop Value : ${i}`);
    
//     for (let j = 1; j <= 10; j++) {
//         const element = j;
//         // console.log(element);
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
//     console.log();
// }


// const myArr = [1,2,3,4,5,6]
// console.log("The Length Of array is :",myArr.length);

// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);
// }

// console.log();


// Break and Continue

for (let index = 1; index <= 10; index++) {
    // console.log(index);
    if (index == 5) {
        // break
        console.log(`Detected ${index}`);
        continue
        
    }    
    console.log(index);
}

// for (let index = 1; index <= 10; index++) {
//     if (index == 5) {
//         console.log(`Detected ${index}`);
//         break
//     }    
//     console.log(index);
// }
