//Create a Tony Hawk Pro Skater constructor that makes a skating game character with 4 properties and 3 methods

function TonyHawkCharacter(thCharacter, thSponsor, thStance, thSpecial){ //capitalised the 't' in tony hawk because it's a constructor

    this.character = thCharacter
    this.sponsor = thSponsor
    this.stance = thStance
    this.special = thSpecial

    this.catchPhrase = function (){
        console.log(`Gimme a ${this.special}!`)
    }
    this.skateForWho = function (){
        console.log(`I skate for ${this.company}!`)
    }
}

let tonyHawk = new TonyHawkCharacter ('Tony Hawk', 'Birdhouse', 'Regular', 'McTwist')

let kareemCampbell = new TonyHawkCharacter ('Kareem', 'Element', 'Goofy', 'Ghetto Bird')