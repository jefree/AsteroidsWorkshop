var MyFirstGame = MyFirstGame || {};

MyFirstGame.GameState = function(){
  //initialize global features for your game
  this.asteroids = [];
  this.score = 0;

  this.SHIP_SPEED = 200;
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

  //config the physics system
  this.game.physics.startSystem(Phaser.Physics.ARCADE);

  this.game.physics.arcade.enable(this.ship);
  this.ship.body.collideWorldBounds = true;
}

MyFirstGame.GameState.prototype.update = function() {
  // check the rules of your game
  this.ship.body.velocity.set(0, 0);

  if (this.left.isDown) {
    this.ship.body.velocity.x = -this.SHIP_SPEED; 
  } 

  if (this.right.isDown) {
    this.ship.body.velocity.x = this.SHIP_SPEED;
  }
}

MyFirstGame.GameState.prototype.render = function() {
  //do debugging operations here
}
