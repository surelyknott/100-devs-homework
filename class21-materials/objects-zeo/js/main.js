//Create a stopwatch object that has four properties and three methods

let stopwatch = {}

stopwatch.brand = 'speedo'
stopwatch.colour = 'black'
stopwatch.shape = 'oval'
stopwatch.model = 'speedjet'

stopwatch.start = function (){
    console.log('starting')
}

stopwatch.stop = function (){
    console.log('stopping')
}

stopwatch.reset = function (){
    console.log('resetting')
}