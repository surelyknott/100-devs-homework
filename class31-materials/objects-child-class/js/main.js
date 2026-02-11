//Create an a class and extend it - Can be anything you would like it to be! 
class Animal{
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} makes a sound!`)
    }
}
class Dog extends Animal{
    constructor(name, breed){
        super(name)
        this.breed = breed
    }
}
class Chicken extends Animal{
    constructor(name, gender){
        super(name)
        this.gender = gender
    }
}
const clucker = new Chicken('Barry', 'male');


class ArsenalPlayer{
    constructor(name, age, position){
        this._name = name
        this.age = age
        this.position = position
    }
    get name(){
        return this._name
    }
    goal(){
        console.log(`${this.name} scores a screamer!`)
    }
}
class ArsenalNewSigning extends ArsenalPlayer{
    constructor(name, age, position, formerClub, value, contractLength){
        super(name, age, position)
        this.formerClub = formerClub
        this.value = value
        this.contractLength = contractLength
    }
    announcement(){
        console.log(`${this.name} signs on a ${this.contractLength} contract from ${this.formerClub} for ${this.value} million pounds!`)
    }
}
const jackaldinho = new ArsenalNewSigning('Jackaldinho', 35, 'Right Wing', 'Napoli', 80, '3-year')
const saka = new ArsenalPlayer('Saka', 24, 'Right Wing')
const rice = new ArsenalPlayer('Rice', 27, 'Centre Midfield')