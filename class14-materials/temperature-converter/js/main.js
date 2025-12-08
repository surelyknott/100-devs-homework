//Write your pseudo code first! 

//grab the input value from the user
document.querySelector('#check').addEventListener('click', convert)

function convert(){
//need the value
    let enteredVal = Number(document.querySelector('input').value)
//convert the temperature from c to f
    let convertedTemp = enteredVal * 1.8 + 32 
//display the value underneath
    document.querySelector('h2').innerText = convertedTemp
}

