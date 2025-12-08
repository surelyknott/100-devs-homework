//Arrays

//Create an array of numbers. Sum all of the numbers. Alert the sum.
let numsAndSums = [10, 20, 40]

// alert (numsAndSums.reduce(( acc, c ) =>  acc + c, 0 ))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

let newArr = numsAndSums => numsAndSums.map(x => x * x)

console.log(newArr(numsAndSums))

//Create a function that takes string
//Print the reverse of that string to the console

const stringReversed = word => console.log( word.split('').reverse().join('') )

stringReversed ('reversed')

//Create a function that takes in a string
//Alert if the string is a palindrome or not

const palindromeCheck = word => alert (word === word.split('').reverse().join(''))

palindromeCheck('hannah')