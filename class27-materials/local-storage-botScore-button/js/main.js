//Create a button that adds 1 to a botScore stored in localStorage 

if(!localStorage.getItem('botScore')){ // is there a botscore? no? let's set it
    localStorage.setItem('botScore', 0) // setting to zero
}

document.querySelector('button').addEventListener('click', addAnothaOne) // listening for event listener on button

function addAnothaOne(){
    let botScoreVal = Number(localStorage.getItem('botScore')) // declare variable, get botScore, make sure it's a number as it was stringy by default
    botScoreVal += 1 // add 1 to botScore on each button press
    localStorage.setItem('botScore', botScoreVal) // set value to new score
}

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });


