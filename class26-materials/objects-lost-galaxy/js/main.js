//Create a pizza object that has four properties and three methods

function Pizza (company, size, toppingOne, toppingTwo){

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

let dominosOrder = new Pizza ('Dominos', 'large', 'pepperoni', 'red onion')

let papaJohnsOrder = new Pizza ('Papa Johns', 'double XL','ground beef', 'ham')