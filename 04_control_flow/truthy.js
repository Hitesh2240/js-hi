const userEmail = []

// if(userEmail){
//     console.log("Got user email")
// } else{
//     console.log("Don't have user email")
// }

//falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value

// true, "0", "false", " ", [], {}, function(){}, 

if (userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("this is empty object")
    
}
else{
    console.log("This is not empty object")
}

// Nullish Coalescing Operator (??): null defined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = null ?? 10 ?? 20


// Ternary operation 

// condition ? true: false
const iceTeaPrice= 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")




console.log(val1)