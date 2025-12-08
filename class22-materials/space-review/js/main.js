//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [6, 7, 3, 5];

let sum = 0;

for (let i = 0; i < nums.length; i++) {
    sum += nums [i];
}

alert (sum)

let newArr = [23, 34, 77, 99, 324];
    const sumOfAll = newArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(sumOfAll); 

//Create a function that takes in an array of numbers
function firstNums(arr) {
    // Return a new array of numbers that is every original number squared
    const numsSquared = arr.map(num => Math.pow(num, 2));
    return numsSquared;
}
console.log(firstNums([8, 2, 4, 6, 9]));

//Create a function that takes string
function string(str) {
//Print the reverse of that string to the console
    const reverseString = str.split("").reverse().join(""); //https://medium.com/sonyamoisset/reverse-a-string-in-javascript-a18027b8e91c
    console.log(reverseString);
}
string("hello");

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(str) {
    const reverseString = str.split("").reverse().join("");
    if (str === reverseString) {
        alert("This is a palindrome");
    } else {
        alert("This is not a palindrome");
    }
}
palindrome("racecar");
