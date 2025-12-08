//Write your pseduo code first! 
// add an event listener which waits for a click on the convert button
document.querySelector('#tellMe').addEventListener('click', convert)

function convert(){
    //Find value of celcius
    let temp = document.querySelector('#celcius').value
    //Convert celcius to farhenheit
    temp = (temp * 1.8) + 32
    //Round up to whole integer
    temp = Math.floor(temp)
    //Give answer
    document.querySelector('#placeToPutResult').innerText = temp
}