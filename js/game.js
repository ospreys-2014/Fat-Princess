function Princess(arena) {
  this.$arena = arena;
  this.x = this.$arena.width() / 2;
  this.y = this.$arena.height() / 2;
  this.dir = "sitting there like a fatass";
  this.speed = 3;
  this.height = 32;
  this.width = 32;
  this.initDisplay();
}

function Cake(arena, x, y) {
  this.$arena = arena;
  this.x = x;
  this.y = y;
  // this.dir = "sitting there like a fatass";
  this.height = 34;
  this.width = 34;
  this.cakeDisplay();
}

Cake.prototype.cakeDisplay = function() {
  this.$cake = $("<div class='cake'></div>")
  $('#arena').append(this.$cake);

  this.updateCakeDisplay();
}

Princess.prototype.initDisplay = function() {
  this.$princess = $("<div id='princess'></div>")
  $('#arena').append(this.$princess);

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

function Game() {
  this.$arena = $('#arena');
  this.princess = new Princess(this.$arena);
  this.cake = [new Cake(this.$arena, 400, 400)];
  // this.$carrots = [new Carrot(this.$arena)];
}

Game.prototype.loop = function() {
  this.princess.move();
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
