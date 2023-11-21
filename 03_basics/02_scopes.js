function one(){
    const userName = "Hitesh"
    function two(){
        const websites = "Youtube"
        console.log(userName)
    }
    // console.log(websites) this is not run Because this is comes in nested function 
    two()
}
one()

// **********************Intresting**********

function addOne(num){
    return num + 1
}
addOne(5)


const addTwo = function(num){ // also called the expression
    return num +2
}
addTwo(2)
