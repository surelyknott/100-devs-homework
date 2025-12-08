document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('red').onclick = partyRed
document.getElementById('arsenal').onclick = partyArsenal
document.getElementById('chelsea').onclick = partyChelsea
// document.getElementById('jackChair').onclick = partyJack


function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}

function partyRed () {
  document.querySelector('body').style.backgroundColor = 'rgba(224,41,20)'
  document.querySelector('body').style.color = 'white'
}

function partyArsenal () {
  document.querySelector('body').style.backgroundColor = 'rgba(224,41,20)'
  document.querySelector('body').style.color = 'white'
}

function partyChelsea () {
  document.querySelector('body').style.backgroundColor = 'rgba(10,20,137)'
  document.querySelector('body').style.color = 'white'
}

// function partyJack () {
//   // document.querySelector('body') change image to jack on chair
// }

