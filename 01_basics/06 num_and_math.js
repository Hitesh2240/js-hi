// const score = 100
// console.log(score)
// const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // to fixed is used for get the digit after the decimal 

// const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));// toPrecision is used for 

// const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN'));


//******************************************************************************* 

// console.log(Math)

// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2)); // ceil means choose the top value in round of like example 4.2~ is 5
// console.log(Math.floor(4.9)); // floor means choose the lower value in round of like example 4.9~ is 4

// console.log(Math.min(4,5,6,2));
// console.log(Math.max(12,13,23,44,15));

// console.log(Math.random());// math random value always lies between 0 to 1
// console.log((Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min + 1))+min)
