var MyFirstGame = MyFirstGame || {};

MyFirstGame.GameState = function(game){
  //initialize global features for your game
}

MyFirstGame.GameState.prototype.preload = function() {
  // load al the assets you need
}

MyFirstGame.GameState.prototype.create = function() {
  // create the entities for your game
}

MyFirstGame.GameState.prototype.update = function() {
  // check the rules of your game
  // jump between states
  // this.game.state.start('another state');
  console.log("playing");
}

MyFirstGame.GameState.prototype.render = function() {
  //do debugging operations here
}
