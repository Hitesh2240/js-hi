const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userFullName:{
            firstName: "Hitesh",
            lastName: "Sharma"
        }
    }
}
// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
// const obj3 = {obj1, obj2}//this is not join th etwo object

// const obj3 = Object.assign({}, obj1, obj2) //this is the target  {}which means all objects is assign {} when we not use this {} which means all objects value is assign in object those write first 
const obj3 = {...obj1, ...obj2}
// console.log(obj3);
const user = [
    {
        id: 1,
        email:"h@gmail.com"
    },
    {
        id: 1,
        email:"hitesh@gmail.com"
    },
    {
        id: 1,
        email:"harsh@gmail.com"
    },
]
// console.log(user[1].email)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn')) //is used to search this key exist or not 
