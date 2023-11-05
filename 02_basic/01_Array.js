// array
const myArr = [0,1,2,55,4,5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,1,2,3,4,5)
// console.log(myArr[1])

//Array method 

// myArr.push(6)
// console.log(myArr)
// myArr.pop()
// myArr.unshift(9)
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(55)); //giving the index number of number which you type

// const newArr = myArr.join() //join convert the array in string
// console.log(newArr)
// console.log(myArr);


// slice, Splice

console.log("A", myArr)

const myn1 = myArr.slice(1,3) // in slice they do not change the value of existing array 

console.log(myn1);
console.log("B", myArr)

const myn2 = myArr.splice(1, 3)// in splice they also change the value of existing array 
console.log(myn2);
console.log("C", myArr)