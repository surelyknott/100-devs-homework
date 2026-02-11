//Create an espresso machine class that makes machines with 4 properties and 3 methods

class MakeEspressoMachine {
    constructor(make, model, colour, price){
        this.make = make
        this.model = model
        this.colour = colour
        this.price = price
    }
    turnOn(){
        console.log(`This machine has been switched on.`)
    }
    grind(){
        console.log(`Grinding dem beans...`)
    }
    milk(){
        console.log(`Frothin' that milk...`)
    }
    tamp(){
        alert(`Get tamping!`)
    }
} 

let ninja = new MakeEspressoMachine ('Ninja', 'LuxePresso', 'Silver and Black', 350)