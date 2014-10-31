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

Princess.prototype.initDisplay = function() {
  this.$princess = $("<div class='princess'></div>")
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

function Game() {
  this.$arena = $('#arena');
  this.princess = new Princess(this.$arena);
  // this.$cakes = [new Cake(this.$arena)];
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
