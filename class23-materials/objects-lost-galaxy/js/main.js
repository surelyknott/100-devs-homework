//Create a dog object that has four properties and three methods

let dog = {}

dog.name = 'jasper'
dog.breed = 'german shepherd'
dog.colour = 'black'
dog.legs = 4

dog.bark = function(){
    console.log('WOOF!')
}
dog.jump = function(){
    console.log('blast offf')
}
dog.fetch = function(){
    console.log('ZZOOOOMMMM')
}

function DoggyStyle (dogBreed, dogName, dogColour, dogLegs){

    this.breed = dogBreed
    this.name = dogName
    this.colour = dogColour
    this.legs = dogLegs

}

let newDog = new DoggyStyle ('dalmatian', 'funko', 'black and white', 4)
