document.querySelector('#check').addEventListener('click', check);

function check() {

  const day = document.querySelector('#day').value.toLowerCase(); // Convert input to lowercase
  const placeToSee = document.querySelector ('#placeToSee'); // Get the h2 element

  //Conditionals go here

  if (day === "tuesday" || day === "thursday") {
    placeToSee.innerText = 'Class Day!';
    placeToSee.style.color = 'red'; // Dynamically change color to red
  } else if (day === "saturday" || day === "sunday") {
    placeToSee.innerText = 'Weekend!';
    placeToSee.style.color = 'purple'; // Change color to purple
  } else {
    placeToSee.innerText = 'Boooorrriiiinnggg!';
    placeToSee.style.color = 'green'; // Default color to green
  }
}



  

