(function(){
  var game = new Phaser.Game(600, 600, Phaser.AUTO, 'my-game');
  
//  game.state.add('boot', MyFirstGame.BootState);
  game.state.add('game', MyFirstGame.GameState);

  game.state.start('game');
})();
