//object literals
const mySym = Symbol("key1")
const jsUser = {
    name: "hitesh",
    [mySym]: "mykey1",//this question put up in interview my print the symbol in object 
    age: 18,
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDay:["Monday", "Saturday"]
}
// console.log(jsUser[mySym])
// console.log(typeof jsUser[mySym])
// console.log(jsUser.email)
// console.log(jsUser["email"]);//this is good type to excess the String

jsUser.email = "hitesh@chatgpt.com"
// Object.freeze(jsUser)// freeze is use to block to update the any object key
// jsUser.email = "hitesh@microsoft.com"
// console.log(jsUser);
jsUser.greeting = function(){
    console.log("hello Js user");
}
jsUser.greetingTwo = function(){
    console.log(`hello Js user, ${this.name}`);
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
