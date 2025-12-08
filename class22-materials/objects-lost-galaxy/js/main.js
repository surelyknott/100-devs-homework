//Create a mouse object that has four properties and three methods

let mouse = {}

mouse.brand = 'logitech'
mouse.colour = 'green'
mouse.weight = '300g'
mouse.price = '£40'
mouse.wireless = true 

mouse.click = function (){
        console.log ('click')
}

mouse.scroll = function (){
        console.log ('scroll')
}

mouse.move = function (){
        console.log ('move')
}
   
// CAR FACTORY CONSTRUCTOR //  

function MakeCar(carMake, carModel, carDoors, carColour, transmission){

this.make = carMake
this.model = carModel
this.doors = carDoors
this.colour = carColour
this.transmission = transmission

this.lock = function (){
        alert (`Beep Beep! ${this.doors} doors locked!`)
}

console.log (`This car is a ${this.colour} ${this.make} ${this.model} with ${this.doors} doors in ${this.transmission} transmission.`)

}

let fordRanger = new MakeCar ('Ford', 'Ranger', 4, 'black', 'automatic')

fordRanger.lock()

let ferrariF50 = new MakeCar ('Ferrari', 'F50', 2, 'red', 'manual')

ferrariF50.lock()

// oops, forgot to add bluetooth!

// let's add it to the MakeCar constructor
MakeCar.prototype.bluetooth = true

// now the car has it because it checked the constructor 
console.log (fordRanger.bluetooth)








