let myDate = new Date()
console.log(myDate.toString());
console.log(typeof myDate)

// let myCreateDate = new Date(2023, 0, 23) //month is start in array form 0 

// let myCreateDate = new Date("2023-00-14")
// console.log(myCreateDate.toLocaleDateString());
let myCreateDate = new Date("01-14-2023")

let myTimeStamp = Date.now() //get the time in milisecond from 1-jan-1970 tll now

// console.log(myTimeStamp);

// console.log(myCreateDate.getTime()) // get the time in milisecond from 1-jan-1970 to 14-jan-2023
// console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());

newDate.toLocaleDateString('default', {
    weekday: "long"
})
console.log(newDate)