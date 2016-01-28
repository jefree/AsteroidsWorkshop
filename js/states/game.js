var MyFirstGame = MyFirstGame || {};

MyFirstGame.GameState = function(){
  //initialize global features for your game
  this.asteroids = [];
  this.score = 0;

}

MyFirstGame.GameState.prototype.preload = function() {
  // load all the assets you need
  this.load.image('ship', 'img/ship.png');
  this.load.spritesheet('asteroid', 'img/asteroid.png', 120, 120);
}

MyFirstGame.GameState.prototype.create = function() {
  // create the entities for your game
  this.ship = this.game.add.sprite(0, 0, 'ship');

  this.ship.anchor.set(0.5, 1);

  this.ship.x = this.game.world.centerX;
  this.ship.y = this.game.world.height;

  //config the keyboard input
  this.left = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
  this.right = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

}

MyFirstGame.GameState.prototype.update = function() {
  // check the rules of your game

  if (this.left.isDown) {
    this.ship.x -= 7;
  }

  if (this.right.isDown) {
    this.ship.x += 7;
  }
}

MyFirstGame.GameState.prototype.render = function() {
  //do debugging operations here
}
