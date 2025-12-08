// *Variables*

// Create a variable and console log the value
let bringIt = 5
console.log(bringIt)

// Create a variable, add 10 to it, and alert the value
let bringItAgain = 12
bringItAgain += 10
alert(bringItAgain)

// *Functions*

// Create a function that subtracts 4 numbers and alerts the difference
function subFourAndAlert(n1, n2, n3, n4){
    alert (n1-n2-n3-n4)
}
subFourAndAlert(14,2,3,5)

// Create a function that divides one number by another and returns the remainder
function divideAndReturn(n1,n2){
    return n1 % n2
}

// *Conditionals*

// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(zebra, unicorn){
    let sum = zebra + unicorn
    if(sum > 50){
        alert('Jumanji')
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeAlertZebra(n1, n2, n3){
    let sum = n1 * n2 * n3
    if (sum % 3 === 0){
        alert('Zebra')
    }
}

//*Loops*

//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordNumAndConsole (str, n1){
    for (i = 1; i <= n1; i++)
        console.log(str)
}