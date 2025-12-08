//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ['breaking bad', 'brooklynninenine', 'south park']
tvShows.forEach(show => console.log (show))

//Create and array of numbers
let randomNums = [2, 4, 6, 7]

//Return a new array of numbers that includes every even number from the previous Arrays
let onlyEvens = arr => arr.filter(n => n % 2 === 0)

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function sumLowAndHigh (arr){
    let sorted = arr.sort((a, b) => a - b)
    alert (sorted[1] + sorted[sorted.length - 2])
}
sumLowAndHigh ([2, 4, 1, 5, 3])