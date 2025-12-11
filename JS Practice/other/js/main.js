////////////////////
// THE WHILE LOOP //
////////////////////

// let number = 1;
// while (number <= 5) {
//     console.log (number)
//     number++;
//}

//////////////////
// THE FOR LOOP //
//////////////////

// let number;
// for (number = 1; number <= 5; number++) {
//   console.log(number);
// }

// let letter = "";
// while (letter !== "X") {
//   letter = prompt("Type a letter or X to exit:");
// }

// let footballClub = "";
// while (footballClub !== "Arsenal") {
//     footballClub = prompt("Type another football club or Arsenal to exit:");
// }

// let letter = "";
// while (letter !== "X") {
//     console.log(letter)
//   letter = prompt("Type a letter or X to exit:");
// }

// // While loop
// while (condition) {
//     // Code to run while the condition is true
//   }
  
//   // For loop
//   for (initialization; condition; final expression) {
//     // code to run while the condition is true
//   }

// The variable associated with the loop condition is called the loop counter and often named i.

// Beware! The condition of a while loop must eventually become false, to avoid the risk of an infinite loop. Also, updating the counter of a for loop inside its body is a bad idea.

// All loops can be written with while, but if you know in advance how many times you want the loop to run, for is the best choice.

///////////////////////////
// CAROUSEL PRIMARY TASK //
///////////////////////////

// let spin = 1;
//     while (spin <= 10) {
//     console.log (spin)
//     spin++;
//     }

// let spin = 1;
// while (spin <= 20) {
//     spin = prompt ("How many turns of the Carousel? max 20");
//     console.log (spin);
// }

// console prints each spin up to user amount 

// let spin;
// let maxTurns = 20;

// do {
//     spin = parseInt(prompt("How many turns of the Carousel? (max 20)"), 10);
// } while (isNaN(spin) || spin < 1 || spin > maxTurns);

// for (let i = 1; i <= spin; i++) {
//     console.log(`Spin: ${i}`);
// }

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//       console.log(`${i} is even`);
//     }
//     else {
//       console.log(`${i} is odd`);
//     }
//   }

// let i = 100;
// while (i >= 100) {
//   i = parseInt(prompt("write a number less than 100"), 10);
//   console.log(i);
// }

// let i;

// do {
//   i = parseInt(prompt("Enter a number between 50 and 100:"), 10);
//   if (isNaN(i) || i < 50 || i > 100) {
//     alert("Invalid input. Please try again.");
//   }
// } while (isNaN(i) || i < 50 || i > 100);

// alert(`You entered a valid number: ${i}`);


// let number = 1;
// while (number <= 5) {
//     console.log(number);
//     console.log(`number has been increased to ${number}`); //backticks inside a string they have extended functionality
//     number++;
// }

// let number = 1;
// while (number <= 5) {
//     console.log(number);
//     console.log(`number has been increased to ${number}`); //backticks inside a string they have extended functionality
//     number++;
// }
// check the "The loop body must be placed within curly braces, except if it's only one statement. For now, always use curly braces for your loops."

// let number;
// for (number = 1; number <= 5; number++) {
//   console.log(number);
// }

// This does the same, but faster!

// for (let i = 1; i <= 5; i++) {
//     console.log(i); // OK
//   }
//   console.log(i); // Error: the i variable is not visible here

///////////////////
// CAROUSEL TASK //
///////////////////

// We need to declare a variable which is turns
// We need to set the condition for ending the loop
// The condition is 10 turns
// We need to show the turn number in the console log each time

// let turns = 1;
//     while (turns<=10) {
//         console.log(turns);
//         turns++;
//     }

// for (let turns=1; turns<=10; turns++) {
//     console.log(turns)
// }

// Prompt the user for the number of turns
// Store the number of turns in a variable
// Print to the console

// let turns = "";
// console.log(turns)
// turns = prompt("Type a number of turns");
// for (let i=1; i<=turns; i++) {
//     console.log(i)
// }

// let turns = prompt("Enter the number of turns, must be 10 or below")

// let turns = prompt("Enter the number of turns, must be 10 or below");
// while (turns > 10) {
//   alert("That's over 10, try again")
// }

// let turns = prompt("Enter the number of turns, must be 10 or below");

// if(turns % 2 === 0) {
//     console.log(`${turns} is even`);
//   }
// else {
//       console.log (`${turns} is odd`);
//   }
//   turns++;
// }

/////////////////
// PARITY TASK //
/////////////////

// let i = prompt("Enter a number less than or equal to 10");

// // Ensure the user enters a number less than or equal to 10
// while (i > 10){
//     i = prompt("Incorrect. Please enter a number less than or equal to 10 ");
// }

// // Loop through numbers from the user's input to 10
// for (; i <=10; i++) {
// if(i % 2 === 0) {
//     console.log(`${i} is even`);
//   }
// else {
//     console.log (`${i} is odd`);
//   }
// }


  //prompt user for number
  //check if it's valid or meets condition
  //return an alert that states incorrect

  //prompt user again for number
  //if value is correct
  //print to console remainder bits

// "Input validation" task

//Prompt the user for a number (less than or equal to 100)
//Show incorrect number alert if wrong, and prompt again
//Show in console log (extra)

// Prompt user and have user make assignment for variable 'i'
// let i = prompt("Enter a number less than or equal to 100");
// console.log(i);

// // Ensure the user enters a number less than or equal to 10
// while (i > 100){
//     i = prompt("Incorrect. Please enter a number less than or equal to 100");
// }

// // Show the user number in the console log when it's under 100
// if (i < 100){
//     console.log(i);
// } 

//Now have the terminating number between 50 and 100
// let i = prompt("Enter a number more than 50 but less than 100");
// console.log(i);

// while (i>99 || i<51){
//     i = prompt("Incorrect, please submit a number that's more than 50 but less than 100")
// }

// if (i< 99 || i>51){
//     console.log(i);
// }

///////////////////////////////
// MULTIPLICATION TABLE TASK //
///////////////////////////////

//Prompt user for a number (max 10 times multiplying)
//Show multiplication table for the number in console

// let number = parseInt(prompt("Enter a number"));

// for (i=1; i<=10; i++) {
//     console.log(`${number} * ${i} = ${number * i}`);
// }

//An advanced version that will alert the user if they enter a string rather than a number

// let userInput;

// while (true) {
//     userInput = prompt("Enter a number:");

//     // Check if the input is a valid number
//     if (!isNaN(userInput) && userInput.trim() !== "") {
//         let num = Number(userInput);  // Convert the input to a number
//         // Show the multiplication table for the valid number
//         for (let i = 1; i <= 10; i++) {
//             console.log(`${num} * ${i} = ${num * i}`);
//         }
//         break;  // Exit the loop once a valid number is entered
//     } else {
//         alert("Please enter a valid number.");
//     }
// }

// "Neither Yes nor No" task

// Prompt the user to enter "yes" or "no"

// let answer = prompt("Say yes or no");
// console.log(answer);

// while (answer !== "yes" && answer !== "Yes" && answer !== "No" && answer !== "no") {
//    answer = prompt("Say 'yes' or 'no' to exit");
//     }

////////////////////
// FIZZ BUZZ TASK //
////////////////////

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("fizzbuzz");
//     }
//     else if (i % 3 === 0) {
//         console.log("fizz");
//     }
//     else if (i % 5 === 0) {
//         console.log("buzz");
//     }
//     else {
//         console.log(i);
//     }
// }

// const userFullName = prompt ("What is your first and last name?");
// alert (`Hello, ${userFullName}`)

//Vat calc
// function vatCalc(rawPrice) {
//     let vat = rawPrice / 100 * 20.6;
//     let totalPrice = rawPrice + vat;
//     console.log (totalPrice);
// }

// vatCalc (100)

////////////////////////
// FOLLOWING DAY TASK //
////////////////////////

// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.
// let day = prompt('Enter a day').toLowerCase();

// if (day === "monday"){
//   alert("Tuesday")
// }
// else if (day === "tuesday"){
//   alert ("Wednesday")
// }
// else if (day === "wednesday"){
//   alert ("Thursday")
// }
// else if (day === "thursday"){
//   alert ("Friday")
// }
// else {
//   alert ("byeeee")
// }

////////////////////////////
// NUMBER COMPARISON TASK //
////////////////////////////

// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
// function compareNumbers(n1, n2) {
//   if (typeof n1 !== 'number' || typeof n2 !== 'number') {
//       console.log("Error: Both inputs must be numbers.");
//       return;
//   }

//   if (n1 > n2) {
//       console.log(`${n1} is greater than ${n2}`);
//   } else if (n1 < n2) {
//       console.log(`${n1} is smaller than ${n2}`);
//   } else {
//       console.log(`${n1} is equal to ${n2}`);
//   }
// }

// // Test cases
// compareNumbers(3, 6);  // Output: 3 is smaller than 6

// function compareNumbers(n1, n2) {
//   if (isNaN(n1) || isNaN(n2)) {
//       return "Error: Please enter valid numbers.";
//   }

//   if (n1 > n2) {
//       return `${n1} is greater than ${n2}`;
//   } else if (n1 < n2) {
//       return `${n1} is smaller than ${n2}`;
//   } else {
//       return `${n1} is equal to ${n2}`;
//   }
// }

// // Get user input
// let input1 = prompt("Enter the first number:");
// let input2 = prompt("Enter the second number:");

// // Convert input strings to numbers
// let num1 = Number(input1);
// let num2 = Number(input2);

// // Get the result and show it in an alert
// let result = compareNumbers(num1, num2);
// alert(result);

// let nb1 = Number(prompt("Enter nb1:"));
// let nb2 = Number(prompt("Enter nb2:"));
// let nb3 = Number(prompt("Enter nb3:"));

// if (nb1 > nb2) {
//   nb1 = nb3 * 2;
// } else {
//   nb1++;
//   if (nb2 > nb3) {
//     nb1 += nb3 * 3;
//   } else {
//     nb1 = 0;
//     nb3 = nb3 * 2 + nb2;
//   }
// }
// console.log(nb1, nb2, nb3);

////////////////////////
// DAYS IN MONTH TASK //
////////////////////////

// Number of days in a month
// Write a program that accepts a month number (between 1 and 12)
// then shows the number of days of that month. Leap years are excluded. 
// Incorrect inputs must be taken into account.


  // Select the <h2> element
// const placeToSee = document.querySelector('h2');

// let checkMonth;

// // Keep prompting until user enters a valid month
// while (true) {
//     checkMonth = prompt("Pick a month (e.g., January, February)").toLowerCase().trim();

//     // If user cancels, stop asking
//     if (checkMonth === null) {
//         placeToSee.innerText = "You canceled the input.";
//         break;
//     }

//     // Check if input is valid
//     if (["january", "march", "may", "july", "august", "october", "december"].includes(checkMonth)) {
//         placeToSee.innerText = `${checkMonth} has 31 days.`;
//         break;
//     } 
//     else if (["april", "june", "september", "november"].includes(checkMonth)) {
//         placeToSee.innerText = `${checkMonth} has 30 days.`;
//         break;
//     } 
//     else if (checkMonth === "february") {
//         placeToSee.innerText = "February has 28 or 29 days (Leap Year).";
//         break;
//     } 
//     else {
//         alert("Invalid input! Please enter a valid month.");
//     }
// }


///////////////////////////
// FOLLOWING SECOND TASK //
///////////////////////////

// Write a program that asks for a time under the form of three information (hours, minutes, seconds). 

// function oneSecondAfter (hours, minutes, seconds){

//     // Validate inputs
//     if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
//         return "Invalid time.";
//     }

//     // Increment the time by one second
//     seconds++;

//     // Handle seconds overflow 
//     if (seconds > 59) {
//         seconds = 0;
//         minutes++;
//     }

//     // Handle minutes overflow
//     if (minutes > 59) {
//         minutes = 0;
//         hours++;
//     }

//     // Handle hours overflow
//     if (hours > 23) {
//         hours = 0;
//     }

//     // Return the new time
//     return `${hours}h${minutes}m${seconds}s`;
// }

// // Test cases

// // Ask the user for input
// let hours = parseInt(prompt("Enter hours (0-23):"));
// let minutes = parseInt(prompt("Enter minutes (0-59):"));
// let seconds = parseInt(prompt("Enter seconds (0-59):"));

// // Call the function and display the result
// alert(oneSecondAfter(hours, minutes, seconds));
// console.log(oneSecondAfter(hours, minutes, seconds));

// Explanation:

// The oneSecondAfter function takes three parameters: hours, minutes, and seconds.
// It first validates the inputs to ensure they are within the correct range.
// It increments the seconds by one.
// It handles the overflow of seconds, minutes, and hours.
// It returns the new time in a formatted string.
// This should resolve the syntax errors and provide the correct functionality.

/////////////////////////
// IMPROVED HELLO TASK //
/////////////////////////

// Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.

// Say hello to the user
// function sayHello(firstName, lastName) {
//     const message = `Hello, ${firstName} ${lastName}!`;
//     return message;
//   }
  
// // TODO: ask user for first and last name and then call sayHello()

// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// alert(sayHello(firstName, lastName));

//////////////////////////
// NUMBER SQUARING TASK //
//////////////////////////

// Complete the following program so that the square1() and square2() functions work properly.

// Square the given number x
// function square1(x) {
//     return x**2;
//   }
  
//   // Square the given number x
//   const square2 = x => x**2;
  
//   console.log(square1(0)); // Must show 0
//   console.log(square1(2)); // Must show 4
//   console.log(square1(5)); // Must show 25
  
//   console.log(square2(0)); // Must show 0
//   console.log(square2(2)); // Must show 4
//   console.log(square2(5)); // Must show 25

// for (let i = 0; i <= 10; i++) {
//     console.log(`The square of ${i} is ${i ** 2}`);
// }
//////////////////////////
// MIN OF TWO NUMS TASK //
//////////////////////////

// Let's pretend the JavaScript Math.min() function doesn’t exist. Complete the following program so that the min() function returns the minimum of its two received numbers.

// const min = (a, b) => (a < b ? a : b);

// function min (a, b) {
//     return a < b ? a : b;
// }

// console.log(min(4.5, 5)); // Must show 4.5
// console.log(min(19, 9));  // Must show 9
// console.log(min(1, 1));   // Must show 1

/////////////////////
// CALCULATOR TASK //
/////////////////////

// Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.

// const calculate = (a, operator, b) => {
//     switch (operator) {
//       case "+":
//         return a + b;
//       case "-":
//         return a - b;
//       case "*":
//         return a * b;
//       case "/":
//         return b === 0 ? "Cannot divide by zero" : a / b;
//       default:
//         return "Invalid operator";
//     }
//   }

// function calculate(a, operator, b) {
//     if (operator === "+") {
//       return a + b;
//     }
//     if (operator === "-") {
//       return a - b;
//     }
//     if (operator === "*") {
//       return a * b;
//     }
//     if (operator === "/" && b !== 0) {
//       return a / b;
//     }
//   }

// console.log(calculate(4, "+", 6));  // Must show 10
// console.log(calculate(4, "-", 6));  // Must show -2
// console.log(calculate(2, "*", 0));  // Must show 0
// console.log(calculate(12, "/", 0)); // Must show Infinity

/////////////////////////////////////////////
// CIRCUMFERENCE AND AREA OF A CIRCLE TASK //
/////////////////////////////////////////////   

// function circumference (radius){
//     return 2 * Math.PI * radius;
// }
// function area (radius){
//     return Math.PI * radius ** 2;
// }

// let radius = prompt('What is the length of the radius?');
// console.log(circumference(radius));
// console.log(area(radius));

///////////////////////////
// MIXED DATA TYPES TASK //
///////////////////////////

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// // create a function that takes in an array
// function sumOfArray(convertNums){

// // return the value
// return convertNums.reduce((accumulate,c) => accumulate + +c, 0); //use the unary plus (+) operator before adding the current value or Number()
// } // use .reduce to get the sum of all of the elements in the array

// console.log(sumOfArray([2, 4, '8', 3])); // Call the function, should get 17


// // Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// let dailyAction = arr => {
//   console.log (arr.reduce((sum, num) => sum + Number(num), 0));
// }

// dailyAction ([1, 2, '6'])

// // same again with a for loop
// function sumOfArrayAgain(nums) {
//   let sum = 0; // Initialize sum
//   for (let i = 0; i < nums.length; i++) {
//       sum += Number(nums[i]); // Convert each element to a number and add to sum
//   }
//   return sum;
// }

// console.log(sumOfArrayAgain([2, 4, '8', 3])); // Output: 17

//////////////////////////////////////
// ADDING CHARACTER EXPERIENCE TASK //
//////////////////////////////////////

const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25,
  xp: 0,

  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength} strength and ${this.xp} XP points.`
  }
}

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());

//////////////////////////
// MODELLING A DOG TASK //
//////////////////////////

// const dog = {
//   name: "Fang",
//   species: "arsehole",
//   size: "75 inches",

//   bark(){
//     return "Grrr!"
//   }
// }

// console.log(`${dog.name} is an ${dog.species} dog measuring ${dog.size}`);
// console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

/////////////////////////////
// MODELLING A CIRCLE TASK //
/////////////////////////////

// const r = Number(prompt("Enter the circle radius:"));

// const circle = {

//   circumference (){
//     return 2 * Math.PI * r
//   },
//   area (){
//     return Math.PI * r ** 2
//   }
  
// }

// console.log(`Its circumference is ${circle.circumference()}`);
// console.log(`Its area is ${circle.area()}`);

//////////////////////////////
// MODELLING A BANK ACCOUNT //
//////////////////////////////
// Modeling a bank account
// Write a program that creates an account object with the following characteristics:

// A name property set to "Alex".
// A balance property set to 0.
// A credit method adding the (positive or negative) value passed as an argument to the account balance.
// A describe method returning the account description.
// Use this object to show its description, crediting 250, debiting 80, then show its description again.

const bank = {
  name: "Alex",
  balance: 0,
  
  credit(amount) {
    this.balance += amount;
  },
  
  describe() {
    return `Owner: ${this.name}, Balance: ${this.balance}`;
  }
};

console.log(bank.describe());
bank.credit(250);
bank.credit(-80);
console.log(bank.describe());