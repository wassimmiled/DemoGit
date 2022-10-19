/**
 * Functional Programming
 */

//forEach
/**
 * forEach: Iterate an array elements. We use forEach only with arrays.
 * It takes a callback function with elements, index parameter and array itself.
 *  The index and the array optional.
 */


//syntax
// arr.forEach(function (element, index, arr) {
//     console.log(index, element, arr)
// })
// // The above code can be written using arrow function
// arr.forEach((element, index, arr) => {
//     console.log(index, element, arr)
// })
// // The above code can be written using arrow function and explicit return
// arr.forEach((element, index, arr) => console.log(index, element, arr))

//exemple 2
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log('num', num * num))
console.log('sum', sum)

//exemple 3

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))


//map
/**
 * map: Iterate an array elements and modify the array elements.
 * It takes a callback function with elements, index , array parameter and return a new array.
 */
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log("namesToUpperCase", namesToUpperCase)

//filter
/**
* Filter: Filter out items which full fill filtering conditions and return a new array.
*/

const countriesContainingLand = countries.filter((country) =>
    country.includes('land')
)
console.log("countriesContainingLand", countriesContainingLand)

//every

/**
 * every: Check if all the elements are similar in one aspect. It returns boolean
 */
const names1 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names1.every((name) => typeof name === 'string') // Are all strings?

console.log("areAllStr", areAllStr)

//find
/**
 * find: Return the first element which satisfies the condition
 */
//exemple1
const ages = [24, 22, 17, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log("age", age)

//exemple2
const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
]

const score = scores.find((user) => user.score > 80)
console.log(score)

//findIndex
/**
 * findIndex: Return the position of the first element which satisfies the condition
 */
const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages2 = [24, 22, 25, 32, 35, 18]

const result = names2.findIndex((name) => name.length > 7)
console.log(result) // 0

const age3 = ages2.findIndex((age) => age < 20)
console.log("age findIndex", age) // 5

//some
/**
 * some: Check if some of the elements are similar in one aspect. It returns boolean
 */
const names3 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const bools3 = [true, true, true, true]

const areSomeTrue3 = bools3.some((b) => b === true)

console.log(areSomeTrue3) //true
const areAllStr3 = names3.some((name) => typeof name === 'number') // Are all strings ?
console.log(areAllStr3) // false


//Sorting string values
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted


//Sorting Numeric values
const numbers4 = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers4.sort()) //[100, 3.14, 37, 9.81]
numbers.sort(function (a, b) {
    return a - b
})

console.log(numbers) // [3.14, 9.81, 37, 100]

numbers.sort(function (a, b) {
    return b - a
})
console.log(numbers) //[100, 37, 9.81, 3.14]



const products1 = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
var msgTotal = products1.reduce(function (prev, cur) {
    return prev + (cur.price !== ' ' && cur.price);
}, 0);
console.log('Total sum products:', (msgTotal));





const countries1= [
    {
        name: 'Afghanistan',
        capital: 'Kabul',
        languages: ['Pashto', 'Uzbek', 'Turkmen'],
        population: 27657145,
        flag: 'https://restcountries.eu/data/afg.svg',
        currency: 'Afghan afghani'
    },
    {
        name: 'Åland Islands',
        capital: 'Mariehamn',
        languages: ['Swedish'],
        population: 28875,
        flag: 'https://restcountries.eu/data/ala.svg',
        currency: 'Euro'
    },
    {
        name: 'Albania',
        capital: 'Tirana',
        languages: ['Albanian'],
        population: 2886026,
        flag: 'https://restcountries.eu/data/alb.svg',
        currency: 'Albanian lek'
    }]
function categorizeCountries(keyword) {

    
        console.log(countries1.filter((country) => country.name.includes(keyword)))
    
}
categorizeCountries('land')
categorizeCountries('en')
categorizeCountries('ia')