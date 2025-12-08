//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter (makeName, makeAttack, makeSpecial, makeTaunt){

    this.name = makeName
    this.attack = makeAttack
    this.special = makeSpecial
    this.taunt = makeTaunt

    this.specialMove = function (){
        console.log (`${this.name} hit you with their ${this.special}!`)
    }

    this.tauntedYou = function (){
        console.log (`${this.name} says ${this.taunt}!`)
    }

    this.attackedYou = function (){
        console.log (`${this.name} hit you with a ${this.attack}!`)
    }
}

const ryu = new StreetFighter ('Ryu', 'uppercut', 'HADOUKEN!', 'Should have seen it coming!')

const ken = new StreetFighter ('Ken', 'low kick', 'SHORYUKEN!', 'Child\'s play')

// let's have ryu fight ken and have the winner determined at random

function ryuVersusKen(){

    let result = Math.random()

    if(result < 0.5){
        console.log ('Ryu wins!')
    }
    else{
        console.log ('Ken wins!')
    }
}

ryuVersusKen()


function rockPaperScissors (){

    let random = Math.random()

    if(random < 0.33){
        return 'rock'
    }
    else if (random < 0.66){
        return 'paper'
    }
    else return 'scissors'
}

document.getElementById('rock').onclick = () => checkWin('rock')
document.getElementById('paper').onclick = () => checkWin('paper')
document.getElementById('scissors').onclick = () => checkWin('scissors')

function checkWin (playerChoice){

    let botChoice = rockPaperScissors()

    if ( (playerChoice === 'rock' && botChoice === 'scissors') || (playerChoice === 'paper' && botChoice === 'rock') || (playerChoice === 'scissors' && botChoice === 'paper') ){
        document.querySelector('#placeHere').innerText = ('You Win')
    } else if (playerChoice === botChoice){
        document.querySelector('#placeHere').innerText = ('You Tied')
    } else {
        document.querySelector('#placeHere').innerText = ('You Lose')
    }
}

// a tidier option

// function rockPaperScissors (){
//     const random = Math.random()

//     if (random < 0.33) return 'rock'
//     else if (random < 0.66) return 'paper'
//     else return 'scissors'
// }

// document.getElementById('rock').onclick = () => checkWin('rock')
// document.getElementById('paper').onclick = () => checkWin('paper')
// document.getElementById('scissors').onclick = () => checkWin('scissors')

// // WIN MAP: what each choice defeats
// const winMap = {
//     rock: 'scissors',
//     paper: 'rock',
//     scissors: 'paper'
// }

// function checkWin(playerChoice){
//     const botChoice = rockPaperScissors()

//     if (winMap[playerChoice] === botChoice) {
//         document.querySelector('#placeHere').innerText = 'You Win'
//     }
//     else if (playerChoice === botChoice) {
//         document.querySelector('#placeHere').innerText = 'You Tied'
//     }
//     else {
//         document.querySelector('#placeHere').innerText = 'You Lose'
//     }
// }
