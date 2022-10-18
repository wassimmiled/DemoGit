/** 
 * Callback
 */

// a callback function, the name of the function could be any name
const callback = (n) => {
    return n ** 2
}

// function that takes other function as a callback
function cube(callback, n) {
    return callback(n) * n
}

console.log(cube(callback, 3))




/**
 * Setting time
 */

//Setting a time using a setTimeout

// syntax
// function callback() {
//     // code goes here
// }
// setInterval(callback, duration)
//runs the code repeatedly with lenght of the timeout between each repeat
function sayHello1() {
    console.log('Hello1')
}
setInterval(sayHello1, 1000)

//Setting a time using a setTimeout

// // syntax
// function callback2() {
//     // code goes here
// }
// setTimeout(callback, duration) // duration in milliseconds
//runs the code once after the timeout
function sayHello() {
    console.log('Hello')
}
setTimeout(sayHello, 1000) // it prints hello after it waits for 1 seconds.

