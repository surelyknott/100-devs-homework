//Create a conditonal that checks their age
let age = document.querySelector('input').value

//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If over 30, tell them there is nothing left to look forward too

if (age < 16){
    console.log ('You cannot drive!')
}
else if (age < 18){
    console.log ("You can\'t hate from outside the club, because they can\'t even get in")
}
else if (age < 21){
    console.log ('You cannot drink')
}
else if (age < 25){
    console.log ('You cannot rent cars affordably')
}
else if (age < 30){
    console.log ('You cannot rent fancy cars affordably')
}
else if (age < 30 && age > 30){
    console.log ('There is nothing left to look forward to')
}
else {
    console.log ('Ayooooo')
}

// --- Harder
// On click of the h1
// Take the value from the input
// Place the result of the conditional in the paragraph

document.querySelector('h1').addEventListener('click', ageCheck)

let p = document.querySelector ('p')

function ageCheck(){
    if (age < 16){
        p.innerText = 'You cannot drive!'
    }
    else if (age < 18){
        p.innerText = "You can\'t hate from outside the club, because they can\'t even get in"
    }
    else if (age < 21){
        p.innerText = 'You cannot drink'
    }
    else if (age < 25){
        p.innerText = 'You cannot rent cars affordably'
    }
    else if (age < 30){
        p.innerText = 'You cannot rent fancy cars affordably'
    }
    else if (age < 30 && age > 30){
        p.innerText = 'There is nothing left to look forward to'
    }
    else {
        p.innerText = 'Ayooooo'
    }
}

// Event listener for clicking on the h1
// document.querySelector('h1).addEventListener('click', run)

//     // Convert the input to a number
//     age = Number(age);

//     // Conditional logic based on age
//     let result;
//     if (age < 16) {
//         result = 'You cannot drive.';
//     } else if (age < 18) {
//         result = 'You can\'t hate from outside the club, because you can\'t even get in.';
//     } else if (age < 21) {
//         result = 'You can\'t drink.';
//     } else if (age < 25) {
//         result = 'You cannot rent cars affordably.';
//     } else if (age < 30) {
//         result = 'You cannot rent fancy cars affordably.';
//     } else if (age >= 30) {
//         result = 'There is nothing left to look forward to.';
//     }

//     // Place the result in the paragraph element
//     document.querySelector('#result').textContent = result;
// });

// Explanation:
// HTML:

// We have an <h1> that the user can click on.
// There is an <input> where the user will type their age.
// A <p> is used to display the result of the conditional.
// JavaScript:

// The event listener listens for a click on the <h1>.
// When clicked, it grabs the value from the input field.
// The input value is converted to a number and checked with the if-else conditions.
// The result of the conditional is placed in the <p> element.
// When you run this code, after clicking the <h1>, it will display the corresponding message based on the user's age in the <p> tag.