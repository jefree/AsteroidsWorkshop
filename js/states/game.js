var MyFirstGame = MyFirstGame || {};

MyFirstGame.GameState = function(){
  //initialize global features for your game
  this.SHIP_SPEED = 200;
  this.AST_SPEED = 250;
  this.AST_TIME = 1000;

  this.asteroids = [];
  this.score = 0;
  this.astElapsedTime = 0;

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

  this.scoreText = this.add.text(550, 20, '0', {fill: 'white', fontSize: 16})
}

MyFirstGame.GameState.prototype.update = function() {
  // check the rules of your game

  //check if we must create a new asteroid
  var deltaTime = this.game.time.physicsElapsedMS;

  this.astElapsedTime += deltaTime;

  if (this.astElapsedTime >= this.AST_TIME) {
    this.createAsteroid();
    this.astElapsedTime = 0;
  }

  for (var i=this.asteroids.length-1; i>=0; i--) {
    if (this.asteroids[i].y > this.game.world.height + this.asteroids[i].height) {
      this.asteroids[i].destroy();
      this.asteroids.splice(i, 1);
      this.score += 1;
      this.scoreText.text = this.score;
    }
  }

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

MyFirstGame.GameState.prototype.createAsteroid = function() {
  var asteroid = this.game.add.sprite(0, 0, 'asteroid');
  this.game.physics.enable(asteroid);

  asteroid.animations.add('rotate', null, 24, true);
  asteroid.play('rotate');

  asteroid.body.velocity.y = this.AST_SPEED;
  asteroid.anchor.set(0, 1);
  asteroid.x = Math.random() * (this.game.world.width - asteroid.width);

  this.asteroids.push(asteroid);
}
