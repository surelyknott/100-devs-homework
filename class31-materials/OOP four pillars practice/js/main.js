//Create a class and extend it - Can be anything you would like it to be! 

class BoardGame{
    constructor (title, theme, complexity){
        this._title = title
        this._theme = theme
        this._complexity = complexity
    }
    get title(){
        return this._title
    }
    get theme(){
        return this._theme
    }
    get complexity(){
        return this._complexity
    }
    gameStart(){
        console.log(`Let's begin playing ${this._title}`)
    }
}
class StrategyBoardGame extends BoardGame {
  constructor(title, theme, complexity, minPlayers, maxPlayers, playTimeMins) {
    super(title, theme, complexity); // parent properties
    this.minPlayers = minPlayers; // new properties
    this.maxPlayers = maxPlayers;
    this.playTimeMins = playTimeMins;
    }
}
class CooperativeBoardGame extends BoardGame {
  constructor(title, theme, complexity, playTimeMins) {
    super(title, theme, complexity); // parent properties
    this.playTimeMins = playTimeMins;     // new properties
    }
    gameStart(){
        super.gameStart()
        console.log(`Ready for some cooperative ${this.title}`)
    }
}
const catan = new StrategyBoardGame('Catan', 'trading', 2.3, 3, 4, 90)
const skyTeam = new CooperativeBoardGame('Sky Team', 'family', 2, 20)