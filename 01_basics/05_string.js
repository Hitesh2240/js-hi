const name = "hitesh"
const repoCount = 50

//console.log(name + repoCount + "Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String ("Hitesh-hc-com")
// console.log(gameName[0])
// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toUpperCase())

console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0,4) // not use the negative value in substring 
const anotherString = gameName.slice(-8,4) // negative means value start of string from reverse 
console.log(newString)

const newTringOne = "   hitesh  "
console.log(newTringOne);
console.log(newTringOne.trim()) //trim basically use for removing unwanted space

const url = "https://hitesh.com/hitesh%20sharma"
console.log(url.replace("%20", "-")) // repace use to repalce some words to another words

console.log(url.includes("hitesh")) // includes are used to search any words those are present in strings

console.log(gameName.split("-")); // split is used to split the sting on bases of like space or another special character into another sting 

