//Create a pizza object that has four properties and three methods

let pizzaTest = {}

pizzaTest.size = 'large'
pizzaTest.toppings = ['mushrooms', 'ham', 'red onion', 'chicken']
pizzaTest.base = 'barbecue'
pizzaTest.company = 'dominos'

pizzaTest.burnt = function(){
    console.log('AAAGggHHHhhHHH')
}

pizzaTest.deviveryTime = function(){
    console.log('Calculating...')
}

pizzaTest.deal = function(){
    console.log(`You qualify for another small ${pizzaTest.company} pizza!`)
}

function PizzaBuilder (company, size, toppingOne, toppingTwo){

this.company = company
this.size = size
this.toppingOne = toppingOne
this.toppingTwo = toppingTwo

    this.deal = function(){
        console.log(`The deal wizard has made your ${this.size} ${this.company} pizza half price!`)
    }

    this.order = function(){
        console.log(`Your ${this.company} pizza order has been placed!`)
    }

    this.deliver = function(){
        console.log(`Your ${this.company} pizza is with your delivery driver!`)
    }

}

let dominosOrder = new PizzaBuilder ('Dominos', 'large', 'pepperoni', 'red onion')

let papaJohnsOrder = new PizzaBuilder ('Papa Johns', 'double XL','ground beef', 'ham')