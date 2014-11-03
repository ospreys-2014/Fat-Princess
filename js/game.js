
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
  // this.dir = "sitting there like a fatass";
  this.height = 34;
  this.width = 34;
  this.x = x+this.width/2;
  this.y = y+this.height/2;
  this.cakeDisplay();
}

function Carrot(arena, x, y) {
  this.$arena = arena;
  // this.dir = "sitting there like a fatass";
  this.height = 34;
  this.width = 34;
  this.x = x+this.width/2;
  this.y = y+this.height/2;
  this.carrotDisplay();
}

var randomNum = function() {Math.floor(Math.random() * (600 - 17 + 1)) + 17; }

Princess.prototype.initDisplay = function() {
  this.$princess = $("<div id='princess'></div>")
  $('#arena').append(this.$princess);

  this.updateDisplay();
}

Cake.prototype.cakeDisplay = function() {
  this.$cake = $("<div class='cake'></div>")
  $('#arena').append(this.$cake);
  console.log(this.$cake)
  this.updateCakeDisplay();
}


Carrot.prototype.carrotDisplay = function() {
  this.$carrot = $("<div class='carrot'></div>")
  $('#arena').append(this.$carrot);

  this.updateCarrotDisplay();
}

Princess.prototype.eatCake = function(cake) {
  if (Math.sqrt(Math.pow((this.x-cake.x),2)+Math.pow(this.y-cake.y,2)) < (cake.width+this.width)/2)
    {
    nomCake.play();
    cake.x = Math.floor(Math.random()*600);
    cake.y = Math.floor(Math.random()*600);
    this.fattenBooty();
    cake.updateCakeDisplay();
    // console.log("cake eaten");
    }
  // console.log("im eating cakes");
}

Princess.prototype.eatCarrot = function(carrot) {
  if (Math.sqrt(Math.pow((this.x-carrot.x),2)+Math.pow(this.y-carrot.y,2)) < (carrot.width+this.width)/2)
    {
    nomCarrot.play();
    carrot.x = Math.floor(Math.random(200,650)*800);
    carrot.y = Math.floor(Math.random(200,650)*800);
    this.loseWeight();
    carrot.updateCarrotDisplay();
    // console.log("carrot eaten");
    }
  // console.log("im eating carrots");
}

Princess.prototype.fattenBooty = function() {
  this.height += 15;
  this.width += 15;
  $('#princess').css({height: this.height, width: this.width});
  this.updateDisplay();
}

Princess.prototype.loseWeight = function () {
  this.height -= 10;
  this.width -= 10;
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

var nomCake = new Audio('cakenom.wav');
var nomCarrot = new Audio('ew.wav');


Princess.prototype.inBounds = function () {
  return (this.x > this.width / 2 && this.x < this.$arena.width() - this.width / 2 && this.y > this.height / 2 && this.y < this.$arena.height() - this.height / 2)
}


Princess.prototype.updateDisplay = function () {
  this.$princess.css('top', this.y - this.height / 2);
  this.$princess.css('left', this.x - this.width / 2);
}

Cake.prototype.updateCakeDisplay = function () {
  this.$cake.css('top', this.y - this.height / 2);
  this.$cake.css('left', this.x - this.width / 2);
}

Carrot.prototype.updateCarrotDisplay = function () {
  this.$carrot.css('top', this.y - this.height / 2);
  this.$carrot.css('left', this.x - this.width / 2);
}


Game.prototype.loop = function() {
  this.princess.move();
  this.princess.eatCake(this.cake[0]);
  this.princess.eatCarrot(this.carrot[0]);
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
  this.princess = new Princess(this.$arena);
  this.cake = [new Cake(this.$arena, 600, 600)];
  this.carrot = [new Carrot(this.$arena, 500, 500)];
}
