//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtractTwoNums(num1, num2){
    let difference = (num1 - num2)
    alert(difference)
}
subtractTwoNums(30, 20) 

//create a function that divides three numbers and console logs the quotient
function divideThreeAndLogQuotient(num1, num2, num3){
    console.log(num1 / num2 / num3)
}
divideThreeAndLogQuotient(9, 3, 3)

//create a function that multiplys three numbers and returns the product
function multiplyThreeAndReturn (num1, num2, num3){
    return num1 * num2 * num3
}
let returnedNum = multiplyThreeAndReturn(3, 5, 8)
console.log(returnedNum)

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function sumAndReturn(num1, num2, num3){
    return (num1 + num2) % num3
}
let returnedNumber = sumAndReturn(2, 4, 30)
console.log(returnedNumber)

//---Hard
// Create a function that takes in 4 numbers. 
// Multiply the first two numbers. 
// If the product is greater than 100 add the sum of the last two numbers and console log the value. 
// If the product is less that 100, subtract the difference of the last two numbers and console log the value. 
// If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function takeFourAndConquer (n1, n2, n3, n4){
    let multiplyTwo = (n1 * n2)
        if (multiplyTwo > 100){
        console.log("a", multiplyTwo + n1 + n2)
    }
    else if (multiplyTwo < 100){
        console.log("b", multiplyTwo - (Math.abs(n3 - n4)))
    }
    else if (product === 100){
        alert("c", (n1 * n2 * n3) % 4)
    }
}
takeFourAndConquer (1, 20, 3, 6)

//create function that takes 4 numbers and give name
//multiply the first 2 numbers  
//if product is greater than 100, add the sum of the last 2 numbers and console log the value
//if the product is less that 100, subtract the difference of the last two numbers and console log the value. 
//if the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

