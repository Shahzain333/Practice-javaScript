// all about Dates

// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toLocaleString())
// console.log(typeof(myDate))

let myCreatedDate = new Date("01-03-2020")
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate2 = new Date(2020,0,23)
// // console.log(myCreatedDate);
// console.log(myCreatedDate2.toDateString());
// console.log(myCreatedDate2.toLocaleString());

// let myCreatedDate3 = new Date(2020,0,23 ,5,3)
// console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp) // in mili-secs
// console.log(Math.floor(Date.now()/1000))  // convert in seonds

let todayDate = new Date()
// console.log(todayDate.getDay())
// console.log(todayDate.getTime())
// console.log(todayDate.getHours())
// console.log(todayDate.getMonth()+1)

// console.log(`The Day is ${todayDate.getDay()} and the time is ${todayDate.getTime()}`)


// todayDate.toLocaleString('default' , {
//     weekday: "long"
// })

// console.log(weekday);