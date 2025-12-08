//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase() //convert input to lowercase 
  const placeToSee = document.querySelector('#placeToSee') //grab the h2 document
  const leonAtLaptop = document.querySelector('#leonAtLaptop') //grab the image of Leon

  // Hide the image by default
  leonAtLaptop.classList.add('hidden');

  //conditionals

  if(day === "tuesday" || day === "thursday"){
    console.log("YOU HAVE CLASS")
    leonAtLaptop.classList.remove('hidden')
    placeToSee.innerText = 'Class Day!'
    placeToSee.style.color = 'red'

  }else if( day === "saturday" || day === "sunday"){
    console.log("Its The Weekend")
    placeToSee.innerText = 'Weekend!'
    placeToSee.style.color = 'blue'

  }else if( day === "wednesday" ){
    console.log("humpday")
    placeToSee.innerText = 'humpday!'
    placeToSee.style.color = 'purple'

  }else{
    console.log("BORING")
    placeToSee.innerText = 'Boring!'
    placeToSee.style.color = 'brown' //default colour to brown
  }

}
