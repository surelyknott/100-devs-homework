// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let str = "is this the best week ever?"

// alert (str.endsWith('?'))

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
const string = 'hey, i\'m jack and i\'m a jr. dev'

console.log(string.replaceAll('jr. dev', 'software engineer'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors (){

    let random = Math.random()

    if (random < 0.33){
        return 'rock'
    }
    else if(random < 0.66){
        return 'paper'
    }
    else {
        return 'scissors'
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(playerChoice){

    let botChoice = rockPaperScissors ()

    if (playerChoice === 'rock' && botChoice === 'scissors' || playerChoice === 'paper' && botChoice === 'rock' || playerChoice === 'scissors' && botChoice === 'paper'){
        console.log ('You win!')
    }
    else if (playerChoice === botChoice){
        console.log ('You tied!')
    }
    else {
        console.log ('You lost!')
    }
    
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function gameChoicesXTimes (arr){
    arr.forEach( choice => {
        checkWin (choice)
    });
}

gameChoicesXTimes (['rock', 'paper', 'paper', 'scissors'])