//create some variables for the images 
const claire = document.querySelector('#claire')
const andi = document.querySelector('#andi')
const sharleen = document.querySelector('#sharleen')

//create some event listeners that wait for clicks on the names of the girls (h2)
document.querySelector('#andiNext').addEventListener('click', andiShow)
document.querySelector('#claireNext').addEventListener('click', claireShow)
document.querySelector('#sharleenNext').addEventListener('click', sharleenShow)

//create a function for each girl based on the above variable names (i.e. const andi). that hides the images for two, 
// and toggles on and off the selected girl's image
function andiShow(){
	andi.classList.toggle('hidden')
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
}

function claireShow(){
	andi.classList.add('hidden')
	claire.classList.toggle('hidden')
	sharleen.classList.add('hidden')
}

function sharleenShow(){
	andi.classList.add('hidden')
	claire.classList.add('hidden')
	sharleen.classList.toggle('hidden')
}