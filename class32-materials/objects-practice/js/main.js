// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 

class Contractor{
    constructor(name, role){
        this._name = name
        this._role = role
    }
    get name(){
        return this._name
    }
    get role(){
        return this._role
    }
    sayHello(){
        console.log(`Hello, I'm on the ${this._role} team at #100Devs!`)
    }
}
class Developer extends Contractor{
    constructor(name, role, tech){
        super(name, role)
        this._tech = tech 
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello. I'm on the ${this._role} team at #100Devs and I use ${this._tech}.`)
    }
}
class Front extends Developer{
    constructor(name, role, tech){
        super(name, role, tech)
    }
}
class Back extends Developer{
    constructor(name, role, tech){
        super(name, role, tech)
    }
}

let bob = new Developer ('Bob', 'Front-end', 'JavaScript')
let jack = new Front ('Jack', 'Front-end', 'React')
let jermaine = new Back ('Jermaine', 'Back-end', 'Node')

let agency = [bob, jack, jermaine]

for (person of agency){ //doesn't have to be 'person'... can be anything
    person.sayHello()
}