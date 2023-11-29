// forEach loop

const coding = ["js", "ruby", "Java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val)
// })

// coding.forEach((item)=>{
//     console.log(item)
// })
// function printMe (item){
//     console.log(item);
// }
// coding.forEach(printMe)
// coding.forEach((item, index, array)=>{
//     console.log(item, index, array)
// })

const myCoding = [
    {
        languageName: "Javascript",
        laguageFile: "js",
    },
    {
        languageName: "Java",
        laguageFile: "java",
    },
    {
        languageName: "python",
        laguageFile: "py",
    },
]
myCoding.forEach((item)=>{
    console.log(item.laguageFile);
})