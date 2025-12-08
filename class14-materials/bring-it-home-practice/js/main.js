// *Variables*
// Create a variable and console log the value
let year = 1999
console.log(year)
// Create a variable, add 10 to it, and alert the value
let num = 1
alert(num + 10)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourNumsAndAlert(n1, n2, n3, n4){
    alert(n1 - n2 - n3 - n4)
}
subFourNumsAndAlert(100, 20, 10, 5)
// Create a function that divides one number by another and returns the remainder
function divideAndReturnRemainder(n1, n2){
    alert (n1 / n2)
}
divideAndReturnRemainder(30, 10)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNumsAlertJumanji(n1, n2){
    if (n1 + n2 > 50)
    alert ("jumanji")
}
addTwoNumsAlertJumanji(20, 40)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeNumsAlertZebra(n1, n2, n3){
    let product = n1 * n2 * n3
    if (product % 3 === 0){
    alert ("ZEBRA")
    }
}
multiplyThreeNumsAlertZebra(30, 3, 10)