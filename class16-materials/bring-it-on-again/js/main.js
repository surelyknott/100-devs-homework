// *Variables*
// Declare a variable, assign it a value, and alert the value
let age = 50
alert(age)

// Create a variable, divide it by 10, and console log the value
let year = 100
console.log(year / 10)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplyThreeTimesAndAlertProduct(n1,n2,n3){
    let product = n1 * n2 * n3 
    alert(product)
}
multiplyThreeTimesAndAlertProduct(3,5,6)

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function addSubtractConsoleLog(n1,n2,n3,n4){
    console.log((n1+n2)-n3-n4)
}
addSubtractConsoleLog(5,6,2,1)

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"

function addSubtractDivideConsoleLog(n1, n2, n3) {
    // Start with 100
    let result = 100 + n1 - n2 / n3;
    
    // If the result is greater than 25, log "WE HAVE A WINNNA"
    if (result > 25) {
        console.log("WE HAVE A WINNNA");
    }
}
// Example usage
addSubtractDivideConsoleLog(20, 2, 1);  // Logs: "WE HAVE A WINNNA" because (100 + 20 - 2 / 1) = 118

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

function dayOfWeek (day){
    // Convert the input day to lowercase to make it case-insensitive
    let normalizedDay = day.toLowerCase();

    if (normalizedDay === "saturday" || normalizedDay === "sunday"){
        alert("Weekend")
    }
    else alert("Week Day")
}
dayOfWeek("Monday")

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3

function countFromOneAddThree(n1){
    for(i = 1; i <= n1; i += 3)
    console.log(i)
}
countFromOneAddThree(50)