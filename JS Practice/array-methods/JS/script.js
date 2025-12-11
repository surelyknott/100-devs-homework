// Translate border-left-width to borderLeftWidth
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased.

function camelize(str){
    return str
    .split('-')
    .map((word, index) => index == [0] ? word : word[0].toUpperCase() + word.slice(1))
    .join('')
}

// Filter range.
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.

function filterRange(arr, a, b){
    return arr.filter(item => (a >= item && item <= b))
}

let arr = [5, 3, 8, 1]
let filtered = filterRange(arr, 1, 4)
alert (filtered) // 3, 1
