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

// Filter range "in place"
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. 
// The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.

function filterRangeInPlace(arrr, min, max){

// loop through each value to see whether it's between and inclusive or parameters a and b
    for (i = arrr.length - 1; i >= 0; i--) { //starting at the end of index as deleting from the front shifts index
        const value = arr[i];
        if (value < min || value > max) { 
            arrr.splice(i, 1); // i is already being looped, and deleting just 1 element
        }
    }
}

let arrr = [5, 3, 8, 1];
filterRangeInPlace(arrr, 1, 4);

// Sort in Decreasing Order

// let arr = [5, 2, 1, -10, 8];

function sortDecreasing(arr) {
    arr.sort( (a, b) => b - a );
}

// alert( arr ); // 8, 5, 2, 1, -10

// Copy and Sort Array 

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.

function copySorted (arr) {

let copySort = arr.slice().sort();

return copySort;

};

// or single line version

let shortCopy = (arr) => arr.slice().sort();

// .slice() to copy to new array
// .sort() to sort the new array

// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

// Create an Extendable Calculator 

// Create a constructor function Calculator that creates “extendable” calculator objects.
