// *Variables*

// Declare a variable, reassign it to your favorite food, and alert the value
let favFood = "pasta"
favFood = "pizza"

alert(favFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let stringFun = 'crazy'
let secondChar = stringFun[1]
alert(secondChar)
//alert(stringFun.charAt(1)) shorter

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function takeThreeDivideTwoMultiplyLastAndAlert (n1, n2, n3){
    //let prod = (n1/n2)*n3
    alert((n1/n2)*n3)
}
takeThreeDivideTwoMultiplyLastAndAlert (9, 3, 6)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(n1){
    console.log(Math.cbrt(n1))
}
cubeRoot(27)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function summerMonthCheck(month){
    let monthLowerCase = month.toLowerCase()
    if(monthLowerCase === "june" || monthLowerCase === "july" || monthLowerCase === "august"){
        alert('YAY')
    }
    else {
        alert("Booo")
    }
}

// Call the function
summerMonthCheck("october")

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function logEveryNumSkipMultiplesOfFive(n1){
    for(i = 1; i < n1; i++){
        if(i % 5 !== 0){
        console.log(i)
        }
    }
}
logEveryNumSkipMultiplesOfFive(26)

//Array practice

arrPractice = [1, 'bob', 3, , 5]

arrPractice[1] = 'charlie'

console.log ( arrPractice )