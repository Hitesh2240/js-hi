const user = {
    username: "Hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to websites`);
        console.log(this);// console the (this) in obect (function) it is run but in normal function it is not run 
    }
    
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     console.log(this)
// }
// chai()

//*****************method to write the function in different ways */
// const addTwo = (num1, num2)=>{
//     return num1 + num2
// }
// console.log(addTwo(2,3))
// const addTwo = (num1, num2)=> num1 + num2 //this is also the mehtod to write the code of one line 
// const addTwo = (num1, num2)=> (num1 + num2)
//*************way to write the object in the arrow function 
const addTwo = (num1, num2)=>({username: "Hitesh"})
console.log(addTwo(2,3))