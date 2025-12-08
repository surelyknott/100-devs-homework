// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday = 'sicily'
holiday = holiday.toUpperCase()

console.log(holiday)

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let planet = 'earth'
alert (planet.substring(2))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subFromOneHundredAndAlert (n1, n2, n3, n4, n5){
    let product = 100 - n1 - n2 - n3 - n4 - n5

    alert (Math.abs(product))
}
subFromOneHundredAndAlert (2, 4, 20, 82, 4)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function lowAndHigh (n1, n2, n3){

    let min = Math.min(n1, n2, n3)
    let max = Math.max(n1, n2, n3)

    console.log (`The lowest num is ${min}, the highest num is ${max}.`)

}
lowAndHigh (23, 56, 87)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails(){

    let result = Math.random()

    if (result < 0.5)
        return 'heads'
    else {
        return 'tails'
    }
}
// console.log(headsOrTails())

// const headsOrTails = _ => Math.random() < .0.5 ? 'heads' : 'tails'
// _ is used when you're not passing in anything. You don't need 'return' as it's an implicit return, so it's doing it for you.

//*Loops*
//Create a function that takes in a number. 
//Console log the result of heads or tails using the previous function x times 
//where x is the number passed into the function. 
//Call the function.

function headsOrTailsAgain(n){

    for (let i = 1; i <= n; i++){

    let result = headsOrTails()

    console.log(result)
    }
}

headsOrTailsAgain (10)