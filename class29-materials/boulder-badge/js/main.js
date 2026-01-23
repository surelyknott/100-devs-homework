// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. 
//You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7. 
let bulbaLevel = 5
let caterpieLevel = 1
let weedLevel = 1

//Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). 
let bulbCandy = 11
let caterCandy = 6
let weedCandy = 6

//Finally, create a fourth variable named totalCandies that sums all the rare candies you would need. 
let totalCandy = bulbCandy + caterCandy + weedCandy
console.log(totalCandy)

//Conditionals And Functions
//You have a charmander in your party. 
//Charmander can only battle if the temperature is above 0 degrees celcius. 
//Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle
function tempConversion(temperature){
    let convertedTemp = (temperature - 32) / 1.8
    return convertedTemp
}

function canCharmanderBattle(currentTemp){
    let converted = tempConversion(currentTemp)

    if(converted > 0){
    console.log('Charmander can battle!');
    }
    else{
        console.log('Charmander cannot battle.')
    }
}

canCharmanderBattle(33)

//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party
function pokeLeague (partySize){
    for(let i = 1; i <= partySize; i++){
        console.log('Pikachu, I choose you!')
    }
}
pokeLeague(8)



