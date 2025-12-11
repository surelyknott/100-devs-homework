//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
  let choice = document.querySelector('input').value

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choice}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.drinks)
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        // document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('#drink-img').src = data.drinks[0].strDrinkThumb

       let ingredientsList = '';
       let ingredientImages = '';

       for (let i = 1; i <= 15; i++) {
       let ing = data.drinks[0][`strIngredient${i}`];

       if (ing) {
           // Add the small image to the row
           ingredientImages += `
          <img class="ingredient-icon" 
               src="https://www.thecocktaildb.com/images/ingredients/${ing}-Small.png" 
               alt="${ing}">
           `;

           // Add the ingredient name to the list
           ingredientsList += `<li>${ing}</li>`;
       }
    }

    // Push into the DOM
    document.querySelector('.ingredient-images').innerHTML = ingredientImages;
    document.querySelector('.ingredients').innerHTML = ingredientsList;
    document.querySelector('.instructions').innerText = data.drinks[0].strInstructions
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// Make the cocktailDB API work with spaces between the names (i.e Dark and Stormy)

// Find three APIs and build three simple apps using those APIs (github public API list)