
function Princess(arena) {
  this.$arena = arena;
  this.x = this.$arena.width() / 2;
  this.y = this.$arena.height() / 2;
  this.dir = "sitting there like a fatass";
  this.speed = 5;
  this.height = 32;
  this.width = 32;
  this.initDisplay();
}

function Cake(arena, x, y) {
  this.$arena = arena;
  this.height = 34;
  this.width = 34;
  this.x = x+this.width/2;
  this.y = y+this.height/2;
  this.cakeDisplay();
}

<<<<<<< HEAD
=======
function Carrot(arena, x, y) {
  this.$arena = arena;
  this.height = 34;
  this.width = 34;
  this.x = x+this.width/2;
  this.y = y+this.height/2;
  this.carrotDisplay();
}

>>>>>>> 659b6a84d6478f7dc9f1aa95e4892961033ee0b6
function Score(scorebar) {
  this.$scorebar = scorebar;
  this.pounds = 200;
  this.lives = 3;
  this.scoreDisplay();
}

<<<<<<< HEAD
Score.prototype.pounds = 200;
Score.prototype.lives = 3;

=======
>>>>>>> 659b6a84d6478f7dc9f1aa95e4892961033ee0b6
Cake.prototype.cakeDisplay = function() {
  this.$cake = $("<div class='cake'></div>")
  $('#arena').append(this.$cake);

  this.updateCakeDisplay();
}

Carrot.prototype.carrotDisplay = function() {
  this.$carrot = $("<div class='carrot'></div>")
  $('#arena').append(this.$carrot);

  this.updateCarrotDisplay();
}

Princess.prototype.initDisplay = function() {
  this.$princess = $("<div id='princess'></div>")
  $('#arena').append(this.$princess);

  this.updateDisplay();
}

Score.prototype.scoreDisplay = function() {
  this.$score = $("<div id='score'>POUNDS: "+this.pounds+"<br>LIVES: "+this.lives+"</div>")
  $('#scorebar').append(this.$score);
}

<<<<<<< HEAD
Princess.prototype.eatCake = function (cake, score) {
  if (Math.sqrt(Math.pow((this.x-cake.x),2)+Math.pow(this.y-cake.y,2)) < (cake.width+this.width)/2){
      cake.x = Math.random(200,650)*800;
      cake.y = Math.random(200,650)*800;
      this.fattenBooty();
      cake.updateCakeDisplay();
      score.pounds = 30;
      score.scoreDisplay();
      console.log(score.pounds);
      console.log("cake eaten");
=======
Princess.prototype.eatCake = function (cake) {
  if (Math.sqrt(Math.pow((this.x-cake.x),2)+Math.pow(this.y-cake.y,2)) < (cake.width+this.width)/2)
    {
    nomCake.play();
    cake.x = Math.random()*600;
    cake.y = Math.random()*600;
    this.fattenBooty();
    cake.updateCakeDisplay();
    console.log("cake eaten");
>>>>>>> 659b6a84d6478f7dc9f1aa95e4892961033ee0b6
    }
  console.log("im eating cakes");

  // if (score.lives == 0){
  //   score.lives = "Game Over"
  // }
}

<<<<<<< HEAD
Princess.prototype.fattenBooty = function (score) {
  this.height += 50;
  this.width += 50;
=======
Princess.prototype.eatCarrot = function (carrot) {
  if (Math.sqrt(Math.pow((this.x-carrot.x),2)+Math.pow(this.y-carrot.y,2)) < (carrot.width+this.width)/2)
    {
    nomCarrot.play();
    carrot.x = Math.random()*600;
    carrot.y = Math.random()*600;
    this.skinnyBooty();
    carrot.updateCarrotDisplay();
    }
}

Princess.prototype.fattenBooty = function () {
  this.height += 20;
  this.width += 20;
>>>>>>> 659b6a84d6478f7dc9f1aa95e4892961033ee0b6
  $('#princess').css({height: this.height, width: this.width});
  this.updateDisplay();
}

Princess.prototype.skinnyBooty = function () {
  this.height -= 20;
  this.width -= 20;
  $('#princess').css({height: this.height, width: this.width});
  this.updateDisplay();
}

Princess.prototype.move = function() {
  old_x = this.x;
  old_y = this.y;
  switch (this.dir) {
    case 'right':
      this.x += this.speed;
      break;
    case 'left':
      this.x -= this.speed;
      break;
    case 'up':
      this.y -= this.speed;
      break;
    case 'down':
      this.y += this.speed;
      break;
  }
  if (! this.inBounds()) {
    this.x = old_x;
    this.y = old_y;
  }
  this.updateDisplay();
}

///////////////////////
///   Sound Files   ///
///////////////////////

var nomCake = new Audio('cakenom.wav');
var nomCarrot = new Audio('ew.wav');

Princess.prototype.inBounds = function () {
  return (this.x > this.width / 2 && this.x < this.$arena.width() - this.width / 2 && this.y > this.height / 2 && this.y < this.$arena.height() - this.height / 2)
}

///////////////////////////
///   Display Updates   ///
///////////////////////////

Princess.prototype.updateDisplay = function () {
  this.$princess.css('top', this.y - this.height / 2);
  this.$princess.css('left', this.x - this.width / 2);
}

Cake.prototype.updateCakeDisplay = function () {
  this.$cake.css('top', this.y - this.height / 2);
  this.$cake.css('left', this.x - this.width / 2);
}

<<<<<<< HEAD
Game.prototype.loop = function() {
  this.princess.move();
  this.princess.eatCake(this.cake[0], score);
=======
Carrot.prototype.updateCarrotDisplay = function () {
  this.$carrot.css('top', this.y - this.height / 2);
  this.$carrot.css('left', this.x - this.width / 2);
}
///////////////////////////
///    Game Creation    ///
///////////////////////////

Game.prototype.loop = function() {
  this.princess.move();
  this.princess.eatCake(this.cake[0],  score);
  this.princess.eatCarrot(this.carrot[0],  score);
>>>>>>> 659b6a84d6478f7dc9f1aa95e4892961033ee0b6
}

$(document).ready(function() {
  game = new Game();
  setInterval(function() { game.loop(); }, 20);

  ['left','right','up','down'].forEach(function(direction) {
    Mousetrap.bind(direction, function() {
      game.princess.dir = direction;
    });
  });
})

function Game() {
  this.$arena = $('#arena');
  this.$scorebar = $('#scorebar');
  this.princess = new Princess(this.$arena);
  this.cake = [new Cake(this.$arena, 600, 600)];
  this.carrot = [new Carrot(this.$arena, 200, 200)];
  this.score = new Score(this.$scorebar);
  // this.$carrots = [new Carrot(this.$arena)];
  this.score = new Score(this.$scorebar);
}
