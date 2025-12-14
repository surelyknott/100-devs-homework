//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixShow {
    constructor (title, genre, cast, budget) {
        this.title = title
        this.genre = genre
        this.cast = cast
        this.budget = budget
    }
    showStart(){
        alert ('BA-BAAAaaaaa')
    }
    lastTime(){
        console.log ('Last episodes re-cap...')
    }
    showEnd(){
        console.log (`that's a wrap on ${this.title}!`)
    }
}

let lordOfTheStarWars = new NetflixShow ('Lord of the Star Wars', 'Fantasy / Sci-Fi', ['Michael Fassbender', 'Jack Black', 'Hugh Laurie', 'Olivia Coleman'], '75 Billion')
