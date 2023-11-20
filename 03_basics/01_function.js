// function sayName(){
//     console.log("H")
//     console.log("I")
//     console.log("T")
//     console.log("E")
//     console.log("S")
//     console.log("H")
// }
// // sayName this is refernce of the function
// //sayName() this is mean call the function
// sayName()
//those putting the value with function like upper one (number1, number2) are called parameter and when call the function, giving wwith call is called argument 
// function addTwoNumber (number1, number2){
//     console.log(number1 + number2)
// }
function addTwoNumber (number1, number2){
    let result = number1 + number2
    return result //retuen value only store in another variable and cannot store console value in another variable 
}
const result = addTwoNumber(3,4)

// console.log("Result", result);
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage(""))
function calculateCartPrice(val1, val2,...num1){ // ... in function is konwn rest operator not spread operator
    return num1
}
// console.log(calculateCartPrice(200, 400, 400, 2000))

// ************************How to get the object in the function
const user = {
    username: "Hitesh",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
// handleObject({
//     username: "Sam",
//     price: 399
// })



// **************************************how to get array in function*******************************

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 500, 800, 1000]))


