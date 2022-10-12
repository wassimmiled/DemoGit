let space = ' '           // an empty space string
let firstName = 'Miled'
let lastName = 'Wassim'
let country = 'Tunisia'
let city = 'Tunis'
let language = 'JavaScript'
let job = 'teacher'
let quote = "     The saying,'Seeing is Believing' is not correct in 2022.      "
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2022.`
/**
 * String Concatenation
 */
const fullName= firstName + space + lastName
console.log(fullName)
/**
 * concat(): it takes many substrings and joins them.
 */

 console.log(country.concat("is the best")) 

/**
 * length: The string length method returns the number of characters in a string included empty space.
 */
console.log(fullName.length)
/**
 * toUpperCase(): this method changes the string to uppercase letters.
 */
console.log(fullName.toUpperCase())
/**
 * toLowerCase(): this method changes the string to lowercase letters.
 */
console.log(fullName.toLowerCase())
let string = "JavaScript"
let firstLetter = string[0]
console.log(firstLetter)  // J
/**
 * substr(): It takes two arguments, the starting index and number of characters to slice.
 */
console.log(string.substr(4,6)) 
/**
 * substring() : It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
 */
console.log(string.substring(0,4))
console.log(string.substring(4,10))
/**
 * trim(): Removes trailing space in the beginning or the end of a string.
 */
console.log(quote.trim(quote))
/**
 * includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.
 */
let includesExample="Zone4Code Javascript course"
console.log(includesExample.includes('course'))
console.log(includesExample.includes('Wassim'))
/**
 * startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
 */
console.log(includesExample.startsWith('Zone4Code'))//true
console.log(includesExample.startsWith('wassim'))//false
/**
 * endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).
 */
console.log(includesExample.endsWith('course'))//true
console.log(includesExample.endsWith('wassim'))//false
/**
 * indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
 */
let string1 = 'Zone4Code JavaScript'
console.log(string1.indexOf('D'))          // -1
console.log(string1.indexOf('Days'))       // -1
console.log(string1.indexOf('days'))       // -1
console.log(string1.indexOf('a'))          // 4
console.log(string1.indexOf('JavaScript')) // 10

//Changing Data Type (Casting)


//String to Int
let num1 = '10'
let numInt = parseInt(num1)
let numInt1 = Number(num1)
let numInt2 = +num1

//String to Float
let num2="9.66"
let numFloat=parseFloat(num2)

//Float to Int

let numIntparseInt = parseInt(num2)

console.log(numInt)
console.log(numInt1)
console.log(numInt2)


/**
 * Checking Data Types
 * To check the data type of a certain variable, we use the typeof operator.
 */

console.log(typeof(num1),typeof(numInt))
console.log(typeof(num1),typeof(numInt1))
console.log(typeof(num1),typeof(numInt2))
console.log(numFloat)

console.log(typeof(num2),typeof(numFloat))
console.log(numIntparseInt)

//A boolean data type represents one of the two values:true or false

let trueanswer=true
let falseanswer=false



let test
console.log(test)//not defined, because it is not assigned to a value yet


let empty = null
console.log(empty)// -> null , means no value












